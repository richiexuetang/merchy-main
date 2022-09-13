import { PrismaClient } from '@merchy/prisma-client';

export interface Context {
  prisma: PrismaClient;
}
