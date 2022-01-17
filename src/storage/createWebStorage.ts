import getStorage from './getStorage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function createWebStorage(type: string): any {
  const storage = getStorage(type)
  return {
    getItem: (key: string) => {
      storage.getItem(key)
    },
    setItem: (key: string, item: string) => {
      storage.setItem(key, item)
    },
    removeItem: (key: string) => {
      storage.removeItem(key)
    },
  }
}
