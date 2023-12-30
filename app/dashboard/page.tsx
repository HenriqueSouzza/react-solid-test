'use client'

import React from "react";
import { Card, Box } from "@/components";
import { usePageLogin } from "@/hooks";
import { CssProps } from "@/interfaces";

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

type userProps = {
  id: number
  name: string
  Activities: number
  Status: number
}

const Dashboard = () => {
  const { onSubmit } = usePageLogin();

  const userList = [
    {
      id: 1,
      name: 'Junior Souza',
      Activities: 50,
      Status: 50,
    },
    {
      id: 2,
      name: 'Henrique Souza',
      Activities: 50,
      Status: 50,
    },
    {
      id: 3,
      name: 'João Mario',
      Activities: 50,
      Status: 50,
    }
  ];

  return (
    <form onSubmit={onSubmit}>
      <Box component="section" css={BoxMainStyle}>
        <Card css={CardStyle}>
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Activities</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {userList.map((user: userProps) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.Activities}</td>
                  <td>{user.Status}</td>
                  <td>Actions</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Box>
    </form>
  )
}

export default Dashboard;