import { Request, Response } from "express";
import { Product } from "../classes";

/**
 * GET /products
 * @param req Request
 * @param res Response
 */
export const handler = (req: Request, res: Response) => {
  const products: Product[] = [
    {
      productId: 1,
      productName: "Drinking water",
      producer: "Tops",
      category: "beverage",
      price: 13.0,
      productAvailable: true,
      productBarcode: "8853474057870",
      thumbnail: "https://example.co/img/8853474057870-thumb.jpg"
    },
    {
      productId: 2,
      productName: "Tissue paper",
      producer: "Klenex",
      category: "household",
      price: 10.0,
      productAvailable: true,
      productBarcode: "1264564985623",
    }
  ];
  
  res.send({
    ok: true,
    products: products
  });
};