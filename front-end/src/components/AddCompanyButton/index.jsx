import { Button, useBreakpointValue } from "@chakra-ui/react";
import { useContext } from "react";
import { ModalsContexts } from "../../contexts/modalsContexts";

const AddCompanyButton = () => {
  const { handleOpenAddCompany } = useContext(ModalsContexts);

  const tableWidth = useBreakpointValue({ base: "15%", sm: "5%", md: "10%" });

  return (
    <Button
      colorScheme="blue"
      onClick={handleOpenAddCompany}
      marginLeft={tableWidth}
    >
      Cadastrar Nova Empresa
    </Button>
  );
};

export default AddCompanyButton;
