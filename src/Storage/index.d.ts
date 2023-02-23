declare namespace Storage {
  function get(key: string): string | null
  function set(key: string, value: string): void
  function remove(key: string): void
  function clear(): void
}

export default Storage
