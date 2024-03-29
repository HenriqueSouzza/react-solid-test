'use client'

import React from "react";
import { Card, Box, Input, Button, Form } from "@/components";
import { usePageLogin } from "@/hooks";
import { AccountCircle } from "@/icons";
import { BoxMainStyle, CardStyle, FieldStyle } from "./style";

const Login = () => {
  const { onSubmit } = usePageLogin();

  return (
    <Form onSubmit={onSubmit}>
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
    </Form>
  )
}

export default Login;