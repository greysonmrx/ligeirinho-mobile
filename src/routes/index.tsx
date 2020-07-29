import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

import isEmpty from '../utils/isEmpty';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return isEmpty(user) ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
