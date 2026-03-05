require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// --- 1. Rate Limiting Setup ---
// Prevents brute-force attacks by limiting requests from a single IP
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: { message: 'Too many login attempts. Please try again later.' }
});

// --- 2. Mock Database Setup ---
const mockDatabase = [];

// Initialize database with a securely hashed admin password
const initializeDatabase = async () => {
    const saltRounds = 10;
    // Hash the password from our .env file
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, saltRounds);

    mockDatabase.push({
        username: process.env.ADMIN_USERNAME,
        passwordHash: hashedPassword
    });
    console.log('Mock database initialized with hashed admin credentials.');
};
initializeDatabase();

// Helper function requested by the assignment
const getUserFromDatabase = async (username) => {
    return mockDatabase.find(user => user.username === username);
};

// --- 3. Secure Login Endpoint ---
// Apply the rate limiter middleware to this specific route
app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;

    try {
        // Fetch user from our mock database
        const user = await getUserFromDatabase(username);

        // Check if user exists AND if the provided password matches the stored hash
        if (user && await bcrypt.compare(password, user.passwordHash)) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            // Using 401 Unauthorized for invalid credentials
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// --- 4. Start Server ---
app.listen(PORT, () => {
    console.log(`Secure server is running on port ${PORT}`);
});