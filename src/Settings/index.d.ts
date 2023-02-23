declare namespace Settings {
  type SettingType = 'app' | 'platform' | 'user'
  function get(type: SettingType, key: string, fallback?: any): any
  function set(key: string, value: any): void // set user defined setting
  function has(type: SettingType, key: string): boolean
  function subscribe(key: string, callback: (value: any) => void): void
  function unsubscribe(key: string, callback?: (value: any) => void): void
  function clearSubscribers(): void
}
