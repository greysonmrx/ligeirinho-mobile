import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 20px;
  padding-bottom: 0;
`;

export const Header = styled.View`
  align-self: stretch;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const WelcomeContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const LogoutContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Welcome = styled.Text`
  font-size: 13px;
  color: #666666;
  font-family: 'Exo-Medium';
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #444444;
  font-family: 'Exo-Bold';
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: #444444;
  font-size: 22px;
  font-family: 'Exo-Bold';
`;

export const ListDeliveries = styled(FlatList)`
  margin-top: 20px;
`;
