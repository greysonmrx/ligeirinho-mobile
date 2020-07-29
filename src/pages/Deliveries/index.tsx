import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, Alert } from 'react-native';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import { Delivery } from '../../interfaces/delivery';

import getFirstAndLastName from '../../utils/getFirstAndLastName';

import DeliveryCard from '../../components/DeliveryCard';

import {
  Container,
  Header,
  Avatar,
  WelcomeContainer,
  LogoutContainer,
  Welcome,
  Name,
  Content,
  Title,
  ListDeliveries,
} from './styles';

const Deliveries: React.FC = () => {
  const { user, signOut } = useAuth();

  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  const renderItem = useCallback(({ item }) => {
    return <DeliveryCard delivery={item} />;
  }, []);

  const keyExtractor = useCallback(item => item.id, []);

  useEffect(() => {
    async function loadDeliveries() {
      try {
        const [pending, delivered] = await Promise.all([
          api.get<Delivery[]>(`/deliveryman/${user.id}`),
          api.get<Delivery[]>(`/deliveryman/${user.id}/deliveries`),
        ]);

        const parsedDeliveriesDelivered = delivered.data;
        const parsedDeliveriesPending = pending.data;

        setDeliveries([
          ...parsedDeliveriesDelivered,
          ...parsedDeliveriesPending,
        ]);
      } catch (err) {
        Alert.alert(
          'Falha na requisição',
          'Não foi possível buscar as entregas, por favor tente mais tarde.',
        );
      }
    }

    loadDeliveries();
  }, [user.id]);

  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri: user.avatarUrl,
          }}
        />
        <WelcomeContainer>
          <Welcome>Bem vindo,</Welcome>
          <Name>{getFirstAndLastName(user.name)}</Name>
        </WelcomeContainer>
        <LogoutContainer>
          <TouchableOpacity onPress={signOut}>
            <Icon name="power" size={25} color="#E74040" />
          </TouchableOpacity>
        </LogoutContainer>
      </Header>
      <Content>
        <Title>Entregas</Title>
        <ListDeliveries
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={deliveries}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
};

export default Deliveries;
