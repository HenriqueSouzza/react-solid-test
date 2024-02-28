import { StorageBrowser } from '.';

const sessionStorageMock = (() => {
  let storage = {}

  return {
    getItem: (key: string) => (storage as any)[key],
    setItem: (key: string, value: string) => Object.assign(storage, { [key]: value })
  }
})()

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock
});

describe('StorageBrowser', () => {
  const mockSessionStorage = {
    key: 'login',
    value: JSON.stringify({ data: 'testando aqui' })
  }

  it('should set data sessionStorage', () => {
    StorageBrowser.sessionStorage.setItem(mockSessionStorage);
    expect(window.sessionStorage.getItem(mockSessionStorage.key)).toEqual(mockSessionStorage.value);
  });
});