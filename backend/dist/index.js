const express = require("express");
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');  // For hashing passwords
const cors =  require("cors")
const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors())
app.post("/", async function(req, res) {
    const { username, name, password,phone } = req.body;  // Destructure to get the values from the request body

    if (!username || !name || !password) {
        return res.status(400).send({
            error: 'Please provide username, name, and password.'
        });
    }

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                username: username  // Corrected the query to use `where` and `username` correctly
            }
        });

        if (existingUser) {
            return res.status(400).send({
                msg: "User already exists."
            });
        }

        // Hash the password before inserting it
        const hashedPassword = await bcrypt.hash(password, 10);

        const insert = await prisma.user.create({
            data: {
                username: username,
                name: name,
                phone:phone,
                password: hashedPassword  // Use the hashed password
            },
            select: {
                username: true,
                name: true
            }
        });

        res.status(201).send({
            message: 'User created successfully!',
            user: insert
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            error: 'An error occurred while creating the user.'
        });
    }
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
