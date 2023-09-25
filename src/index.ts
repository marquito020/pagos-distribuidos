import "dotenv/config";
import express from "express";
import cors from "cors";
import pagos from "./routes/pagos.routes.js";
import deudas from "./routes/deudas.routes.js";
import personas from "./routes/persona.routes.js";
//import { seeders } from "./config/db.config.js";

const app = express();

//RUTAS
app.use(cors());
app.use(express.json());


app.use("/api", pagos);
app.use("/api", deudas);
app.use("/api", personas);

app.listen(3000, () => {
  console.log("Servidor funcionando en puerto 3000");
});

//seeders();