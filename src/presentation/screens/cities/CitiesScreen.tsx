import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator'
import { CardCity } from '../../components/shared/CardCity'
import { useMovies } from '../../hooks/useCities'


export const CitiesScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const { cities } = useMovies();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30 }} >Ciudades</Text>
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <CardCity title={item.name} image={item.image} onPress={() => navigation.navigate('City', { id: item.id, name: item.name })} />
        )}
      />
    </View>
  )
}