import { isIOS } from 'helpers';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Stack = isIOS ? createStackNavigator() : createNativeStackNavigator();
