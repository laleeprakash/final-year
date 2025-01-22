const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();  // Corrected: instantiate PrismaClient only once

app.use(express.json());  // Middleware to parse JSON request bodies

// POST endpoint to create a user
app.post("/", async function (req, res) {
  const { username } = req.body;

  // Ensure username is provided
  if (!username) {
    return res.status(400).send("Username is required");
  }

  try {
    const user = await prisma.user.create({
      data: {
        username: username,
      },
      select: {
        username: true, // Only select the 'username' field
      },
    });

    // Send the created user back as the response
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Start the Express server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
