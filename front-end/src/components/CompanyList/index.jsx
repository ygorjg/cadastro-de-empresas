import { useContext, useEffect } from "react";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, InfoIcon } from "@chakra-ui/icons";
import { ModalsContexts } from "../../contexts/modalsContexts";
import ModalCompanyDetails from "../ModalCompanyDetails";
import ModalCompanyDelete from "../ModalCompanyDelete";
import ModalAddCompany from "../ModalAddCompany";
import { RequestsContexts } from "../../contexts/requestsContexts";

const CompanyList = () => {
  const {
    isOpenAddCompany,
    handleCloseAddCompany,
    handleOpenCompanyDetails,
    selectedCompany,
    isOpenCompanyDetails,
    handleCloseCompanyDetails,
    handleOpenModalDelete,
    selectedDeleteCompany,
    isOpenCompanyDelete,
    handleCloseModalDelete,
  } = useContext(ModalsContexts);

  const { getCompanies, companies } = useContext(RequestsContexts);

  useEffect(() => {
    getCompanies();
  }, [getCompanies]);

  const tableWidth = useBreakpointValue({ base: "100%", sm: "90%", md: "80%" });

  return (
    <Flex justify="center">
      <Table variant="striped" colorScheme="blue" maxWidth={tableWidth}>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Nome</Th>
            <Th>Endereço</Th>
            <Th>Opções</Th>
          </Tr>
        </Thead>
        <Tbody>
          {companies.map((company) => (
            <Tr key={company.id}>
              <Td>{company.id}</Td>
              <Td>{company.name}</Td>
              <Td>{company.adress}</Td>
              <Td>
                <InfoIcon
                  marginRight="2"
                  color="blue.600"
                  cursor="pointer"
                  onClick={() => handleOpenCompanyDetails(company)}
                />
                <EditIcon color="green.300" cursor="pointer" />
                <DeleteIcon
                  marginLeft="2"
                  color="red.400"
                  cursor="pointer"
                  onClick={() => handleOpenModalDelete(company)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedCompany && (
        <ModalCompanyDetails
          company={selectedCompany}
          isOpen={isOpenCompanyDetails}
          onClose={handleCloseCompanyDetails}
        />
      )}
      {selectedDeleteCompany && (
        <ModalCompanyDelete
          company={selectedDeleteCompany}
          isOpen={isOpenCompanyDelete}
          onClose={handleCloseModalDelete}
        />
      )}
      {isOpenAddCompany && (
        <ModalAddCompany
          isOpen={isOpenAddCompany}
          onClose={handleCloseAddCompany}
        />
      )}
    </Flex>
  );
};

export default CompanyList;
