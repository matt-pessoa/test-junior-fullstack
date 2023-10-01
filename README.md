# test-junior-fullstack
Instructions
You have 48 hours to complete the test. DON'T push any code after delivering the test in this system.
Your solution MUST include automated tests for frontend and/or backend. Having good coverage and testing all the features is part of the test.
You should submit your solution as a PRIVATE GitHub repository and invite diego.tsuyoshi@shawandpartners.com and paulo.mesquita@shawandpartners.com as a collaborator. You can also try by username diego-shawandpartners and PauloMesquitaSP. Make sure you invited both.
Frontend and/or Backend should work by just executing "npm install" followed by "npm run dev" (to run the application) or "npm run test" (to run all the tests). DON'T add extra instructions or docker commands on readme, if anything else needs to be executed before starting the application make sure to include it in your dev script.
DON'T create 2 repositories if you are doing the fullstack test, make sure to include all code in the same github repository.
Javascript files are only allowed in lib configuration files, all your code MUST be in Typescript and completely typed.
Not following any of the instructions above is eliminatory.
The application should include the following features:

Frontend
Should run on port 4000 and everything should be in the "/" route as a single-page application (SPA) using React.
A button to load a CSV file from the local machine.
A search bar that allows users to search for data within the loaded CSV file.
The search bar should update the displayed cards to show only the matching results.
The loaded CSV data should be displayed as cards on the website, with each card displaying all the data from a single row of the CSV file.
A responsive design that works well on both desktop and mobile devices.
Clear and user-friendly error handling.
If doing only Frontend, load the data in memory.
Backend
Should run on port 3000.
The backend should be implemented as a RESTful API using Node. (DON'T use any opinionated framework such as Adonis or Nest).
The backend must include the following endpoints:
[POST /api/files] An endpoint that accepts a CSV file upload from the frontend and stores the data in a database or a data structure. You should use the key "file" in the body request.
[GET /api/users] Should include an endpoint that allows the frontend to search through the loaded CSV data. This route should accept a ?q= query parameter for search terms and should search through EVERY column of the CSV. The filter should search for partial matches and also be case insensitive.
We'll run automated tests into your code, make sure the routes match 100% what have been requested.
The backend should include appropriate error handling for invalid requests or other errors.
The usage of a database is not mandatory, but if you decide to use one, use SQLite, and make sure everything will be setup once the dev script is executed.
Fullstack
Implement both frontend and backend features as described above.
Ensure that the frontend can communicate with the backend API to load the CSV data and search through it.
CSV Data Example
That's the structure example of the CSV file we'll test on your software
The CSV uses commas to split the fields and not semicolons, make sure your code supports that.
name,city,country,favorite_sport
John Doe,New York,USA,Basketball
Jane Smith,London,UK,Football
Mike Johnson,Paris,France,Tennis
Karen Lee,Tokyo,Japan,Swimming
Tom Brown,Sydney,Australia,Running
Emma Wilson,Berlin,Germany,Basketball
Evaluation
We will evaluate your solution based on the following criterias:

Completion of all required features and functionality.
Quality and organization of code.
Quality and coverage of automated tests.
User-friendliness and responsiveness of the frontend.
Performance and efficiency of the backend.
Understanding the requirements is also part of the test. For any other issues, please reach out to hr@shawandpartners.com for assistance.

There's no need to contact us when finishing the test, we'll review it and give you an answer when we finish.

Good luck with your test!
