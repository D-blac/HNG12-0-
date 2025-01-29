# HNG12 [0]
Public API to Retrieve Basic Information


# HNG Stage One Task

A simple REST API built with Node.js and Express that returns personal information including email, current datetime in ISO 8601 format, and GitHub repository URL.

## Requirements

- Node.js 18.x or higher
- npm (Node Package Manager)

## API Specification

### Endpoint
- URL: `https://your-deployed-url/`
- Method: `GET`
- Response Format: JSON

### Response Format

{
    "email": "your-email@example.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/D-blac/HNG12-0-.git"
}


## Local Development Setup

1. Clone the repository

git clone https://github.com/D-blac/HNG12-0-.git
cd your-repo


2. Install dependencies
npm install
npm install express cors
npm install nodemon --save-dev


3. Start the development server

npm run dev


The API will be available at `http://localhost:3751`

## Production Setup

To start the server in production:

npm start

## Deployment

This API is deployed using Render

### Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`


## Environment Variables
- `PORT`: Server port (default: 3000)

## Technologies Used
- Node.js
- Express
- CORS middleware

## Live Demo
The API is deployed at: `https://your-deployed-url/`

## Author
Your Name