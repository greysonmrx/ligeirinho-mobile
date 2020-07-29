import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  flex-direction: column;
  padding: 50px 35px;
  align-items: center;
`;

export const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const Avatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 68px;
`;

export const Title = styled.Text`
  color: #666666;
  font-size: 12px;
  align-self: stretch;
  text-align: left;
  margin-top: 15px;
  font-family: 'Exo-Medium';
`;

export const SubTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  align-self: stretch;
  text-align: left;
  color: #444444;
  font-size: 22px;
  font-family: 'Exo-Bold';
`;

export const LogoutButton = styled.TouchableOpacity`
  align-self: stretch;
  margin-top: 30px;
  height: 53px;
  background: #e74040;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const LogoutButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Exo-SemiBold';
`;
