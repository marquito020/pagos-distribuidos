import PrismaClient from "@prisma/client";

export const prisma = new PrismaClient.PrismaClient();

/* Función para generar un monto aleatorio en un rango dado */
function generarMontoAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Función para agregar deudas aleatorias a cada persona */
/* export const seeders = async () => {
    const personas = [
        { nombre: "Alva", apellido: "Guerra" },
        { nombre: "Luciano", apellido: "Cabrera" },
        { nombre: "Cuco", apellido: "Bolivar" },
        { nombre: "Solana", apellido: "Rojas" },
        { nombre: "Reynaldo", apellido: "Sánchez" },
        { nombre: "Isandro", apellido: "Cabello" },
        { nombre: "Lorah", apellido: "Villalobos" },
        { nombre: "Canciana", apellido: "De León" },
        { nombre: "Plesancia", apellido: "Mendoza" },
        { nombre: "Everd", apellido: "Flores" },
        { nombre: "Emmanuella", apellido: "Sanchez" },
        { nombre: "Marcellino", apellido: "Estrada" },
        { nombre: "Celerina", apellido: "Santiago" },
        { nombre: "Rosalinda", apellido: "Martinez" },
        { nombre: "Lonni", apellido: "Rodríguez" },
        { nombre: "Eloisa", apellido: "Castejón" },
        { nombre: "Salvatore", apellido: "Lopez" },
        { nombre: "Carmelia", apellido: "Luna" },
        { nombre: "Tuli", apellido: "Domínguez" },
        { nombre: "Arcenia", apellido: "Santos" },
        { nombre: "Tavares", apellido: "Ramos" },
        { nombre: "Prestha", apellido: "Maduro" },
        { nombre: "Ahvana", apellido: "Serrano" },
        { nombre: "Jadyn", apellido: "Salazar" },
        { nombre: "Guillermina", apellido: "Ortega" },
        { nombre: "Alford", apellido: "Vázquez" },
        { nombre: "Laia", apellido: "Vargas" },
        { nombre: "Alpine", apellido: "Rubio" },
        { nombre: "Tito", apellido: "Cabello" },
        { nombre: "Estmar", apellido: "Oleastro" },
        { nombre: "Elviva", apellido: "Villalobos" },
        { nombre: "Nallely", apellido: "Muñoz" },
        { nombre: "Nacho", apellido: "Torres" },
        { nombre: "Clarisa", apellido: "Narvaez" },
        { nombre: "Ysabelle", apellido: "Cruz" },
        { nombre: "Esperance", apellido: "Jiménez" },
        { nombre: "Amerigo", apellido: "Fernandez" },
        { nombre: "Jereza", apellido: "De La Cruz" },
        { nombre: "Fiyero", apellido: "Ramírez" },
        { nombre: "Florencia", apellido: "Hernández" },
        { nombre: "Ekisa", apellido: "Bolivar" },
        { nombre: "Rubin", apellido: "Nunez" },
        { nombre: "Joaquin", apellido: "Valiente" },
        { nombre: "Alfons", apellido: "Romero" },
        { nombre: "Ferrol", apellido: "Sanz" },
        { nombre: "Florita", apellido: "Velasco" },
        { nombre: "Felita", apellido: "Fuentes" },
        { nombre: "Candelaria", apellido: "Suárez" },
        { nombre: "Savannah", apellido: "Rosario" },
        { nombre: "Solita", apellido: "Contreras" },
        { nombre: "Maria", apellido: "Urena" },
        { nombre: "Toli", apellido: "Lopez" },
        { nombre: "Tajo", apellido: "Guerrero" },
        { nombre: "Jovelin", apellido: "Marroquín" },
        { nombre: "Anastas", apellido: "Colón" },
        { nombre: "Jovita", apellido: "Ortega" },
        { nombre: "Paola", apellido: "Muñoz" },
        { nombre: "Pervinca", apellido: "Cortez" },
        { nombre: "Aldonza", apellido: "Rosario" },
        { nombre: "Mercedes", apellido: "De La Cruz" },
        { nombre: "Tula", apellido: "Gómez" },
        { nombre: "Flor", apellido: "De La Vega" },
        { nombre: "Nora", apellido: "Colón" },
        { nombre: "Duena", apellido: "Garcia" },
        { nombre: "Benicio", apellido: "Ramos" },
        { nombre: "Roderigo", apellido: "Urena" },
        { nombre: "Fulco", apellido: "Losa" },
        { nombre: "Yessenia", apellido: "Asturias" },
        { nombre: "Fredo", apellido: "Domínguez" },
        { nombre: "Salvator", apellido: "Guerrero" },
        { nombre: "Larena", apellido: "Losa" },
        { nombre: "Enriquez", apellido: "Fredrick" },
        { nombre: "Canda", apellido: "Suárez" },
        { nombre: "Trini", apellido: "Cruz" },
        { nombre: "Reynalda", apellido: "Herrera" },
        { nombre: "Noa", apellido: "Asturias" },
        { nombre: "Ermenjart", apellido: "Diaz" },
        { nombre: "Manuella", apellido: "Juárez" },
        { nombre: "Licha", apellido: "Valiente" },
        { nombre: "Reyes", apellido: "Echeverria" },
        { nombre: "Isolda", apellido: "Herrera" },
        { nombre: "Tiko", apellido: "Bolivar" },
        { nombre: "Navarone", apellido: "Vázquez" },
        { nombre: "Aluino", apellido: "Suárez" },
        { nombre: "Peni", apellido: "Gómez" },
        { nombre: "Maquinna", apellido: "Gonzalez" },
        { nombre: "Jade", apellido: "De La Cruz" },
        { nombre: "Raymundo", apellido: "Valiente" },
        { nombre: "Alba", apellido: "Garza" },
        { nombre: "Azura", apellido: "Marín" },
        { nombre: "Safira", apellido: "Sanz" },
        { nombre: "Rafael", apellido: "Méndez" },
        { nombre: "Manolito", apellido: "Salinas" },
        { nombre: "Celesta", apellido: "Hernández" },
        { nombre: "Guillermo", apellido: "Rubio" },
        { nombre: "Enricua", apellido: "Candella" },
        { nombre: "Carilla", apellido: "Cano" },
        { nombre: "Araceli", apellido: "Juárez" },
        { nombre: "Presta", apellido: "Soto" },
        { nombre: "Sierra", apellido: "Ruíz" },
    ];

    const Persona = await prisma.persona.createMany({
        data: personas,
    });

    prisma.persona.findMany().then((data) => {
        data.forEach(async (persona) => {
            const cantidadDeudas = generarMontoAleatorio(1, 3); // Generar entre 1 y 3 deudas

            // Crear deudas aleatorias para la persona actual
            for (let i = 0; i < cantidadDeudas; i++) {
                await prisma.deuda.create({
                    data: {
                        monto: generarMontoAleatorio(500, 2000), // Rango de montos aleatorios
                        personaId: persona.id, // PersonaId debe coincidir con el índice en el arreglo
                    },
                });
            }
        });
    });

    return { Persona };
}; */
