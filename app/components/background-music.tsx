"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const audioSource = "/background-song.mpeg";
const audioVolume = 0.45;

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const playMusic = useCallback(async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    userPausedRef.current = false;
    audio.muted = false;
    audio.volume = audioVolume;

    try {
      await audio.play();
      setIsPlaying(true);
      setIsBlocked(false);
    } catch {
      setIsPlaying(false);
      setIsBlocked(true);
    }
  }, []);

  const pauseMusic = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    userPausedRef.current = true;
    audio.pause();
    setIsPlaying(false);
    setIsBlocked(false);
  }, []);

  useEffect(() => {
    const playAfterFirstInteraction = () => {
      const audio = audioRef.current;

      if (!audio || userPausedRef.current || !audio.paused) {
        return;
      }

      void playMusic();
    };

    window.addEventListener("pointerdown", playAfterFirstInteraction, { capture: true });
    window.addEventListener("keydown", playAfterFirstInteraction, { capture: true });
    window.addEventListener("touchstart", playAfterFirstInteraction, { capture: true });

    return () => {
      window.removeEventListener("pointerdown", playAfterFirstInteraction, { capture: true });
      window.removeEventListener("keydown", playAfterFirstInteraction, { capture: true });
      window.removeEventListener("touchstart", playAfterFirstInteraction, { capture: true });
    };
  }, [playMusic]);

  const handleToggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
      return;
    }

    void playMusic();
  };

  const buttonLabel = isPlaying
    ? "Turn music off"
    : isBlocked
      ? "Play music"
      : "Turn music on";

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSource}
        loop
        preload="none"
        onCanPlay={() => {
          if (!isPlaying && !userPausedRef.current) {
            void playMusic();
          }
        }}
        onPlay={() => {
          setIsPlaying(true);
          setIsBlocked(false);
        }}
        onPause={() => setIsPlaying(false)}
      />
      <button
        type="button"
        aria-label={buttonLabel}
        aria-pressed={isPlaying}
        title={buttonLabel}
        onClick={handleToggleMusic}
        className="fixed bottom-5 right-5 z-[120] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCEBF7] bg-white/95 text-[#0F172A] shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
      >
        {isPlaying ? (
          <Volume2 className="h-6 w-6 text-[#075985]" aria-hidden="true" />
        ) : isBlocked ? (
          <Play className="h-6 w-6 text-[#075985]" aria-hidden="true" />
        ) : (
          <VolumeX className="h-6 w-6 text-[#64748B]" aria-hidden="true" />
        )}
      </button>
    </>
  );
}
