"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

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

  useEffect(() => {
    if (!selectedCertificate) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <>
      <div className="certificate-marquee-mask overflow-hidden py-2">
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
                      onClick={() => setSelectedCertificate(certificate)}
                      className="group relative block h-full w-full cursor-zoom-in"
                      aria-label={`Zoom sertifikat ${certificate.title}`}
                    >
                      <Image
                        src={certificate.image}
                        alt={`Sertifikat ${certificate.title}`}
                        fill
                        sizes="320px"
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-[#102A43]/80 text-white shadow-sm backdrop-blur">
                        <ZoomIn className="h-4 w-4" aria-hidden="true" />
                      </span>
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
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#102A43]/82 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Zoom sertifikat ${selectedCertificate.title}`}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative h-[86vh] w-full max-w-5xl rounded-xl border border-white/40 bg-white p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#102A43] text-white shadow-md transition-opacity hover:opacity-90"
              aria-label="Tutup zoom sertifikat"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="relative h-full w-full">
              <Image
                src={selectedCertificate.image}
                alt={`Sertifikat ${selectedCertificate.title}`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
