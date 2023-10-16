export interface Pago {
  id?: number;
  monto: number;
  fecha: Date;
  deudaId: number;
  pagoHash: String;
}
