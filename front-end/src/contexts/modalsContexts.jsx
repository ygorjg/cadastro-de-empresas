import { createContext, useState } from "react";

export const ModalsContexts = createContext();

const ModalsProvider = ({ children }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isOpenAddCompany, setIsOpenAddCompany] = useState(false);
  const [isOpenUpdateCompany, setIsOpenUpdateCompany] = useState(false);
  const [isOpenCompanyDetails, setIsOpenCompanyDetails] = useState(false);
  const [selectedDeleteCompany, setSelectedDeleteCompany] = useState(null);
  const [isOpenCompanyDelete, setIsOpenCompanyDelete] = useState(false);

  const handleOpenAddCompany = () => {
    setIsOpenAddCompany(true);
  };

  const handleCloseAddCompany = () => {
    setIsOpenAddCompany(false);
  };

  const handleOpenUpdateCompany = (company) => {
    setSelectedCompany(company);
    setIsOpenUpdateCompany(true);
  };

  const handleCloseUpdateCompany = () => {
    setIsOpenUpdateCompany(false);
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

  return (
    <ModalsContexts.Provider
      value={{
        isOpenAddCompany,
        handleOpenAddCompany,
        handleCloseAddCompany,
        isOpenUpdateCompany,
        handleOpenUpdateCompany,
        handleCloseUpdateCompany,
        handleOpenCompanyDetails,
        selectedCompany,
        isOpenCompanyDetails,
        handleCloseCompanyDetails,
        handleOpenModalDelete,
        selectedDeleteCompany,
        isOpenCompanyDelete,
        setIsOpenCompanyDelete,
        handleCloseModalDelete,
      }}
    >
      {children}
    </ModalsContexts.Provider>
  );
};

export default ModalsProvider;
