import { PrismaClient } from '../../app/generated/prisma'

declare global {
   // eslint-disable-next-line no-unused-vars
  var cachedPrisma: PrismaClient | undefined
}

const prisma = process.env.NODE_ENV === 'production'
  ? new PrismaClient()
  : global.cachedPrisma ?? (global.cachedPrisma = new PrismaClient())

export const db = prisma
