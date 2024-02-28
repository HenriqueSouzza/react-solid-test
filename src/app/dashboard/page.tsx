'use client'

import React from "react";
import { Card, Box, Table, Button } from "@/components";
import { usePageDashboard } from "@/hooks";
import { UserPlus } from "@/icons";
import { ModalCreateUser, ModalDeleteUser, ModalEditUser } from "./modal";
import { BoxMainStyle, CardStyle } from "./style";

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