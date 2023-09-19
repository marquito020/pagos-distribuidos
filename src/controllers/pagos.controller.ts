import { Request, Response } from "express";
import pagoService from "../services/pago.service.js";

const getAllPagos = async (req: Request, res: Response) => {
  try {
    const allPagos = await pagoService.getAllPagos();
    res.json(allPagos);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPago = async (req: Request, res: Response) => {
  try {
    const pago = await pagoService.getPago(parseInt(req.params.id));
    res.json(pago);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createPago = async (req: Request, res: Response) => {
  try {
    const newPago = await pagoService.createPago(req.body);
    res.json(newPago);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default { getAllPagos, getPago, createPago };
