 import{test, expect} from '@playwright/test'

 test('API GET Request', async ({request}) => {
   // Send a GET request & store response in a variable 
    const response = await request.get('https://gorest.co.in/public/v2/users/6942508')

    // Verify the status code of the response is 200
    expect(response.status()).toBe(200);

    // Check response contains some text    
    const text = await response.text();
    expect(text).toContain('Rageshwari');

    // Write response on the console    
    console.log(await response.json());
 })