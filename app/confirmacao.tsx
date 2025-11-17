import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const mascoteCheck = require('../assets/fotos/BIXO.png'); 

export default function ConfirmacaoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Botões de Voltar/Fechar  */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.navText}>{"< Voltar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
          <Text style={styles.navText}>X</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarFull} />
      </View>
      <View style={styles.progressLabels}>
        <Text style={styles.progressLabel}>Avatar</Text>
        <Text style={styles.progressLabel}>Modo</Text>
        <Text style={[styles.progressLabel, styles.progressLabelActive]}>Confirmação</Text>
      </View>

      {/* Conteúdo Central */}
      <View style={styles.content}>
        <Image source={mascoteCheck} style={styles.mascote} />
        
        <Text style={styles.title}>Parabéns, sua conta foi criada com Sucesso!</Text>
        <Text style={styles.description}>
          Seja muito bem vindo(a)! Estamos muito animados para trilhar essa nova jornada com você!
        </Text>
      </View>

      {/* Botão de Iniciar Jornada */}
      <TouchableOpacity 
        style={styles.proceedButton} 
        onPress={() => console.log("Próxima etapa")}  /*depois mudar para => router.push('/nome do arquivo da tela do mano')*/
      >
        <Text style={styles.proceedButtonText}>Iniciar Jornada</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8', 
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  navText: {
    fontSize: 16,
    color: '#AAA', 
  },
  progressBarContainer: {
    width: '90%',
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginTop: 10,
  },
  progressBarFull: {
    width: '100%', 
    height: '100%',
    backgroundColor: '#FFA500', 
    borderRadius: 5,
  },
  progressLabels: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: '#AAA',
  },
  progressLabelActive: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  mascote: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 40, 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333', 
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666', 
    textAlign: 'center',
  },
  proceedButton: {
    backgroundColor: '#FFA500', 
    paddingVertical: 18,
    width: '90%',
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute', 
    bottom: 40,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});