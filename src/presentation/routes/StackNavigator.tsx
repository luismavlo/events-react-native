import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { CitiesScreen } from '../screens/cities/CitiesScreen';
import { CityScreen } from '../screens/cities/CityScreen';
import { AboutScreen } from '../screens/about/AboutScreen';

export type RootStackParams = {
  Home: undefined,
  Cities: undefined,
  About: undefined,
  City: { id: number, name: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cities" component={CitiesScreen} />
      <Stack.Screen name="City" component={CityScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}