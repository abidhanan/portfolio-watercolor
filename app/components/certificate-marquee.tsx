"use client";

import Image from "next/image";
import { X } from "lucide-react";
import type { PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./language-provider";

type CertificateItem = {
  title: string;
  issuer: string;
  year: string;
  image?: string;
  desc: string;
};

type CertificateMarqueeProps = {
  certificates: CertificateItem[];
};

// Seconds for the marquee to advance by one full copy of the list.
const LOOP_SECONDS = 60;
// Pointer travel (px) beyond which an interaction counts as a drag, not a click.
const DRAG_THRESHOLD = 6;

export function CertificateMarquee({ certificates }: CertificateMarqueeProps) {
  const { content } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [overlayTop, setOverlayTop] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const copyWidthRef = useRef(0);
  const rafRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const pointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const suppressClickRef = useRef(false);

  useEffect(() => {
    if (!selectedCertificate) {
      return;
    }

    const syncOverlayTop = () => {
      setOverlayTop(document.querySelector("header")?.getBoundingClientRect().height ?? 0);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    syncOverlayTop();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", syncOverlayTop);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", syncOverlayTop);
    };
  }, [selectedCertificate]);

  // Single position model: one rAF loop drives the track transform. Auto-scroll
  // and manual drag both mutate the same `offset`, so they can never desync.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const measure = () => {
      // Distance from the first card to the first card of the duplicated copy —
      // the exact seamless wrap distance (independent of card width / gap).
      const first = track.children[0] as HTMLElement | undefined;
      const copyStart = track.children[certificates.length] as HTMLElement | undefined;
      if (first && copyStart) {
        copyWidthRef.current = copyStart.offsetLeft - first.offsetLeft;
      }
    };

    const wrap = (value: number, span: number) =>
      span > 0 ? ((value % span) + span) % span : 0;

    measure();
    offsetRef.current = wrap(offsetRef.current, copyWidthRef.current);

    const step = (ts: number) => {
      const span = copyWidthRef.current;
      const last = lastTsRef.current ?? ts;
      // Clamp dt so returning from a backgrounded tab (where rAF is paused)
      // advances by at most one frame instead of teleporting across the loop.
      const dt = Math.min((ts - last) / 1000, 0.05);
      lastTsRef.current = ts;

      if (!prefersReducedMotion && !pointerDownRef.current && span > 0) {
        offsetRef.current = wrap(offsetRef.current + (span / LOOP_SECONDS) * dt, span);
      }

      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", measure);
      lastTsRef.current = null;
    };
  }, [certificates.length]);

  function openCertificate(certificate: CertificateItem) {
    setOverlayTop(document.querySelector("header")?.getBoundingClientRect().height ?? 0);
    setSelectedCertificate(certificate);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }
    pointerDownRef.current = true;
    suppressClickRef.current = false;
    startXRef.current = event.clientX;
    startOffsetRef.current = offsetRef.current;
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!pointerDownRef.current) {
      return;
    }
    const delta = event.clientX - startXRef.current;
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      suppressClickRef.current = true;
    }
    const span = copyWidthRef.current;
    offsetRef.current = span > 0
      ? (((startOffsetRef.current - delta) % span) + span) % span
      : 0;
    // Apply immediately so dragging feels responsive even between rAF frames.
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }
  }

  function endPointer() {
    pointerDownRef.current = false;
    lastTsRef.current = null;
  }

  function handleCardClick(certificate: CertificateItem) {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    openCertificate(certificate);
  }

  return (
    <>
      <div
        className="certificate-marquee-mask certificate-marquee-viewport relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-2"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        onPointerLeave={endPointer}
      >
        <div ref={trackRef} className="certificate-marquee-track flex w-max gap-5">
          {[...certificates, ...certificates].map((certificate, index) => {
            const isDuplicate = index >= certificates.length;

            return (
              <button
                key={`${certificate.title}-${certificate.year}-${index}`}
                type="button"
                tabIndex={isDuplicate ? -1 : 0}
                onClick={() => handleCardClick(certificate)}
                className="shadow-watercolor flex w-72 shrink-0 cursor-pointer flex-col rounded-xl border border-[#CFE2F3] bg-white p-4 text-left transition-transform hover:-translate-y-1 hover:shadow-lg md:w-80"
                aria-hidden={isDuplicate}
              >
                <div className="relative mb-4 h-48 overflow-hidden rounded-xl border border-[#DCEBF7] bg-white md:h-56">
                  {certificate.image ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={certificate.image}
                        alt={`${content.certificates.imageAlt} ${certificate.title}`}
                        fill
                        sizes="320px"
                        draggable={false}
                        className="object-contain p-2"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#FEF8E7] p-6 text-center">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#977418]">
                        {content.certificates.fallbackTitle}
                      </p>
                      <p className="text-2xl font-bold leading-tight text-[#102A43]">
                        {certificate.title}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-[#2B6CB0]">
                        {content.certificates.imagePending}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="mb-3 inline-flex w-fit rounded-full border border-[#BEE3F8] bg-[#EBF8FF] px-3 py-1 text-xs font-bold text-[#2C5282]">
                    {certificate.year}
                  </span>
                  <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-tight text-[#102A43]">
                    {certificate.title}
                  </h3>
                  <p className="mb-3 text-sm font-semibold text-[#2B6CB0]">
                    {certificate.issuer}
                  </p>
                  <p className="line-clamp-3 text-sm leading-relaxed text-[#334E68]">
                    {certificate.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedCertificate?.image ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[40] flex items-center justify-center bg-[#102A43]/80 p-4 backdrop-blur-sm"
          style={{ top: overlayTop }}
          role="dialog"
          aria-modal="true"
          aria-label={`${content.certificates.imageAlt} ${selectedCertificate.title}`}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="shadow-watercolor relative grid max-h-[calc(100svh-9rem)] w-full max-w-5xl grid-cols-1 overflow-hidden rounded-xl border border-[#CFE2F3] bg-white p-4 md:max-h-[calc(100svh-7rem)] md:grid-cols-[1fr_0.48fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#102A43] text-white shadow-md transition-opacity hover:opacity-90"
              aria-label={content.certificates.closeLabel}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="relative min-h-[46vh] overflow-hidden rounded-xl border border-[#DCEBF7] bg-white md:min-h-[68vh]">
              <Image
                src={selectedCertificate.image}
                alt={`${content.certificates.imageAlt} ${selectedCertificate.title}`}
                fill
                sizes="70vw"
                className="object-contain p-3"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-4 md:p-6">
              <span className="mb-4 w-fit rounded-full border border-[#BEE3F8] bg-[#EBF8FF] px-3 py-1 text-xs font-bold text-[#2C5282]">
                {selectedCertificate.year}
              </span>
              <h3 className="mb-3 text-2xl font-bold leading-tight text-[#102A43]">
                {selectedCertificate.title}
              </h3>
              <p className="mb-4 font-semibold text-[#2B6CB0]">
                {selectedCertificate.issuer}
              </p>
              <p className="leading-relaxed text-[#334E68]">{selectedCertificate.desc}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
