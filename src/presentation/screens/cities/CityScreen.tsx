import { type RouteProp, useRoute, useNavigation } from '@react-navigation/native'
import { FlatList, Text, View } from 'react-native'
import { type RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { useEffect } from 'react';
import { useEventos } from '../../hooks/useEventByCity';
import { CardCity } from '../../components/shared/CardCity';


export const CityScreen = () => {

  const params = useRoute<RouteProp<RootStackParams, 'City'>>().params;
  console.log('params =>',params);
  const navigation = useNavigation();
  const { events } = useEventos(params.id);

  useEffect(() => {

    navigation.setOptions({
      title: params.name
    })

  }, [])


  return (

    <View style={globalStyles.container}>
        <Text style={{ marginBottom: 10, fontSize: 30 }} >Eventos por Ciudad</Text>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <CardCity title={item.name} image={item.image} onPress={()=>{}} />
          )}
        />
    </View>
  )
}

