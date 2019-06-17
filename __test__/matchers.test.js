describe('Comparadores comunes', () => {
  const user = {
    name: 'Crix',
    lastName: 'Rosales'
  }
  const user2 = {
    name: 'Crix',
    lastName: 'Rosales'
  }

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });
  const user3 = {
    name: 'Crix2',
    lastName: 'Rosales'
  }
  test('No son iguales', () => {
    expect(user).not.toEqual(user3);
  });
});