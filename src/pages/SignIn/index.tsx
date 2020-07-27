import React from 'react';

import { Container, Logo, Form, Input, Button, ButtonText } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo source={logoImg} resizeMode="contain" />
      <Form>
        <Input placeholder="Informe seu ID de cadastro" />
        <Button>
          <ButtonText>Entrar no sistema</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
