import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { ICompany, ICompanyUdpateRequest } from "../interfaces";
import createCompanyService from "../services/createCompany.service";
import getCompanyService from "../services/getCompany.service";
import getAllCompaniesService from "../services/getAllCompanies.service";
import updateCompanyService from "../services/updateCompany.service";
import deleteCompanyService from "../services/deleteCompany.service";

const createCompanyController = async (req: Request, res: Response) => {
  try {
    const data: ICompany = req.body;
    const createdCompany = await createCompanyService(data);
    return res.status(201).json(instanceToPlain(createdCompany));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

const getCompanyController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const companyId = Number(id);
    const company = await getCompanyService(companyId);
    return res.json(company);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

const getAllCompaniesController = async (req: Request, res: Response) => {
  try {
    const companys = await getAllCompaniesService();
    return res.json(instanceToPlain(companys));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

const updateCompanyController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const companyId = Number(id);
    const company: ICompanyUdpateRequest = req.body;
    await updateCompanyService(company, companyId);
    return res.status(200).json(instanceToPlain(company));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

const deleteCompanyController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const companyId = Number(id);
    await deleteCompanyService(companyId);
    return res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default deleteCompanyController;

export {
  createCompanyController,
  getCompanyController,
  getAllCompaniesController,
  updateCompanyController,
  deleteCompanyController,
};
