import { Box, Button, Form, Modal } from "@/components"
import { ModalProps } from "@/interfaces"

interface ModalDeleteUserProps extends ModalProps {
  onSubmit: (item: any) => void
}

export const ModalDeleteUser = ({ onSubmit, ...props }: ModalDeleteUserProps) => (
  <Modal
    {...props}
    showIconClose
  >
    <Form onSubmit={onSubmit}>
      <Box css={{
        display: 'flex',
        gap: '35px',
        flexDirection: 'column'
      }}>
        Tem certeza que deseja remover esse usuário?
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
          Remover usuário
        </Button>
      </Box>
    </Form>
  </Modal>
)