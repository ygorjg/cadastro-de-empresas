import { AppDataSource } from "../data-source";
import { Company } from "../entities/Company.entity";
import { AppError } from "../errors/appError";

const deleteCompanyService = async (id: number): Promise<void> => {
  const companyRepository = AppDataSource.getRepository(Company);
  const company = await companyRepository.findOne({
    where: {
      id,
    },
  });

  if (!company) {
    throw new AppError("Company not found", 404);
  }

  await companyRepository.remove(company);
};

export default deleteCompanyService;
