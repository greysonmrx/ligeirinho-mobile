import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TextArea = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 15,
  placeholderTextColor: '#999',
})`
  border-radius: 4px;
  padding: 13px;
  background-color: #fff;
  margin-bottom: 10px;
  font-size: 16px;
  color: #6e6e6e;
  justify-content: flex-start;
`;

export const SendButton = styled.TouchableOpacity`
  align-self: stretch;
  margin-top: 30px;
  height: 53px;
  background: #e74040;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const SendButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Exo-SemiBold';
`;
