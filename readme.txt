----------------Project Setup-------------------
================================================

Create a API Test Step-by-Step
1.  GET API Request
2. POST API Request
3. PUT API Request
4.  DELETE API Request
5. API Response
6 Check response, logs, errors in UI Mode
7 Check HTML Report

API Testing with Playwright - Project Setup

Step 1 - Create a new folder for API Testing Project
Step 2 - Open the folder in VS Code
Step 3 - Open terminal on the location of the folder and 
	run command :  npm init playwright@latest
	select JavaScript from terminal , remaining keep as default so press 'Enter'.

Step 4 - Check if demo tests are running fine using commands   
npx playwright test
npx playwright test --ui
npx playwright show-report

Step 5 - Create a new file for API Tests (api-tests.spec.js)

NOTE:- Basic command for execution code :
----------------------------------------------------
1 . Runs the end-to-end tests: 'npx playwright test'
2. Starts the interactive UI mode : 'npx playwright test --ui'
3.  Runs the tests only on Desktop Chrome : 'npx playwright test --project=chromium'
4.  Runs the tests in a specific file :  'npx playwright test fileName' 
5.  Runs the tests in debug mode : 'npx playwright test --debug'
6.  Auto generate tests with Codegen : 'npx playwright codegen'
8.  run test in headed mode : 'npx playwright test --headed'
-------------------------------------------
