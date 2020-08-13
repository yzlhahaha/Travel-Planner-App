const app = require('../src/server/server');
const request = require('supertest');

test('test the path', async() => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200)
});