import React, { useEffect, useState } from 'react';
import { ToastAndroid, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

import Background from '../../components/Background';

import { Container, TextArea, SendButton, SendButtonText } from './styles';

interface IParams {
  id: string;
}

const NewProblem: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params as IParams;

  const [problem, setProblem] = useState('');
  const [confirm, setConfirm] = useState(false);

  useEffect(() => setConfirm(false), [problem]);

  async function handleSubmit() {
    if (!confirm) {
      setConfirm(true);
      return;
    }

    setConfirm(false);

    try {
      await api.post(`problems/${id}`, {
        description: problem,
      });

      ToastAndroid.show('Problema enviado', 3000);

      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro ao registrar', err.response.data.message);
    }
  }

  return (
    <Background>
      <Container>
        <TextArea
          style={{ elevation: 3, textAlignVertical: 'top' }}
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          value={problem}
          onChangeText={setProblem}
        />
        <SendButton onPress={handleSubmit}>
          <SendButtonText>
            {confirm ? 'Tem certeza que deseja enviar?' : 'Enviar'}
          </SendButtonText>
        </SendButton>
      </Container>
    </Background>
  );
};

export default NewProblem;
