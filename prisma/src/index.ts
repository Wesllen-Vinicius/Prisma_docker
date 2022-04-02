import { PrismaClient } from '@prisma/client'
import express from 'express'
const userRoutes = require('./routes/user')
const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use('/users', userRoutes)

app.listen(3000, () =>
  console.log('REST API Server Iniciado: http://localhost:3000'),
)