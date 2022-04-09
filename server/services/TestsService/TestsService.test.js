const TestsService = require('./TestsService');

describe('TestsService', () => {
  it('should return', async () => {
    const data = await TestsService.get();
    const expectedData = { message: 'Hello world!' };

    expect(data).toEqual(expectedData);
  });
});
