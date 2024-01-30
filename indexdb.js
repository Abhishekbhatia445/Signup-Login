const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(cors({origin:'*'}));
app.use(express.json()); // Add this middleware to parse JSON bodies

mongoose.connect('mongodb://localhost:27017', {
    dbName: 'SignUp',
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.error('Error connecting to database:', err);
});

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
    date: { type: Date, default: Date.now },
});

const User = mongoose.model('users', UserSchema);

app.get("/", (req, res) => {
    res.send("App is working");
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists based on the email
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            console.log("User already registered");
            return res.status(400).send("User already registered");
        }

        // If the user doesn't exist, create and save the new user
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();

        // Respond with the saved user data (excluding password)
        const userResponse = savedUser.toObject();
        delete userResponse.password;

        res.status(201).send(userResponse);
        console.log(userResponse);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Something went wrong");
    }
});
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            console.log("User not found");
            return res.status(404).send("User not found");
        }

        // Check if the password is correct
        if (existingUser.password !== password) {
            console.log("Invalid password");
            return res.status(401).send("Invalid password");
        }

        // Respond with the user data (excluding password)
        const userResponse = existingUser.toObject();
        delete userResponse.password;

        res.status(200).send(userResponse);
        console.log(userResponse);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Something went wrong");
    }
});




const PORT = 3001;
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
