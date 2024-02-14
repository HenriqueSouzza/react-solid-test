import { generateHash } from '.';

describe('Hash', () => {
  it('should return data encrypted', () => {
    const response = generateHash('henrique.souza');
    expect(response).toBe(-904716021);
  });
});