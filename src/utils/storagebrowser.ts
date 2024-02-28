import { RequestProps, ResponseProps } from "@/interfaces";

const setItem = ({ key, value }: RequestProps): ResponseProps => {
  sessionStorage.setItem(key, value)
  return getItem(key)
};

const getItem = (key: RequestProps['key']): ResponseProps => {
  let data = null

  try {
    data = JSON.parse(`${sessionStorage.getItem(key)}`)
  } catch (error) {
    return { data }
  }

  if (!sessionStorage.getItem(key)) {
    return { data }
  }

  if (!Object.keys(data).length) {
    data = null
  }

  return { data }
}

export const StorageBrowser = {
  sessionStorage: { setItem, getItem }
}