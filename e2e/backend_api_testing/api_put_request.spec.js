import { test, expect } from '@playwright/test';  

// Create a test using request context    
test('API PUT Request',async ({request}) => {
    
//  Send a POST request along with request body & store response in a variable
const response = await request.put("https://gorest.co.in/public/v2/users", {
        data: {
          "id": 7538757,
        "name": "Tom cruse",
        "email": "tom_jcrouse@testing.test",
        "gender": "male",
        "status": "inactive"
      },
  })

// Verify response status code
expect(response.status()).toBe(202);

// Check response contains some text    
const text = await response.text();
expect(text).toContain('Tom');

// Write response on the console    
console.log(await response.json());
})