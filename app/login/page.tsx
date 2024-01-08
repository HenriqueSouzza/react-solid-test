'use client'

import React from "react";
import { Card, Box, Input, Button } from "@/components";
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
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
          <Box css={FieldStyle}>
            <AccountCircle
              height={70}
              width={70}
            />
          </Box>
          <Box css={FieldStyle}>
            <Input
              id="name"
              label="Username"
              type="text"
              name="username"
              placeholder="Digite..."
            />
          </Box>
          <Box css={FieldStyle}>
            <Input
              id="password"
              label="Password"
              type="password"
              name="password"
              placeholder="Digite..."
            />
          </Box>
          <Box css={FieldStyle}>
            <Button type="submit">
              Sign in
            </Button>
          </Box>
        </Card>
      </Box>
    </form>
  )
}

export default Login;