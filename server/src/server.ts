import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
    const habits = await prisma.habit.findMany({ 
        orderBy: {
            createdAt: 'desc'
        }
    })
    return habits
})

app.listen({
    port: 3000,
    host: '0.0.0.0'
}).then(() => {
    console.log('Server listening at http://0.0.0.0:3000')
})
