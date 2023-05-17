import { createContext, useState } from "react";
import axios from "axios";

export const Contexts = createContext();

const ContextProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);

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

  return (
    <Contexts.Provider value={{ getCompanies, companies }}>
      {children}
    </Contexts.Provider>
  );
};

export default ContextProvider;
