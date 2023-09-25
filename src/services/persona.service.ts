import { prisma } from '../config/db.config.js';

const getAllPersonas = async () => {
    const allPersonas = await prisma.persona.findMany();
    return allPersonas;
}

const getPersona = async (id: number) => {
    const persona = await prisma.persona.findUnique({
        where: {
            id: id,
        },
    });
    return persona;
}

export default { getAllPersonas, getPersona };
