import { Box, Button, Form, Input, Modal } from "@/components"
import { ModalProps } from "@/interfaces"

interface ModalCreateUserProps extends ModalProps {
  onSubmit: (item: any) => void
}

export const ModalCreateUser = ({ onSubmit, ...props }: ModalCreateUserProps) => (
  <Modal
    {...props}
    showIconClose
  >
    <Form onSubmit={onSubmit}>
      <Box css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '35px'
      }}>
        <Box css={{ display: 'flex' }}>
          <Input
            id="firstName"
            label="Primeiro nome"
            type="text"
            name="firstName"
            placeholder="Primeiro nome"
          />
          <Input
            id="lastName"
            label="Último nome"
            type="text"
            name="lastName"
            placeholder="Último nome"
          />
        </Box>
        <Box>
          <Input
            id="age"
            label="Idade"
            type="number"
            name="age"
            placeholder="Digite sua idade"
          />
        </Box>
        <Box>
          <Button
            css={{
              '@media (max-width: 768px)': {
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                left: '20px',
              }
            }}
            type="submit"
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Form>
  </Modal>
);
