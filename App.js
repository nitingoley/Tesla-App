import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import CarItems from './components/carItems/Index';
import CarList from './components/carlist';
import Heading from './components/Icon/Heading'; 
export default function App() {
  return (
    <View style={styles.container}>
     <Heading />
    <CarList/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
