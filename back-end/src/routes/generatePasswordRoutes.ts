import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { passwordCreateDataSchema } from "../schemas/passwordCreateDataSchema";
import generatePasswordController from "../controllers/generatePasswordControllers";

const generatePasswordRouter = Router();

generatePasswordRouter.post(
  "/api/generate-password",
  validateSchemaMiddleware(passwordCreateDataSchema),
  generatePasswordController.createPassword
);

export default generatePasswordRouter;
