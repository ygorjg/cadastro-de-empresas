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

const CompanyList = () => {
  const { getCompanies, companies } = useContext(Contexts);

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
                <InfoIcon marginRight="2" color="blue.600" cursor="pointer" />
                <EditIcon color="green.300" cursor="pointer" />
                <DeleteIcon marginLeft="2" color="red.400" cursor="pointer" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default CompanyList;
