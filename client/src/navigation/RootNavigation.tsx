import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabNavigation from './tab-navigation';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

type RootNavigationParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
};

const RootStack = createNativeStackNavigator<RootNavigationParamList>();

const RootNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <RootStack.Navigator initialRouteName="Login">
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Register" component={RegistrationScreen} />
          <RootStack.Screen
            options={{ headerShown: false }}
            component={TabNavigation}
            name="Main"
          />
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default RootNavigation;
