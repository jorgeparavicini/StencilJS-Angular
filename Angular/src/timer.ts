let start: number = 0;

export function startTimer(): void {
  start = performance.now();
}

export function getStartTime(): number {
  return start;
}

export function getElapsedTime(): number {
  return performance.now() - start;
}
