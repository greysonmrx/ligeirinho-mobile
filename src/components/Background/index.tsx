import React from 'react';

import { Container, Pink, Content } from './styles';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({
  children,
}: BackgroundProps) => {
  return (
    <Container>
      <Pink />
      <Content>{children}</Content>
    </Container>
  );
};

export default Background;
