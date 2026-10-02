import { Text, View, StyleSheet, Image, TextInput} from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BakeConnect</Text>
      <Text style={styles.welcome}>Find Your favorite bakery</Text>
      <Text style={styles.subtitle}>Discover cakes, pastries and more from bakeries near you.</Text>
     
      <TextInput 
      style={styles.search}
      placeholder="Search bakeries..."
      placeholderTextColor="#888"
      />
      

      <Image
      source={require('../../assets/images/cake.jpg')}
      style={styles.image}/>
      <Text style={styles.name}>Sweet Bakery</Text>
           <Text>4.8 Cakes pastries</Text>
      
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EBDD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcome:{
    fontSize: 20,
  },
  
  search:{
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginTop: 10,
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle:{
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    width:'100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    color: '#fff',
  },
});