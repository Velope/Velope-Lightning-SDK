export default class Log {
  static info(label: string, ...args: any[]): void
  static debug(label: string, ...args: any[]): void
  static error(label: string, ...args: any[]): void
  static warn(label: string, ...args: any[]): void
}
