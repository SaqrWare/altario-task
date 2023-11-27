
# Altario Task

## Overview
This project archives the requirements that has been sent via the email

## Environment
- Node.js v18
- npm

## Technologies Used
- Express.js
- TypeScript
- Jest (for testing)
- Nodemon (for development)
- Docker

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd altario-task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
3. Environment Variables
    - PORT (http port number) : Default 3000

## Running the Application
### Development Mode
Run the application in development mode using Nodemon:
```bash
npm run start-dev
```

### Production Mode
Build the TypeScript code and run the application in production mode:
```bash
npm run build
npm start
```

## Testing
Run tests using Jest:
```bash
npm test
```

## Docker
To run the application using Docker, follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t your-image-name .
   ```
   Replace "your-image-name" with a suitable name for your Docker image.

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 your-image-name
   ```
   Make sure to replace "your-image-name" with the name you used during the build.


### Project Structure
```
├── constants
│   ├── Errors.ts
│   └── SuccessMessages.ts
├── Dockerfile
├── http
│   ├── controllers
│   │   ├── healthController.ts
│   │   └── uploadController.ts
│   ├── middleware
│   │   ├── authentication.ts
│   │   ├── errorHandler.ts
│   │   ├── serviceLimiter.ts
│   │   ├── uploadLiimit.ts
│   │   └── upload.ts
│   └── route
│       ├── api
│       └── index.ts
├── index.ts
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
├── test
│   ├── integration
│   │   └── app.test.ts
│   ├── test-data
│   │   └── dummy_csv.csv
│   └── utils
│       └── file.test.ts
├── tsconfig.json
└── utils
    └── file.ts
```

### Directory Structure Details

- **constants**: Contains files defining error messages (`Errors.ts`) and success messages (`SuccessMessages.ts`).

- **http**: Holds the core components for handling HTTP requests.
   - **controllers**: Houses controllers handling specific routes (`healthController.ts`, `uploadController.ts`).
   - **middleware**: Includes middleware for authentication, error handling, rate limiting, and file uploads.
   - **route**: Defines API routes, organized in subdirectories (`api`) for better modularization.

- **test**: Contains test files for integration testing (`app.test.ts`), test data (`dummy_csv.csv`), and utility tests (`file.test.ts`).

- **utils**: Holds utility files for general application functionality (`file.ts`).

- **Dockerfile**: Specifies the Docker configuration for containerization.

- **index.ts**: The entry point of the application.


## Important notes

1. I this project there's basic auth integrated and the credentials are hardcoded to finalize the task only not for production purpose
```
username: omar
password: 123
```

2. Since there's no much logic in the app only one function was covered for in unit testing which is `isCSVFile`
3. Some integration tests where skipped to finalize the task ASAP, and to make the changes size small, including: (concurrent requests limit, number of files limit, size of files limit)
