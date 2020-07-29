import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 10px;
`;

export const Card = styled.View`
  border-radius: 4px;
  padding: 13px;
  background-color: #fff;
  margin-bottom: 10px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #e02041;
  margin-left: 5px;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  color: #999999;
  margin-bottom: 2px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-bottom: 15px;
`;

export const DateRow = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateContainer = styled.View`
  flex-direction: column;
`;

export const TakeOutButton = styled.TouchableOpacity`
  align-self: stretch;
  margin-top: 30px;
  height: 53px;
  background: #e02041;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TakeOutButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Exo-SemiBold';
`;

export const Actions = styled.View`
  border-radius: 4px;
  background-color: #f8f9fd;
  flex-direction: row;
  align-self: stretch;
`;

export const ActionButton = styled(RectButton)`
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const VerticalSeparator = styled.View`
  width: 1px;
  background-color: #0000001a;
  align-self: stretch;
`;

export const ActionButtonText = styled.Text`
  font-size: 12px;
  color: #999999;
`;
