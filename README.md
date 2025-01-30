# HNG12 [0]
Public API to Retrieve Basic Information

#backlink
`https://hng.tech/hire/nodejs-developers`

# HNG Stage One Task

A basic REST API created using Node.js and Express that provides personal details such as email, the current date and time in ISO 8601 format, and the URL to a GitHub repository.

## Requirements

- Node.js
- npm (Node Package Manager)

# API Specification

# Endpoint
- URL: `https://hng12-0-production-4048.up.railway.app`
- Method: `GET`
- Response Format: JSON

# Response Format

{
    "email": "your-obijekwudamian@gmail.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": `"https://github.com/D-blac/HNG12-0-"`
}


# Local Development Setup

1. Clone the repository

git clone `https://github.com/D-blac/HNG12-0-.git`
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

# Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`


# Environment Variables
- `PORT`: Server port (default: 3751)

# Technologies Used
- Node.js
- Express
- CORS middleware

# Live Demo
The API is deployed at: `https://hng12-0-production-4048.up.railway.app`

# Author
Your Name