
# HNG Stage One Task

A basic REST API created using Node.js and Express that provides personal details such as email, the current date and time in ISO 8601 format, and the URL to a GitHub repository.

# Requirements

- Node.js
- npm (Node Package Manager)


# Local Development Setup

1. Clone the repository

git clone https://github.com/D-blac/HNG12-0-.git
cd your-repo


2. Install dependencies :
npm install
npm install express cors
npm install nodemon --save-dev


3. Start the development server

npm run dev


The API will be available at http://localhost:3751


# API Documentation

# Endpoint
- URL: https://hng12-0-production-4048.up.railway.app
- Method: GET
- Response Format: JSON

# Response Format

{
    "email": "obijekwudamian@gmail.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/D-blac/HNG12-0-"
}



# Example Usage

Using JavaScript:
fetch('https://hng12-0-production-4048.up.railway.app')
  .then(response => response.json())
  .then(data => console.log(data));

# backlink
Looking for experienced Node.js developers? Visit: https://hng.tech/hire/nodejs-developers

# Production Setup

To start the server in production:

npm start


# Deployment

This API is deployed using Render/Railway

# Render
1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: npm install
4. Set start command: npm start

# Railway
Deployed on Railway and can be accessed at:https://hng12-0-production-4048.up.railway.app
The API is optimized for fast response times (< 500ms) through:


# Environment Variables
- PORT: Server port (default: 3751)

# Technologies Used
- Node.js
- Express
- CORS middleware

# Live Demo
The API is deployed at: https://hng12-0-production-4048.up.railway.app

# Author
D-Blac