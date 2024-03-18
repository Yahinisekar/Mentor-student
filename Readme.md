# Mentor-Student Management API
- This repository contains the backend code for managing mentors and students using a Node.js Express server and MongoDB database.
## Postman documentation
-You can also see my work in this documentation (link)[https://documenter.getpostman.com/view/31934748/2sA2xpRoub]

## Table of Contents
- Features
- Prerequisites
- Installation
- Usage
- API Endpoints
- Technologies Used

### Features
Create mentors and students.
Assign students to mentors.
Assign or change mentors for particular students.
Show all students for a particular mentor.
Show the previously assigned mentor for a particular student.
Prerequisites
Before you begin, ensure you have the following installed:

- Node.js
- MongoDB
- `npm or yarn`
## Installation
Clone the repository:


Install dependencies:

- cd mentor-student
- npm install
  
## Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

### makefile
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```
`Replace your_mongodb_connection_string with your actual MongoDB connection string`.

## Start the server:
`npm start`

### Usage
-  Once the server is running, you can use the provided API endpoints to manage mentors and students. You can integrate these endpoints with your frontend application to send and receive data from the server.

## API Endpoints
### Student Routes
- POST /api/create: Create a new student
- GET /api/students: Get all students
- PUT /api/studentsassigned/:id: Assign a mentor to a student
- GET /api/students/:id: Get the mentor assigned to a student by student ID
### Mentor Routes
- POST /api/mentor/create: Create a new mentor
- GET /api/mentor/getmentor: Get all mentors
- PUT /api/mentor/mentorassigned/:id: Assign a student to a mentor
- GET /api/mentor/previousmentor/:id: Get the previously assigned mentor for a specific student
For detailed information on request and response formats, refer to the API documentation or code comments.

### Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
