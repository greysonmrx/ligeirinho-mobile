import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: ${WIDTH * 0.4 - 30}px;
`;

export const Form = styled.View`
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #f1f1f1;
  padding: 0 20px;
  font-size: 15px;
  border-radius: 5px;
  color: #707070;
  margin: 40px 0 20px 0;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #e02041;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-family: 'Exo-SemiBold';
`;
