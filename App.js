import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import CarItems from './components/carItems/Index';
// import Index from './components/carItems/Index';


export default function App() {
  return (
    <View style={styles.container}>
 

       <CarItems 
       name= {"Model 3"}
       tagLine={"Online Delivery"}
       tagLineCta={"Touchless Delivery"}
       image = {require('./assets/Model3.jpeg')}
       />

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
