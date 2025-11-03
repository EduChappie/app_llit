
import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PrimeiraTela = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/BIXO.png')} 
        style={styles.mascote}
      />
      <Image 

        source={require('../assets/images/LLIAlogo.png')} 
        style={styles.logo}
      />

      <View style={styles.cartao}>
        <Text style={styles.textoPrincipal}>Descubra, brinque e aprenda</Text>
        <Text style={styles.textosecundario}>
          Aqui você vai embarcar em um mundo cheio de cores, sons e sinais, onde cada atividade é uma descoberta divertida.
        </Text>
        
        <View style={styles.paginationContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
        </View>
        
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push('/welcome2')} 
        >
          <Text style={styles.textobotao}>Continuar</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mascote: {
    width: 210,
    height: 400,
    resizeMode: 'contain',
    position: 'absolute',
    top: '15%',
  },
  logo: {
    width: 376, 
    height: 250,
    resizeMode: 'contain',
    position: 'absolute',
    top: '38%',
  },
  cartao: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingBottom: 50,
  },
  textoPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  textosecundario: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FFA500',
  },
  inactiveDot: {
    backgroundColor: '#D3D3D3',
  },
  botao: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  textobotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PrimeiraTela;