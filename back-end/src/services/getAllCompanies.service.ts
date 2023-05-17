import { AppDataSource } from "../data-source";
import { Company } from "../entities/Company.entity";

const getAllCompanysService = async (): Promise<Company[]> => {
  const companyRepository = AppDataSource.getRepository(Company);
  const companys = await companyRepository.find();
  return companys;
};

export default getAllCompanysService;
