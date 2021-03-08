Run the application from the project root with:

```
npm start
```

To run tests, you need the url of a running frontend (ie http://localhost:3000).
The default baseUrl is defined at:
```
./e2e/cypress.json
```
If you need a different baseUrl, then you can locally change the value of baseUrl
in the cypress.json file or you can provide the environment variable
CYPRESS_BASE_URL for the command execution (OS-dependent). Then run the tests
with the commands:
```
npm install
cd e2e
../node_modules/.bin/cypress run
```

with docker:

```
docker-compose -f docker-compose-tests.yml up --abort-on-container-exit --build
```
