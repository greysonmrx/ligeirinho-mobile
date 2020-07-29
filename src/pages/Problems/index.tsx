import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import { Alert } from 'react-native';

import { Problem } from '../../interfaces/problem';

import Background from '../../components/Background';

import api from '../../services/api';

import {
  Container,
  Title,
  NoProblemContainer,
  NoProblem,
  ProblemsList,
  ProblemCard,
  ProblemText,
  DateText,
} from './styles';

interface IParams {
  id: string;
  recipient_name: string;
}

const Problems: React.FC = () => {
  const route = useRoute();

  const [problems, setProblems] = useState<Problem[]>([]);

  const { id, recipient_name } = route.params as IParams;

  useEffect(() => {
    async function loadProblems() {
      try {
        const { data } = await api.get<Problem[]>(`/problems/${id}`);

        setProblems(data);
      } catch (err) {
        Alert.alert('Erro ao carregar os problemas', err.response.data.message);
      }
    }

    loadProblems();
  }, [id]);

  return (
    <Background>
      <Container>
        <Title>{`Encomenda do(a) ${recipient_name}`}</Title>

        {problems.length === 0 ? (
          <NoProblemContainer>
            <NoProblem>Nenhum problema com esta encomenda</NoProblem>
          </NoProblemContainer>
        ) : (
            <ProblemsList>
              {problems.map(problem => (
                <ProblemCard key={problem.created_at} style={{ elevation: 3 }}>
                  <ProblemText>{problem.description}</ProblemText>
                  <DateText>
                    {format(parseISO(problem.created_at), 'dd/MM/yyyy')}
                  </DateText>
                </ProblemCard>
              ))}
            </ProblemsList>
          )}
      </Container>
    </Background>
  );
};

export default Problems;
