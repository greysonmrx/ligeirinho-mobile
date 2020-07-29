import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import Deliveries from '../pages/Deliveries';
import Profile from '../pages/Profile';
import Details from '../pages/Details';
import Problems from '../pages/Problems';
import NewProblem from '../pages/NewProblem';
import Confirm from '../pages/Confirm';

const App = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

interface ITabBarIcon {
  color: string;
}

const DeliveriesRoutes: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#ffffff',
        headerLeftContainerStyle: {
          marginLeft: 15,
          paddingTop: 20,
        },
        headerTitleStyle: {
          paddingTop: 20,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="chevron-left" size={20} color="#ffffff" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="Delvieries"
        component={Deliveries}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: 'Detalhes' }}
      />
      <Stack.Screen
        name="Problems"
        component={Problems}
        options={{ title: 'Problemas' }}
      />
      <Stack.Screen
        name="NewProblem"
        component={NewProblem}
        options={{ title: 'Novo problema' }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{ title: 'Confirmar entrega' }}
      />
    </Stack.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      activeColor="#e02041"
      barStyle={{ backgroundColor: '#ffffff' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }: ITabBarIcon) => {
          let iconName = 'truck';

          if (route.name === 'Profile') {
            iconName = 'face';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={25} color={color} />
          );
        },
      })}
    >
      <App.Screen
        name="Deliveries"
        component={DeliveriesRoutes}
        options={{ title: 'Entregas' }}
      />
      <App.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Perfil' }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
