'use client'

import React, { useState } from "react";
import { Card, Box, Table, Button, Modal } from "@/components";
import { usePageDashboard } from "@/hooks";
import { CssProps } from "@/interfaces";
import { UserPlus } from "@/icons";

const BoxMainStyle: CssProps = {
  height: '100vh',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: 'linear-gradient(180deg, #ff81ff 0, #fd74ff 16.67%, #c465ff 33.33%, #8953f2 50%, #4e40cb 66.67%, #0030a7 83.33%, #002286 100%)',
}

const CardStyle: CssProps = {
  flexDirection: 'column',
  width: '90%',
  height: '90vh',
  backgroundColor: `rgba(255, 255, 255, .7)`,
  borderRadius: '2px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  padding: '1px',
  '@media (max-width: 768px)': {
    width: '100%',
    height: '100vh',
    padding: '0 5px',
  }
}

const Dashboard = () => {
  const {
    onClickSignOut,
    onClickEdit,
    onClickDelete,
    setShowModal,
    userList,
    showModal
  } = usePageDashboard();

  return (
    <Box component="section" css={BoxMainStyle}>
      <Modal
        open={showModal}
        showIconClose
        onClickClose={() => setShowModal(!showModal)}
      />
      <Card css={CardStyle}>
        <Box component="div" css={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
          <Button type="button" onClick={onClickSignOut}>
            Sair
          </Button>
          <Button
            type="button" onClick={() => setShowModal(!showModal)}
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
              name: 'Nome Completo',
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