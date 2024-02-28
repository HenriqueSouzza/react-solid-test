export const generateHash = (value: string) => {
  let hash = 0;
  let i = 0;
  let len = value.length;

  while (i < len) {
    hash = ((hash << 5) - hash + value.charCodeAt(i++)) << 0;
  }

  return hash;
}