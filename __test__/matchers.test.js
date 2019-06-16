describe('Comparadores comunes', () => {
  const user = {
    name: 'Crix',
    lastName: 'Rosales'
  }
  const user2 = {
    name: 'Crix2',
    lastName: 'Rosales'
  }

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });

  test('No son iguales', () => {
    expect(user).not.toEqual(user2);
  });
});