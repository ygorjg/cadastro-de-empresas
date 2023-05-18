import { createContext, useState } from "react";
import axios from "axios";

export const Contexts = createContext();

const ContextProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isOpenCompanyDetails, setIsOpenCompanyDetails] = useState(false);
  const [selectedDeleteCompany, setSelectedDeleteCompany] = useState(null);
  const [isOpenCompanyDelete, setIsOpenCompanyDelete] = useState(false);

  const getCompanies = () => {
    axios
      .get("http://localhost:4000/companies")
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpenCompanyDetails = (company) => {
    setSelectedCompany(company);
    setIsOpenCompanyDetails(true);
  };

  const handleCloseCompanyDetails = () => {
    setSelectedCompany(null);
    setIsOpenCompanyDetails(false);
  };

  const handleOpenModalDelete = (company) => {
    setSelectedDeleteCompany(company);
    setIsOpenCompanyDelete(true);
  };

  const handleCloseModalDelete = () => {
    setSelectedDeleteCompany(null);
    setIsOpenCompanyDelete(false);
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:4000/companies/${id}`)
      .then((response) => {
        setIsOpenCompanyDelete(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Contexts.Provider
      value={{
        getCompanies,
        companies,
        handleOpenCompanyDetails,
        selectedCompany,
        isOpenCompanyDetails,
        handleCloseCompanyDetails,
        handleOpenModalDelete,
        selectedDeleteCompany,
        isOpenCompanyDelete,
        handleCloseModalDelete,
        onDelete,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextProvider;
