import { View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components';
import { type RootStackParams } from '../../routes/StackNavigator';



export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();


  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Cities')}
        label='Ciudades'
      />

      <PrimaryButton
        onPress={() => navigation.navigate('About')}
        label='About'
      />
    </View>
  )
}