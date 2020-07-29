import styled from 'styled-components/native';

interface DotProps {
  filled: boolean;
}

export const Container = styled.View`
  flex-direction: column;
  align-self: stretch;
  margin-top: 30px;
  padding: 0 20px;
`;

export const Line = styled.View`
  height: 1px;
  background: #e02041;
  border: 1px solid #e02041;
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 0px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -6px;
`;

export const Dot = styled.View<DotProps>`
  width: 10px;
  height: 10px;
  border: 1px solid #e02041;
  border-radius: 5px;
  background: ${props => (props.filled ? '#e02041' : '#FFFFFF')};
  margin-bottom: 5px;
`;

export const LabelContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.Text`
  color: #999999;
  font-weight: bold;
  font-size: 10px;
  width: 70px;
  text-align: center;
`;
