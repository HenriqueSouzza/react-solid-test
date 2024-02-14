import { generateHash, userFind } from '.';

describe('Auth', () => {
  it('should search and return user width sucess', () => {
    const response = userFind({
      username: String(generateHash('henrique.souza')),
      password: String(generateHash('Henry123456'))
    });

    expect(response).toEqual({ "password": "-1874748069", "username": "-904716021" });
  });

  it('should search and not return undefined', () => {
    const response = userFind({
      username: String(generateHash('henrique.souza')),
      password: String(generateHash('101010'))
    });

    expect(response).toBeUndefined();
  });
});