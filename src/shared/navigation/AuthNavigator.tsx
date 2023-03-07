import React from 'react';
import { SignIn, SignUp, Welcome } from 'screens/Auth';
import { Routes } from './Routes';
import { Stack } from './NavigationOptions';

export const AuthNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.WELCOME}
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={Routes.SIGN_IN}
      component={SignIn}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={Routes.SIGN_UP}
      component={SignUp}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
