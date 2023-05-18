import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { ModalsContexts } from "./modalsContexts";

export const RequestsContexts = createContext();

const RequestsProvider = ({ children }) => {
  const { setIsOpenCompanyDelete } = useContext(ModalsContexts);
  const [companies, setCompanies] = useState([]);
  const toast = useToast();

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

  const addCompany = (formData) => {
    axios
      .post("http://localhost:4000/companies", formData)
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const onDelete = (company) => {
    axios
      .delete(`http://localhost:4000/companies/${company.id}`)
      .then(() => {
        setIsOpenCompanyDelete(false);
        toast({
          title: `Empresa ${company.name} excluída com sucesso!`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <RequestsContexts.Provider
      value={{
        getCompanies,
        companies,
        addCompany,
        onDelete,
      }}
    >
      {children}
    </RequestsContexts.Provider>
  );
};

export default RequestsProvider;
