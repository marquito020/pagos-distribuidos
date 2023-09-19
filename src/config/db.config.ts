import PrismaClient from "@prisma/client";

export const prisma = new PrismaClient.PrismaClient();

/* seeder prisma */
/* export const seeders = async () => {
    const Persona = await prisma.persona.createMany({
        data: [
            {
                nombre: 'Juan',
                apellido: 'Perez',
            },
            {
                nombre: 'Pedro',
                apellido: 'Gomez',
            },
            {
                nombre: 'Maria',
                apellido: 'Lopez',
            },
        ],
    });

    const Deuda = await prisma.deuda.createMany({
        data: [
            {
                monto: 1000,
                personaId: 1
            },
            {
                monto: 500,
                personaId: 2,
            },
            {
                monto: 2000,
                personaId: 3,
            },
        ],
    });

    return { Persona, Deuda };
}; */
