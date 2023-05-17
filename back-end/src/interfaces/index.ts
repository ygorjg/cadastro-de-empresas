export interface ICompany {
  name: string;
  adress: string;
  number: string;
  district: string;
  city: string;
  state: string;
}

export interface ICompanyUdpateRequest {
  name?: string;
  adress?: string;
  number?: string;
  district?: string;
  city?: string;
  state?: string;
}
