import { AppDataSource } from "../data-source";
import { Company } from "../entities/Company.entity";
import { AppError } from "../../src/errors/appError";

const getCompanyService = async (id: number): Promise<Company> => {
  const companyRepository = AppDataSource.getRepository(Company);
  const company = await companyRepository.findOne({
    where: {
      id,
    },
  });

  if (!company) {
    throw new AppError("Company not found", 404);
  }

  return company;
};

export default getCompanyService;
