import { AppDataSource } from "../data-source";
import { Company } from "../entities/Company.entity";
import { ICompany, ICompanyUdpateRequest } from "../interfaces";

const updateCompanyService = async (
  { name, adress, number, district, city, state }: ICompanyUdpateRequest,
  id: number
): Promise<ICompany | Array<string | number>> => {
  const companyRepository = AppDataSource.getRepository(Company);
  const findCompany = await companyRepository.findOneBy({
    id,
  });

  if (!findCompany) {
    return ["Company not found", 404];
  }

  await companyRepository.update(id, {
    name: name ? name : findCompany.name,
    adress: adress ? adress : findCompany.adress,
    number: number ? number : findCompany.number,
    district: district ? district : findCompany.district,
    city: city ? city : findCompany.city,
    state: state ? state : findCompany.state,
  });

  const company = await companyRepository.findOneBy({
    id,
  });

  return company!;
};

export default updateCompanyService;
