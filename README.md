# plan-your-holiday-backend

## Setup

Install dependencies
```
npm install
```

## Development

Mongdb must be running. Load development data into database
```
npm run load-db
```


Start development server
```
npm run start:dev
```
Nodemon will watch for any file changes and restart the server if there is any changes to the code.

## Lint

ESLint is used to maintain high code quality and a unified code style. Run it before you commit your code to check that it has the right coding style. To run the linter, use:
```
npm run lint
```

## Production

Transpile code for production
```
npm run build
```

Run code as in production environment
```
npm start
```
