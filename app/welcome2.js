import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WelcomeScreen2 = () => {
  return (
    <View style={styles.container}>
        {/*botão de voltar*/}
        <TouchableOpacity style={styles.voltarButton} onPress={() => router.back()}>
            <Text style={styles.voltarButtonText}>‹</Text>
  </TouchableOpacity>
      <Image 
        source={require('../assets/fotos/BIXO.png')} 
        style={styles.mascote}
      />
      <Image 
        source={require('../assets/fotos/LLIAlogo.png')} 
        style={styles.logo}
      />

      <View style={styles.cartao}>
        <Text style={styles.textoPrincipal}>Seu mundo de diversão e conhecimento começa agora</Text>
        <Text style={styles.textosecundario}>
          Você vai aprender português, matemática e muito mais, enquanto brinca, explora e desbloqueia pequenas conquistas a cada passo.
        </Text>
        
        {/* Marcador com a segunda bolinha ativa */}
        <View style={styles.paginationContainer}>
          <View style={[styles.dot, styles.inactiveDot]} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        
        <TouchableOpacity
          style={styles.botao}
          // Ao clicar, vai para a próxima tela: a de criar usuário
          onPress={() => router.push('/createUser')} 
        >
          <Text style={styles.textobotao}>Vamos começar!</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
};


const styles = StyleSheet.create({
    voltarButton: {
    position: 'absolute',
    top: 50, 
    left: 20,
    zIndex: 1, 
    padding: 10,
  },
    voltarButtonText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
  },
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
    textAlign: 'center', 
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

export default WelcomeScreen2;