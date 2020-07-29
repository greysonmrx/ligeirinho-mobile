import React from 'react';

import {
  Container,
  Line,
  StatusContainer,
  Dot,
  LabelContainer,
  Label,
} from './styles';

interface TimelineProps {
  start: string | undefined;
  end: string | undefined;
}

const Timeline: React.FC<TimelineProps> = ({ start, end }: TimelineProps) => {
  const taken = !!start;
  const delivered = !!end;

  return (
    <Container>
      <Line />
      <StatusContainer>
        <LabelContainer>
          <Dot filled />
          <Label>Aguardando Retirada</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot filled={taken} />
          <Label>Retirada</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot filled={delivered} />
          <Label>Entregue</Label>
        </LabelContainer>
      </StatusContainer>
    </Container>
  );
};

export default Timeline;
