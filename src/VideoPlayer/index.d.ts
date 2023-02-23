import Component from "@lightningjs/core/src/application/Component.mjs"

interface VideoPlayerConfig {
  startPosition?: number
}

export default class VideoPlayerComponent {
  _videoEl: HTMLMediaElement
  isPlaying: boolean // Custom for use with hls.js
  currentTime: number
  duration: number
  consumer(component: Component): void
  position(top: number, left: number): void
  size(width: number, height: number): void
  mute(mute?: boolean): void
  show(): void
  hide(): void
  play(): void
  pause(): void
  open(url: string, config?: VideoPlayerConfig): void
  close(): void
  loader(
    loader: (url: string, videoEl: HTMLMediaElement, config: VideoPlayerConfig) => Promise<void>
  ): void
  unloader(unloader: (videoEl: HTMLMediaElement) => Promise<void>): void
  seek(seconds: number): void
  clear(): void
  loop(loop?: boolean): void
}

export let VideoPlayer: VideoPlayerComponent
