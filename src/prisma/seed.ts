import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

const minNroDeudas = Number(process.env.minNroDeudas);
const maxNroDeudas = Number(process.env.maxNroDeudas);
const minMontoDeuda = Number(process.env.minMontoDeuda);
const maxMontoDeuda = Number(process.env.maxMontoDeuda);
const maxPersonas = Number(process.env.maxPersonas);

console.log("minNroDeudas", process.env.minNroDeudas);
console.log("maxNroDeudas", process.env.maxNroDeudas);

function randomize(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const load = async () => {
  try {
    await prisma.$queryRaw`ALTER SEQUENCE "Deuda_id_seq"
    RESTART WITH 1;`;
    await prisma.$queryRaw`ALTER SEQUENCE "Pago_id_seq"
    RESTART WITH 1;`;
    await prisma.$queryRaw`ALTER SEQUENCE "Persona_id_seq"
    RESTART WITH 1;`;

    await prisma.deuda.deleteMany();
    await prisma.persona.deleteMany();

    await prisma.pago.deleteMany();

    for (let i = 0; i < maxPersonas; i++) {
      await prisma.persona.create({
        data: {
          nombre: faker.person.firstName(),
          apellido: faker.person.lastName(),
          deudas: {
            create: Array.from({
              length: randomize(minNroDeudas, maxNroDeudas),
            }).map((cant = randomize(minMontoDeuda, maxMontoDeuda)) => ({
              monto: Number(cant),
              saldo: Number(cant),
            })),
          },
        },
      });
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
