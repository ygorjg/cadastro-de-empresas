import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

const ModalCompanyDetails = ({ company, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detalhes da Empresa {company.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Stack direction="row">
              <FormControl flex={0.2}>
                <FormLabel>ID</FormLabel>
                <Input value={company.id} isReadOnly />
              </FormControl>
              <FormControl flex={1}>
                <FormLabel>Nome</FormLabel>
                <Input value={company.name} isReadOnly />
              </FormControl>
            </Stack>
            <Stack direction="row">
              <FormControl flex={1}>
                <FormLabel>Endereço</FormLabel>
                <Input value={company.adress} isReadOnly />
              </FormControl>
              <FormControl flex={0.5}>
                <FormLabel>Número</FormLabel>
                <Input value={company.number} isReadOnly />
              </FormControl>
            </Stack>
            <FormControl>
              <FormLabel>Bairro</FormLabel>
              <Input value={company.district} isReadOnly />
            </FormControl>
            <Stack direction="row">
              <FormControl>
                <FormLabel>Cidade</FormLabel>
                <Input value={company.city} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Estado</FormLabel>
                <Input value={company.state} isReadOnly />
              </FormControl>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCompanyDetails;
