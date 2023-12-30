import { RequestProps, ResponseProps } from "@/interfaces";

const setItem = ({ key, value }: RequestProps): ResponseProps => {
  sessionStorage.setItem(key, value)
  return getItem(key)
};

const getItem = (key: RequestProps['key']): ResponseProps => {
  return {
    data: (sessionStorage.getItem(key) && String(sessionStorage.getItem(key))) || ''
  }
}

export const StorageBrowser = {
  sessionStorage: { setItem, getItem }
}