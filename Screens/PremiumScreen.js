import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const PremiumScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/fundo.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Torne-se Premium</Text>
        <Text style={styles.description}>
          Ao se tornar um usuário Premium, você terá acesso a recursos exclusivos e benefícios especiais!
        </Text>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Assinar Premium</Text>
        </TouchableOpacity>
        <Text style={styles.bonusTitle}>Bônus Premium:</Text>
        <View style={styles.bonusContainer}>
          <Text style={styles.bonusItem}>- Entrega gratuita em todos os pedidos de hambúrguer</Text>
          <Text style={styles.bonusItem}>- Desconto de 15% em pedidos acima de R$50,00</Text>
          <Text style={styles.bonusItem}>- Atendimento prioritário no suporte ao cliente</Text>
          <Text style={styles.bonusItem}>- Promoções exclusivas e cupons de desconto</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  subscribeButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  subscribeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bonusTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  bonusContainer: {
    alignItems: 'flex-start',
  },
  bonusItem: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
});

export default PremiumScreen;
