import React from 'react';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import pt from 'date-fns/locale/pt';
import { useNavigation } from '@react-navigation/native';

import { Delivery } from '../../interfaces/delivery';

import Timeline from './Timeline';

import {
  Container,
  Content,
  Header,
  Title,
  Footer,
  FooterItem,
  Small,
  SubTitle,
  Button,
  ButtonText,
} from './styles';

interface DeliveryCardProps {
  delivery: Delivery;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({
  delivery,
}: DeliveryCardProps) => {
  const navigation = useNavigation();

  return (
    <Container
      style={{
        elevation: 4,
      }}
    >
      <Content>
        <Header>
          <Icon size={25} name="local-shipping" color="#e02041" />
          <Title>{`Encomenda do(a) ${delivery.recipient.name}`}</Title>
        </Header>

        <Timeline start={delivery.start_date} end={delivery.end_date} />
      </Content>
      <Footer>
        <FooterItem>
          <Small>Data</Small>
          <SubTitle>
            {format(new Date(delivery.created_at), "dd 'de' MMMM yyyy", {
              locale: pt,
            })}
          </SubTitle>
        </FooterItem>

        <FooterItem>
          <Small>Cidade</Small>
          <SubTitle>{delivery.recipient.city}</SubTitle>
        </FooterItem>

        <FooterItem>
          <Button
            onPress={() => {
              navigation.navigate('Details', { delivery });
            }}
          >
            <Small />
            <ButtonText>Ver detalhes</ButtonText>
          </Button>
        </FooterItem>
      </Footer>
    </Container>
  );
};

export default DeliveryCard;
