import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import UserScreen from '../../../screens/UserScreen';
import { ScreenNavigationProps } from '../../types';

const Stack = createNativeStackNavigator();

const HomeStack: FC<ScreenNavigationProps> = () => (
  <Stack.Navigator
    initialRouteName="Users"
    screenOptions={{
      headerTitle: '',
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="Users"
      options={{
        headerTitle: 'Users',
      }}
      component={UserScreen}
    />
  </Stack.Navigator>
);

export default HomeStack;
