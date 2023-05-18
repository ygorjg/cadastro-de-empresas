import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import ModalsProvider from "./contexts/modalsContexts";
import RequestsProvider from "./contexts/requestsContexts";
import Logo from "./components/Logo";
import AddCompanyButton from "./components/AddCompanyButton";
import CompanyList from "./components/CompanyList";

const App = () => {
  return (
    <ModalsProvider>
      <RequestsProvider>
        <ChakraProvider>
          <CSSReset />
          <Logo />
          <AddCompanyButton />
          <CompanyList />
        </ChakraProvider>
      </RequestsProvider>
    </ModalsProvider>
  );
};

export default App;
