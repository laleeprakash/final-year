import express, { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma =  new PrismaClient
const app=express();
app.use(express.json())
app.post("/",  async function ( req:Request , res:Response){
  const {username} = req.body;
  const user = await prisma.user.create({
      data : {
      username: username
    },
  });

})