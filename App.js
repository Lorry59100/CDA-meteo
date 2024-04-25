import Home from './pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Forecast from './pages/Forecast/Forecast';

export default function App() {
  const Stack = createNativeStackNavigator();
  const navTheme = {
    colors: {
      background: "transparent",
    },
  }
  return (
    <NavigationContainer theme={navTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

