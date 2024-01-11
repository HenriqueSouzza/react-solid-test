'use client'

import React from "react";
import { Card, Box, Table, Button, Modal, Input, Form } from "@/components";
import { usePageDashboard } from "@/hooks";
import { CssProps, ModalProps, UserProps } from "@/interfaces";
import { UserPlus } from "@/icons";

const BoxMainStyle: CssProps = {
  height: '100vh',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: 'linear-gradient(180deg, #ff81ff 0, #fd74ff 16.67%, #c465ff 33.33%, #8953f2 50%, #4e40cb 66.67%, #0030a7 83.33%, #002286 100%)',
}

const CardStyle: CssProps = {
  width: '90%',
  height: '90vh',
  backgroundColor: `rgba(255, 255, 255, .7)`,
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  '@media (max-width: 768px)': {
    width: '100%',
    height: '100vh',
    padding: '0 5px',
  }
}

interface ModalUserProps extends ModalProps {
  onSubmit: (item: any) => void
  initialValues?: UserProps
}

const ModalCreateUser = ({ onSubmit, ...props }: ModalUserProps) => (
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
)

const ModalEditUser = ({ onSubmit, initialValues, ...props }: ModalUserProps) => (
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

const ModalDeleteUser = ({ onSubmit, ...props }: ModalUserProps) => (
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

const Dashboard = () => {
  const {
    onClickSignOut,
    onClickCreate,
    onClickDelete,
    onClickEdit,
    onSubmitForm,
    onClickSetShowModal,
    userList,
    userSelected,
    showModal
  } = usePageDashboard();

  return (
    <Box component="section" css={BoxMainStyle}>
      <ModalCreateUser
        open={showModal.create}
        onSubmit={onSubmitForm}
        onClickClose={() => onClickSetShowModal({ create: !showModal.create })}
      />
      <ModalEditUser
        open={showModal.edit}
        onSubmit={onSubmitForm}
        onClickClose={() => onClickSetShowModal({ edit: !showModal.edit })}
        initialValues={userSelected}
      />
      <ModalDeleteUser
        open={showModal.delete}
        onSubmit={onSubmitForm}
        onClickClose={() => onClickSetShowModal({ delete: !showModal.delete })}
        initialValues={userSelected}
      />
      <Card css={CardStyle}>
        <Box component="div" css={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
          <Button type="button" onClick={onClickSignOut}>
            Sair
          </Button>
          <Button
            type="button" onClick={onClickCreate}
            css={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'purple' }}
          >
            <UserPlus width={20} />Novo Usuário
          </Button>
        </Box>
        <Table
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
          data={{
            thead: {
              id: '#',
              firstName: 'Nome Completo',
              lastName: 'Último nome',
              age: 'Idade'
            },
            tbody: userList,
          }}
        />
      </Card>
    </Box>
  )
}

export default Dashboard;