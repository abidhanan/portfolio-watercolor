import type Lenis from "lenis";

// Shared reference to the active Lenis instance so other components (e.g. the
// certificate modal) can pause/resume smooth scrolling.
let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}
