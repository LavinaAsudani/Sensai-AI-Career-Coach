import { PrismaClient } from "./generated/prisma";


export const db= globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "Production"){
    globalThis.prisma = db;
}