import { getUser } from './get-user';

describe('When everything is OK', () => {
  test('should return a response', async () => {
    // In a real project, you would use Axios and mock the get method
    const result = await getUser();
    expect(result).toEqual({ id: '1', name: 'David' });
  });
});
