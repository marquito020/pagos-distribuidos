import { Pago } from '../interfaces/pago.interface';
import { prisma } from '../config/db.config.js';

const getAllPagos = async () => {
    const allPagos = await prisma.pago.findMany();
    return allPagos;
}

const getPago = async (id: number) => {
    const pago = await prisma.pago.findUnique({
        where: {
            id: id,
        },
    });
    return pago;
}

const createPago = async (newPago: Pago) => {
    const pago = await prisma.pago.create({
        data: {
            /* fecha: newPago.fecha, */
            deuda: {
                connect: {
                    id: newPago.deudaId,
                },
            },
        }
    });
    return pago;
}

export default { getAllPagos, getPago, createPago };