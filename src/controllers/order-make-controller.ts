import { Request, Response } from "express";

/**
 * GET /products
 * @param req Request
 * @param res Response
 */
export const handler = (req: Request, res: Response) => {
  
  res.send({
    ok: true,
    products: []
  });
};