import { AppDataSource } from "../data-source";
import { Company } from "../entities/Company.entity";
import { ICompany } from "../interfaces";

const createCompanyService = async (data: ICompany): Promise<Company> => {
  const companyRepository = AppDataSource.getRepository(Company);
  const companys = await companyRepository.find();

  const companyAlreadyExists = companys.find(
    (company) => company.name === data.name
  );

  if (companyAlreadyExists) {
    throw new Error("Name company already exists");
  }

  const companyData = companyRepository.create({
    name: data.name,
    adress: data.adress,
    number: data.number,
    district: data.district,
    city: data.city,
    state: data.state,
  });

  await companyRepository.save(companyData);
  return companyData;
};

export default createCompanyService;
