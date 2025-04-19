Prescription Tool

Introduction
The Prescription Tool is a web application designed to manage users' medications and prescriptions. It allows users to register, log in, and keep track of their medications, including dosage and upcoming doses. The application also includes functionality to store and retrieve data from Firebase for profile management and medication tracking.

Project Type
Fullstack (Frontend: React.js, Backend: Firebase)

Deployed App
Frontend: https://yourfrontendappurl.com
Backend: Firebase Authentication and Firestore
Database: Firestore Realtime Database

Directory Structure
bash
Copy
Edit
prescription-tool/
├─ frontend/
│  ├─ public/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ firebase.js
│  │  ├─ App.js
│  │  ├─ Profile.js
│  │  ├─ Register.js
│  │  ├─ Login.js
│  ├─ package.json
│  ├─ .env
Video Walkthrough of the project
You can attach a very short video walkthrough here (1 - 3 minutes), showing the app’s main functionality.

Video Walkthrough of the Project

Video Walkthrough of the codebase
You can attach a very short video walkthrough here (1 - 5 minutes), explaining how the code is structured and highlighting important parts of the codebase.

Video Walkthrough of the Codebase

Features
User Registration and Login: Users can create accounts, sign in, and securely manage their profiles.

Medication Tracking: Users can track their medications, including dosage, and upcoming doses.

Firebase Integration: Authentication and user data storage are handled using Firebase Authentication and Firestore.

Personalized Dashboard: The dashboard allows users to view their medications and set reminders.

Responsive UI: The application is designed to be mobile and desktop responsive.

Design Decisions or Assumptions
Firebase Realtime Database: Chose Firebase for ease of use and fast implementation of authentication and real-time data syncing.

React for Frontend: React was selected due to its component-based structure, making it easier to manage and maintain the UI.

Installation & Getting Started
Follow the instructions below to get your project up and running.

Frontend Installation:
bash
Copy
Edit
# Clone the repository
git clone https://github.com/Vipinm9721/medication-management-system.git

# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the development server
npm start
Backend Installation:
The backend is handled by Firebase services, so there is no specific server setup required. Make sure you have Firebase set up with the necessary configurations.

Create a Firebase project.

Set up Firebase Authentication and Firestore.

Replace the Firebase configuration in the firebase.js file with your project’s credentials.

Usage
Register an account by filling in the registration form.

Log in to the app using the credentials you provided during registration.

Profile: View and edit your profile information.

Dashboard: Manage your medications and get reminders for upcoming doses.

Example of medication details:

Medication: Paracetamol

Dosage: 500mg

Next Dose: 2025-04-19 08:00 AM

Example:
bash
Copy
Edit
# After registration and login, your profile will display your name, email, and medications.
Credentials
You can test the login and registration with the following user credentials (if available):

Email: testuser@example.com

Password: password123

APIs Used
Firebase Authentication API: Handles user registration, login, and authentication.

Firebase Authentication Docs: Link

API Endpoints
In this project, no custom backend API endpoints are required since Firebase is used for both authentication and data storage.

Technology Stack
Frontend: React.js, Firebase Authentication, Firebase Firestore

Backend: Firebase (Authentication and Firestore)

UI Framework: Tailwind CSS for styling
