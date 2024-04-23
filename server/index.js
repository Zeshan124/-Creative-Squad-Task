const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Register endpoint
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Create a new employee using EmployeeModel
    EmployeeModel.create({ name, email, password })
        .then(employee => {
            console.log('Employee registered successfully:', employee);
            res.status(201).json(employee); // Respond with the created employee
        })
        .catch(err => {
            console.error('Error registering employee:', err);
            res.status(500).json({ error: 'Registration failed' }); // Respond with error message
        });
});

// Login endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    EmployeeModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.status(401).json("Incorrect password");
                }
            } else {
                res.status(404).json("User not found");
            }
        })
        .catch(err => {
            console.error('Login error:', err);
            res.status(500).json('Login failed');
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
