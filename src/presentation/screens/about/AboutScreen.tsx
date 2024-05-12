import { StyleSheet, Text, View } from 'react-native'

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de la Aplicación</Text>
      <Text style={styles.description}>
        Esta aplicación fue creada para la materia de Programación de Dispositivos Móviles de la universidad internacion de valencia, dictada por el profesor Paco Gómez Arnal. Desarrollada por Luis Miguel Avendaño Lozano y Katherine aylas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});