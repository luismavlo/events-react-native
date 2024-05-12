import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { CitiesScreen } from '../screens/cities/CitiesScreen';
import { EventsFormScreen } from '../screens/events/EventsFormScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();


export const BottonTabNavigation = () => {
  const Nav = StackNavigator();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen
        name="Tab3"
        options={{ title: 'Home', tabBarIcon: ({ color }) => (<IonIcon name='home-outline' />) }}
        component={StackNavigator} />
      <Tab.Screen
        name="Tab1"
        options={{ title: 'Cities', tabBarIcon: ({ color }) => (<IonIcon name='business-outline' />) }}
        component={CitiesScreen} />
      <Tab.Screen
        name="Tab2"
        options={{ title: 'Event Form', tabBarIcon: ({ color }) => (<IonIcon name='pencil-outline' />) }}
        component={EventsFormScreen} />

    </Tab.Navigator>
  );
}