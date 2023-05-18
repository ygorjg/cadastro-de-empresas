import { useContext, useState } from "react";
import {
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
  Button,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { RequestsContexts } from "../../contexts/requestsContexts";

const ModalAddCompany = ({ isOpen, onClose }) => {
  const { addCompany, companies } = useContext(RequestsContexts);

  const initialFormData = {
    name: "",
    adress: "",
    number: "",
    district: "",
    city: "",
    state: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = (formData) => {
    const duplicateCompany = companies.find(
      (company) => company.name === formData.name
    );

    if (duplicateCompany) {
      setError(`Já existe uma empresa com o nome ${formData.name}.`);
    } else if (
      formData.name &&
      formData.adress &&
      formData.number &&
      formData.district &&
      formData.city &&
      formData.state
    ) {
      setFormData(initialFormData);
      setError("");
      onClose();
      addCompany(formData);
      toast({
        title: `Empresa ${formData.name} adicionada com sucesso!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setError("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar Nova Empresa</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <Stack direction="row">
              <FormControl flex={1}>
                <FormLabel>Endereço</FormLabel>
                <Input
                  name="adress"
                  value={formData.adress}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl flex={0.5}>
                <FormLabel>Número</FormLabel>
                <Input
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Stack>
            <FormControl>
              <FormLabel>Bairro</FormLabel>
              <Input
                name="district"
                value={formData.district}
                onChange={handleInputChange}
              />
            </FormControl>
            <Stack direction="row">
              <FormControl>
                <FormLabel>Cidade</FormLabel>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Estado</FormLabel>
                <Input
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Stack>
            {error && <Text color="red.500">{error}</Text>}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={() => handleSave(formData)}>
            Salvar
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAddCompany;
