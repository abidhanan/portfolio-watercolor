"use client";

import Image from "next/image";
import { X } from "lucide-react";
import type { MouseEvent, PointerEvent } from "react";
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

export function CertificateMarquee({ certificates }: CertificateMarqueeProps) {
  const { content } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [overlayTop, setOverlayTop] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    active: false,
    certificate: null as CertificateItem | null,
    moved: false,
    pointerId: -1,
    scrollLeft: 0,
    startX: 0,
  });
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

  function openCertificate(certificate: CertificateItem) {
    setOverlayTop(document.querySelector("header")?.getBoundingClientRect().height ?? 0);
    setSelectedCertificate(certificate);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const certificateButton = (event.target as HTMLElement).closest<HTMLButtonElement>(
      "[data-certificate-index]",
    );
    const certificateIndex = certificateButton?.dataset.certificateIndex
      ? Number(certificateButton.dataset.certificateIndex)
      : -1;

    dragStateRef.current = {
      active: true,
      certificate: certificates[certificateIndex] ?? null,
      moved: false,
      pointerId: event.pointerId,
      scrollLeft: scroller.scrollLeft,
      startX: event.clientX,
    };
    suppressClickRef.current = false;
    scroller.classList.add("is-interacting");
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;
    const dragState = dragStateRef.current;

    if (!scroller || !dragState.active) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;

    if (Math.abs(deltaX) > 6) {
      suppressClickRef.current = true;
      dragState.moved = true;
      scroller.classList.add("is-dragging");
      event.preventDefault();
    }

    scroller.scrollLeft = dragState.scrollLeft - deltaX;
  }

  function resetSuppressClick() {
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  }

  function finishPointerInteraction(event: PointerEvent<HTMLDivElement>, shouldOpen: boolean) {
    const scroller = scrollerRef.current;
    const dragState = dragStateRef.current;

    if (!scroller || !dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    const certificateToOpen = shouldOpen && !dragState.moved ? dragState.certificate : null;

    dragStateRef.current.active = false;
    dragStateRef.current.certificate = null;
    dragStateRef.current.moved = false;
    scroller.classList.remove("is-dragging");
    scroller.classList.remove("is-interacting");

    if (certificateToOpen) {
      suppressClickRef.current = true;
      openCertificate(certificateToOpen);
      resetSuppressClick();
    } else if (suppressClickRef.current) {
      resetSuppressClick();
    }
  }

  function stopDragging(event: PointerEvent<HTMLDivElement>) {
    finishPointerInteraction(event, false);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    finishPointerInteraction(event, true);
  }

  function handleCertificateClick(
    event: MouseEvent<HTMLButtonElement>,
    certificate: CertificateItem,
  ) {
    if (suppressClickRef.current) {
      event.preventDefault();
      event.stopPropagation();
      suppressClickRef.current = false;
      return;
    }

    openCertificate(certificate);
  }

  return (
    <>
      <div
        ref={scrollerRef}
        className="certificate-marquee-mask certificate-marquee-scroller relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-2"
        onPointerCancel={stopDragging}
        onPointerDown={handlePointerDown}
        onPointerLeave={stopDragging}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className="certificate-marquee-track flex w-max gap-5">
          {[...certificates, ...certificates].map((certificate, index) => {
            const isDuplicate = index >= certificates.length;

            return (
              <button
                key={`${certificate.title}-${certificate.year}-${index}`}
                type="button"
                data-certificate-index={index % certificates.length}
                tabIndex={isDuplicate ? -1 : 0}
                onClick={(event) => handleCertificateClick(event, certificate)}
                className="shadow-watercolor flex w-72 shrink-0 cursor-pointer flex-col rounded-xl border border-[#CFE2F3] bg-white p-4 text-left transition-transform hover:-translate-y-1 hover:shadow-lg md:w-80"
                aria-hidden={isDuplicate}
                aria-label={`${content.certificates.openLabel} ${certificate.title}`}
              >
                <div className="relative mb-4 h-48 overflow-hidden rounded-xl border border-[#DCEBF7] bg-white md:h-56">
                  {certificate.image ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={certificate.image}
                        alt={`${content.certificates.imageAlt} ${certificate.title}`}
                        fill
                        sizes="320px"
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
