import { Request, Response } from "express";

import { MsgModel } from "../models";

/**
 * GET /
 * @param req Request
 * @param res Response
 */
export const index = (req: Request, res: Response) => {
  res.send({
    ok: true,
    msg: MsgModel.getSampleMessage()
  });
};