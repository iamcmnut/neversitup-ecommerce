import { Request, Response } from "express";
import { Product } from "../classes";

/**
 * GET /products
 * @param req Request
 * @param res Response
 */
export const handler = (req: Request, res: Response) => {
  const product: Product = {
      productId: 1,
      productName: "Drinking water",
      producer: "Tops",
      category: "beverage",
      price: 13.0,
      productAvailable: true,
      productBarcode: "8853474057870",
      thumbnail: "https://example.co/img/8853474057870-thumb.jpg"
    };
  
  res.send({
    ok: true,
    products: product
  });
};