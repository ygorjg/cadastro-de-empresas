import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/companies").then((response) => {
      setCompanies(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Empresas cadastradas</h1>
      <ul>
        {companies.map((companie) => {
          return (
            <li key={companie.id}>
              <h2>{companie.name}</h2>
              <p>{companie.city}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
