import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to create a new user
app.post("/signup", async function(req: Request,res: Response){
  const { name, username, password } = req.body;

  // Validate inputs (you can add more validation here)
  if (!name || !username || !password) {
    return res.status(400).send({ error: "All fields are required." });
  }

  try {
    // Check if the username already exists
    const existingUser =  prisma.user.findUnique({
      where: { username },
    });

  

    // Hash the password before storing it
    const hashedPassword =  bcrypt.hash(password, 10);

    // Create the new user
    const newUser =  prisma.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        username: true,
      },
    });

    res.status(201).send({ newUser });
  } catch (error) {
    res.status(500).send({ error: "An error occurred while creating the user." });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
