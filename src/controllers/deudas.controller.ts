import { Request, Response } from "express";
import deudaService from "../services/deuda.service.js";

const getAllDeudas = async (req: Request, res: Response) => {
  try {
    const allDeudas = await deudaService.getAllDeudas();
    res.json(allDeudas);
  } catch (error) {
    res.status(500).json(error);
  }
}

const getDeuda = async (req: Request, res: Response) => {
  try {
    const deuda = await deudaService.getDeuda(parseInt(req.params.id));
    res.json(deuda);
  } catch (error) {
    res.status(500).json(error);
  }
}

export default { getAllDeudas, getDeuda };
