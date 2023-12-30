'use client'

import React from "react";
import { Card, Box, CardContent, Input, Button } from "@/components";
import { usePageLogin } from "@/hooks";
import { CssProps } from "@/interfaces";
import { AccountCircle } from "@/icons";

const BoxMainStyle: CssProps = {
  height: '100vh',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: 'linear-gradient(180deg, #ff81ff 0, #fd74ff 16.67%, #c465ff 33.33%, #8953f2 50%, #4e40cb 66.67%, #0030a7 83.33%, #002286 100%)',
}

const CardStyle: CssProps = {
  flexDirection: 'column',
  width: '400px',
  height: '400px',
  backgroundColor: `rgba(255, 255, 255, 0.4)`,
  borderRadius: '2px',
  padding: '1px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  '@media (max-width: 768px)': {
    width: '100%',
    height: '100vh',
    padding: 0,
  },
}

const CardContentStyle: CssProps = {
  padding: '25px 10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '35px'
}

const FieldStyle: CssProps = {
  width: '100%',
  textAlign: 'center',
  'svg': {
    color: 'purple',
  }
}

const Login = () => {
  const { onSubmit } = usePageLogin();

  return (
    <form onSubmit={onSubmit}>
      <Box component="section" css={BoxMainStyle}>
        <Card css={CardStyle}>
          <CardContent css={CardContentStyle}>
            <Box css={FieldStyle}>
              <AccountCircle
                height={70}
                width={70}
              />
            </Box>
            <Box css={FieldStyle}>
              <Input
                label="Username"
                messageError="Campo obrigatorio"
                type="text"
                name="username"
                placeholder="Digite..."
              />
            </Box>
            <Box css={FieldStyle}>
              <Input
                label="Password"
                type="text"
                name="password"
                placeholder="Digite..."
              />
            </Box>
            <Box css={FieldStyle}>
              <Button type="submit">
                Sign in
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </form>
  )
}

export default Login;