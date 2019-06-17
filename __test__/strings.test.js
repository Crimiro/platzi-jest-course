
describe('Comprobar cadenas de texto', () => {
  const text = 'es un bonito texto';
  test('Debe de contener en el texto', () => {
    expect(text).toMatch(/bonito/);
  });
  test('No contiene el siguiente texto', () => {
    expect(text).toMatch(/es/);
  });
  test('Comprobar el tamaño de un texto', () => {
    expect(text).toHaveLength(18);
  });
});