import { Deuda } from '../interfaces/deuda.interface';

import { prisma } from '../config/db.config.js';

const getAllDeudas = async () => {
    const allDeudas = await prisma.deuda.findMany();
    return allDeudas;
};

const getDeuda = async (id: number) => {
    const deuda = await prisma.deuda.findUnique({
        where: {
            id: id,
        },
    });
    return deuda;
};

export default { getAllDeudas, getDeuda };