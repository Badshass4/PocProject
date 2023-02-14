import React from 'react';
import HomeNavigation from './HomeTabNavigation';
import Detail from '../screens/DetailScreen/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MAIN_ROUTE } from '../utils/constant';

export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={MAIN_ROUTE.HOME as unknown as keyof RootStackParamList}
          component={HomeNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
