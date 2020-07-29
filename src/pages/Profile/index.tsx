import React from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useAuth } from '../../hooks/auth';

import getFirstAndLastName from '../../utils/getFirstAndLastName';

import {
  Container,
  AvatarContainer,
  Avatar,
  Title,
  SubTitle,
  LogoutButton,
  LogoutButtonText,
} from './styles';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <AvatarContainer>
        <Avatar
          source={{
            uri: user.avatarUrl,
          }}
        />
      </AvatarContainer>

      <Title>Nome Completo</Title>
      <SubTitle>{getFirstAndLastName(user.name)}</SubTitle>

      <Title>Email</Title>
      <SubTitle>{getFirstAndLastName(user.email)}</SubTitle>

      <Title>Data de cadastro</Title>
      <SubTitle>
        {format(new Date(user.created_at), "dd 'de' MMMM yyyy", {
          locale: pt,
        })}
      </SubTitle>

      <LogoutButton onPress={signOut}>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
};

export default Profile;
