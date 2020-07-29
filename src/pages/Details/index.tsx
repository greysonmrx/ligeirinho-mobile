import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import { Alert } from 'react-native';

import api from '../../services/api';

import { Delivery } from '../../interfaces/delivery';

import Background from '../../components/Background';

import {
  Container,
  ActionButton,
  ActionButtonText,
  Actions,
  Card,
  CardHeader,
  CardTitle,
  DateContainer,
  DateRow,
  TakeOutButton,
  Subtitle,
  TakeOutButtonText,
  Title,
  VerticalSeparator,
} from './styles';

interface IParams {
  delivery: Delivery;
}

const Details: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const { delivery } = route.params as IParams;

  const {
    id,
    product,
    recipient,
    deliveryman_id,
    canceled_at,
    start_date,
    end_date,
  } = delivery;

  const formattedAddress = `${recipient.street}, ${recipient.number}${
    recipient.complement ? ` [${recipient.complement}]` : ``
    }, ${recipient.city} - ${recipient.state}`;

  let status = 'Pendente';

  if (canceled_at) status = 'Cancelada';
  else if (end_date) status = 'Entregue';
  else if (start_date) status = 'Retirada';

  const formattedStartDate = start_date
    ? format(parseISO(start_date), 'dd/MM/yyyy')
    : '-- / -- / --';

  const formattedEndDate = end_date
    ? format(parseISO(end_date), 'dd/MM/yyyy')
    : '-- / -- / --';

  async function handleTakeout() {
    setLoading(true);
    try {
      await api.post(`/deliveryman/${deliveryman_id}/delivery/${id}`);
      setLoading(false);
      Alert.alert('Sucesso!', 'Encomenda retirada');
    } catch (err) {
      Alert.alert(
        'Erro ao retirar entrega',
        err.response.data.message ||
        'Não foi possível retirar a entrega, tente novamente mais tarde',
      );
    }
    setLoading(false);
  }

  return (
    <Background>
      <Container>
        <Card style={{ elevation: 3 }}>
          <CardHeader>
            <Icon size={25} name="local-shipping" color="#e02041" />
            <CardTitle>Informações da entrega</CardTitle>
          </CardHeader>

          <Title>Destinatário</Title>
          <Subtitle>{recipient.name}</Subtitle>

          <Title>Endereço de entrega</Title>
          <Subtitle>{formattedAddress}</Subtitle>

          <Title>Produto</Title>
          <Subtitle>{product}</Subtitle>
        </Card>

        <Card style={{ elevation: 3 }}>
          <CardHeader>
            <Icon size={25} name="event" color="#e02041" />
            <CardTitle>Situação da entrega</CardTitle>
          </CardHeader>

          <Title>Status</Title>
          <Subtitle>{status}</Subtitle>

          <DateRow>
            <DateContainer>
              <Title>Data de retirada</Title>
              <Subtitle>{formattedStartDate}</Subtitle>
            </DateContainer>

            <DateContainer>
              <Title>Data de entrega</Title>
              <Subtitle>{formattedEndDate}</Subtitle>
            </DateContainer>
          </DateRow>
        </Card>

        {!start_date ? (
          <TakeOutButton onPress={handleTakeout}>
            <TakeOutButtonText>Retirar encomenda</TakeOutButtonText>
          </TakeOutButton>
        ) : (
            <>
              {!end_date && (
                <Actions style={{ elevation: 3 }}>
                  <ActionButton
                    onPress={() => {
                      navigation.navigate('NewProblem', {
                        id: delivery.id,
                      });
                    }}
                  >
                    <Icon name="highlight-off" color="#E74040" size={25} />
                    <ActionButtonText>Informar</ActionButtonText>
                    <ActionButtonText>Problema</ActionButtonText>
                  </ActionButton>
                  <VerticalSeparator />
                  <ActionButton
                    onPress={() => {
                      navigation.navigate('Problems', {
                        id: delivery.id,
                        recipient_name: delivery.recipient.name,
                      });
                    }}
                  >
                    <Icon name="info-outline" color="#E7BA40" size={25} />
                    <ActionButtonText>Visualizar</ActionButtonText>
                    <ActionButtonText>Problemas</ActionButtonText>
                  </ActionButton>
                  <VerticalSeparator />
                  <ActionButton
                    onPress={() => {
                      navigation.navigate('Confirm', {
                        id: delivery.id,
                      });
                    }}
                  >
                    <Icon name="alarm-on" color="#e02041" size={25} />
                    <ActionButtonText>Confirmar</ActionButtonText>
                    <ActionButtonText>Entrega</ActionButtonText>
                  </ActionButton>
                </Actions>
              )}
            </>
          )}
      </Container>
    </Background>
  );
};

export default Details;
