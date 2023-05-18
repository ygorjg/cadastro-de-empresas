import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { RequestsContexts } from "../../contexts/requestsContexts";

const ModalCompanyDelete = ({ company, isOpen, onClose }) => {
  const { onDelete } = useContext(RequestsContexts);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Excluir Empresa</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Text>
              Tem certeza de que deseja excluir a empresa {company.name}?
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={() => onDelete(company)}>
            Excluir
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCompanyDelete;
