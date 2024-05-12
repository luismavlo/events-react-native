import { ScrollView,Text, View, TextInput, StyleSheet } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useMovies } from '../../hooks/useCities'
import { useRef,useState } from 'react'
import { Dropdown,IDropdownRef } from 'react-native-element-dropdown'
import { EventRequest } from '../../../infraestructure/interfaces/event-db.request'
import * as UseCases from '../../../core/use-cases' 
import { cityDBFetcher } from '../../../config/adapters/cityDB.adapter';
import { EventSaveResponse } from '../../../infraestructure/interfaces/eventSave-db.response'

export const EventsFormScreen = () => {

  const initialBody = {
    Nombre:'',
    Descripcion:'',
    UrlImagen:'',
    City:'',
  };

  const [state, setState] = useState(initialBody);

  const handleChangeText = (value:any,name:any)=>{
    setState({...state,[name]:value})
  }

  const { cities } = useMovies();
  var items = cities.map(function(element){
    return { 
      label: element.name, value: element.id.toString()
    }
  });

  const [value, setValue] = useState<string>();
  const ref = useRef<IDropdownRef>(null);

  const saveEvento = async()=>{
    console.log(state);
    const obj:EventRequest = {
      name:state.Nombre,
      description:state.Descripcion,
      image:state.UrlImagen,
      cityId:Number(state.City)
    };
    console.log('obj Event =>',obj);
    const eventSave: EventSaveResponse= await UseCases.eventSaveUseCase(cityDBFetcher,obj);
    console.log('response eventSave =>',eventSave);
  }

  return (
    <ScrollView>
      <Text style={globalStyles.titulo}>Formulario</Text>
      <View style={globalStyles.container}>
      <View>
        <TextInput style={globalStyles.inputGroup} placeholder='Nombre' onChangeText={(value)=>handleChangeText(value,'Nombre')}></TextInput>
      </View>
      <View>
        <TextInput style={globalStyles.inputGroup} placeholder='Descripcion' onChangeText={(value)=>handleChangeText(value,'Descripcion')}></TextInput>
      </View>
      <View>
        <TextInput style={globalStyles.inputGroup} placeholder='UrlImagen' onChangeText={(value)=>handleChangeText(value,'UrlImagen')}></TextInput>
      </View>
      <View>
      <Dropdown 
              ref={ref}
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={items}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Seleccione una ciudad"
              value={value}
              closeModalWhenSelectedItem={false}
              onChange={(item) => {
                setValue(item.value);
                handleChangeText(item.value,'City');
              }}
              onChangeText={() => {}} />
      </View>
      <PrimaryButton
        onPress={() => {saveEvento()}}
        label='Guardar Evento'
      />
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    flex: 1,
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  button: {
    marginHorizontal: 16,
  },
});