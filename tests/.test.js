const request = require('supertest'); // Import supertest
const app = require('../index'); // Import your Express app (assuming your main file is index.js)

describe('GET / endpoint', () => {
  it('should return "Hello, Jenkins!" and status code 200', async () => {
    const response = await request(app).get('/'); // Use supertest to make a request to your app
    expect(response.statusCode).toBe(200); // Check if status code is 200
    expect(response.text).toBe('Hello, Jenkins!'); // Check if response body is "Hello, Jenkins!"
  });
});