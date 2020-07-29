import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container, Logo, Form, Input, Button, ButtonText } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [id, setId] = useState<string>('');

  const handleChangeId = useCallback((text: string) => {
    setId(text);
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      await signIn(id);
    } catch (err) {
      Alert.alert('Erro na autenticação!', err.response?.data.message);
    }
  }, [signIn, id]);

  return (
    <Container>
      <Logo source={logoImg} resizeMode="contain" />
      <Form>
        <Input
          placeholder="Informe seu ID de cadastro"
          onChangeText={text => handleChangeId(text)}
        />
        <Button onPress={handleSubmit}>
          <ButtonText>Entrar no sistema</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
