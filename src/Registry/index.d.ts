declare namespace Registry {
  export function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): number
  export function clearTimeout(handle?: number | undefined): void
  export function clearTimeouts(): void
  export function addEventListener(target: EventTarget, event: string, callback: any): void
  export function removeEventListener(target: EventTarget, event: string, callback: any): void
}

export default Registry
