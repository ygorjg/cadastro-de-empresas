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
import { useContext, useEffect } from "react";
import { Contexts } from "../../contexts/index";
import ModalCompanyDetails from "../../components/ModalCompanyDetails";
import ModalCompanyDelete from "../ModalCompanyDelete";

const CompanyList = () => {
  const {
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
  } = useContext(Contexts);

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
    </Flex>
  );
};

export default CompanyList;
