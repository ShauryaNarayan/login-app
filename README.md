FULL STACK LOGIN ASSIGNMENT

PROJECT DESCRIPTION
This is a full-stack web application built to fulfill the requirements of the technical assignment. It features a secure login system where a user can authenticate using predefined credentials. Upon successful login, the user is navigated to a welcome page that remembers their username. Incorrect credentials will trigger an appropriate error message.

KEY FEATURES
The application includes a beautiful, custom-styled user interface built with React and a robust backend built with Node.js and Express. It validates credentials against a secure mock database that hashes passwords using bcrypt. It also features rate limiting to prevent brute-force attacks. The frontend uses React Router for seamless navigation between the login and welcome screens, and it manages local storage efficiently to remember the user.

TECHNOLOGIES USED
Frontend technologies include React, React Router DOM version 5 for routing, Axios for API requests, and Vite as the lightning-fast build tool. Backend technologies include Node.js, Express, bcrypt for password encryption, dotenv for environment variable management, express-rate-limit for security, and cors.

PREREQUISITES
To run this project on your local machine, you will need to have Node.js and npm installed.

HOW TO SET UP AND RUN THE BACKEND
Open a terminal and navigate to the backend folder inside the project.
Type the command npm install and press enter to download all the required backend dependencies.
Create a file named exactly .env in the backend folder.
Inside that file, type PORT=5000 on the first line, ADMIN_USERNAME=admin on the second line, and ADMIN_PASSWORD=admin on the third line. Save the file.
Type the command node server.js and press enter to start the backend server. It will confirm it is running on port 5000. Keep this terminal open.

HOW TO SET UP AND RUN THE FRONTEND
Open a second, brand new terminal window and navigate to the frontend folder inside the project.
Type the command npm install and press enter to download all the required frontend dependencies.
Type the command npm run dev and press enter to start the React application.
The terminal will provide a local URL. Open that URL in your web browser.

HOW TO USE THE APPLICATION
Once the application is loaded in your browser, you will see the login screen.
To test a failed login, type any random username and password, then click the Login button. You will see a red error message stating Invalid credentials.
To test a successful login, type admin for the username and admin for the password, then click the Login button.
You will be successfully redirected to the Welcome page, which will display your username and a success checkmark. If you click the Back to Login button, your username will be remembered in the input field.
