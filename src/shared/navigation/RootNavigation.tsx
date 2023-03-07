import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RouteService } from 'services';
import { Stack } from './NavigationOptions';
import { Routes } from './Routes';
import { AuthNavigator } from './AuthNavigator';

export const RootNavigator: React.FC = () => (
  <NavigationContainer ref={RouteService.navigationRef}>
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.AUTH_NAVIGATOR}
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
