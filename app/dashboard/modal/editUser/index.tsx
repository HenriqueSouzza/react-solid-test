import { Box, Button, Form, Input, Modal } from "@/components"
import { ModalProps, UserProps } from "@/interfaces"

interface ModalEditUserProps extends ModalProps {
  onSubmit: (item: any) => void
  initialValues?: UserProps
}

export const ModalEditUser = ({ onSubmit, initialValues, ...props }: ModalEditUserProps) => (
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
            defaultValue={initialValues?.firstName}
          />
          <Input
            id="lastName"
            label="Último nome"
            type="text"
            name="lastName"
            placeholder="Último nome"
            defaultValue={initialValues?.lastName}
          />
        </Box>
        <Box>
          <Input
            id="age"
            label="Idade"
            type="number"
            name="age"
            placeholder="Digite sua idade"
            defaultValue={initialValues?.age}
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
            Alterar
          </Button>
        </Box>
      </Box>
    </Form>
  </Modal>
)