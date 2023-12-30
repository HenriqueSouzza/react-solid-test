'use client'

import React from "react";
import { Card, Box, CardContent, Input } from "@/components";
// import TextField from "@/components/input/textfield";
// import { Button } from "@/components/button";
// import { AccountCircle } from "@/icons";
import { usePageLogin } from "@/hooks";
import { CssProps } from "@/interfaces";
import { AccountCircle } from "@/icons";

const BoxMainStyle: CssProps = {
  height: '100vh',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: 'linear-gradient(180deg, #ff81ff 0, #fd74ff 16.67%, #c465ff 33.33%, #8953f2 50%, #4e40cb 66.67%, #0030a7 83.33%, #002286 100%)',
  // '@media (max-width: 768px)': {
  //   paddingLeft: 0,
  //   paddingRight: 0,
  // }
}

const CardStyle: CssProps = {
  flexDirection: 'column',
  width: '400px',
  height: '400px',
  backgroundColor: `rgba(255, 255, 255, 0.4)`,
  borderRadius: '2px',
  padding: '1px',
  boxShadow: '1px',
  // '@media (max-width: 768px)': {
  //   width: '100%',
  //   height: '100vh',
  //   padding: 0
  // }
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
  textAlign: 'center'
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
                // fullWidth
                label="username"
                // requ/ired
                // focused
                // color="secondary"
                // label="User"
                // name="username"
                autoComplete="username"
                placeholder="Digite..."
              />
            </Box>
            <Box css={FieldStyle}>
              {/* <TextField
                fullWidth
                required
                color="secondary"
                focused
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="*******"
              /> */}
            </Box>
            <Box css={FieldStyle}>
              {/* <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
              >
                Login
              </Button> */}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </form>
  )
}

export default Login;