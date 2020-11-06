import express, { Request, Response } from "express";

const router = express.Router();

router.get('/', [], (req: Request, res: Response) => {
  res.send("All todos");
})

router.post('/', [], (req: Request, res: Response) => {
  res.send("New todo created");
})

export { router as todoRouter }