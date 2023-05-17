import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Logo from "./components/Logo";
import CompanyList from "./components/CompanyList";
import ContextProvider from "./contexts";

const App = () => {
  return (
    <ContextProvider>
      <ChakraProvider>
        <CSSReset />
        <Logo />
        <CompanyList />
      </ChakraProvider>
    </ContextProvider>
  );
};

export default App;
