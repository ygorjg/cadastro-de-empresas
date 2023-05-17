import { Router } from "express";
import {
  createCompanyController,
  getCompanyController,
  getAllCompaniesController,
  updateCompanyController,
  deleteCompanyController,
} from "./controllers/company.controller";

const routes = Router();

routes.post("/companies", createCompanyController);
routes.get("/companies/:id", getCompanyController);
routes.get("/companies", getAllCompaniesController);
routes.patch("/companies/:id", updateCompanyController);
routes.delete("/companies/:id", deleteCompanyController);

export default routes;
