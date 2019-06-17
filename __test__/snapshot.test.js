import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Es hora de las intantaneas', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });
  test('Siempre fallará la instantanea', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20)
    }
    expect(user).toMatchSnapshot();
  });

  test('Tenemos una excepción', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: 'Crix Rosales'
    }
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    });
  });
});