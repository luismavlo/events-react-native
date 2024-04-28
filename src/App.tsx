import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { BottonTabNavigation } from './presentation/routes/BottonTabNavigation';
import { PaperProvider } from 'react-native-paper';


function App (): React.JSX.Element {


  return (
    <PaperProvider>
      <NavigationContainer>
        <BottonTabNavigation />
      </NavigationContainer>
    </PaperProvider>

  );
}

export default App;
