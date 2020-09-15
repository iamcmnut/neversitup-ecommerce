import { Request, Response, NextFunction } from "express";

/**
 * GET /products
 * @param req Request
 * @param res Response
 */
export const handler = (req: Request, res: Response, next: NextFunction) => {
  const KEY = "hjnasmdkghjlknmasdkhjm84a5sd8a4sd8";
  const accessKey = req.header("accessKey");

  if (KEY === accessKey) {
    res.locals.userId = 1;
    next();
  } else {
    res.status(401).send({
      ok: false,
      msg: "Unauthorize"
    });
  }
};