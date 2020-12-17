let start: number = 0;

export function startTimer(): void {
  start = performance.now();
}

export function getStartTime(): number {
  return start;
}
