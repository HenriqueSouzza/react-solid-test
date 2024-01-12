'use client'

import React from "react";
import { Card, Box, Table, Button } from "@/components";
import { useAuth, usePageDashboard } from "@/hooks";
import { CssProps } from "@/interfaces";
import { UserPlus } from "@/icons";
import { ModalCreateUser, ModalDeleteUser, ModalEditUser } from "./modal";
import { redirect } from "next/navigation";

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

const Dashboard = () => {
  const { isUserLogged } = useAuth();
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

  if (!isUserLogged) {
    redirect('/');
  }

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