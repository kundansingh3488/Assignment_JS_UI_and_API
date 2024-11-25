import { test, expect } from '@playwright/test';  

// Create a test using request context    
test('API POST Request',async ({request}) => {
    
//  Send a POST request along with request body & store response in a variable
const response = await request.post("https://gorest.co.in/public/v2/users", {
        data: {
          "id": 7538685,
          "name": "Michel jectio",
          "email": "michel_jection@test.example",
          "gender": "male",
          "status": "active"
          }
  })

// Verify response status code
expect(response.status()).toBe(201);

// Check response contains some text    
const text = await response.text();
expect(text).toContain('Michel');
expect(text).toContain('Jection');

// Write response on the console    
console.log(await response.json());
})