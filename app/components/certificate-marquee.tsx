"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [overlayTop, setOverlayTop] = useState(0);

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

  return (
    <>
      <div className="certificate-marquee-mask relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-2">
        <div className="certificate-marquee-track flex w-max gap-5">
          {[...certificates, ...certificates].map((certificate, index) => {
            const isDuplicate = index >= certificates.length;

            return (
              <article
                key={`${certificate.title}-${certificate.year}-${index}`}
                className="shadow-watercolor flex w-72 shrink-0 flex-col rounded-xl border border-[#CFE2F3] bg-white p-4 md:w-80"
                aria-hidden={isDuplicate}
              >
                <div className="relative mb-4 h-48 overflow-hidden rounded-xl border border-[#DCEBF7] bg-white md:h-56">
                  {certificate.image ? (
                    <button
                      type="button"
                      tabIndex={isDuplicate ? -1 : 0}
                      onClick={() => openCertificate(certificate)}
                      className="group relative block h-full w-full cursor-pointer"
                      aria-label={`Open certificate ${certificate.title}`}
                    >
                      <Image
                        src={certificate.image}
                        alt={`Certificate ${certificate.title}`}
                        fill
                        sizes="320px"
                        className="object-contain p-2"
                      />
                    </button>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#FEF8E7] p-6 text-center">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#977418]">
                        Certificate
                      </p>
                      <p className="text-2xl font-bold leading-tight text-[#102A43]">
                        {certificate.title}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-[#2B6CB0]">
                        Image pending
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
              </article>
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
          aria-label={`Certificate ${selectedCertificate.title}`}
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
              aria-label="Close certificate"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="relative min-h-[46vh] overflow-hidden rounded-xl border border-[#DCEBF7] bg-white md:min-h-[68vh]">
              <Image
                src={selectedCertificate.image}
                alt={`Certificate ${selectedCertificate.title}`}
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
