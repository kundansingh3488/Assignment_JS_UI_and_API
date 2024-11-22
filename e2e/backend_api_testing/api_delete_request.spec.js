import { test, expect } from '@playwright/test';  

// Create a test using request context    
test('API DELETE Request',async ({request}) => {
    
//  Send a POST request along with request body & store response in a variable
const response = await request.delete("https://gorest.co.in/public/v2/todos/7538757", {
  })

// Verify response status code
expect(response.status()).toBe(204);

// Write response on the console    
console.log(await response.json());
})