import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const CarrinhoScreen = ({ navigation }) => {
  const carrinhoItems = [
    { id: 1, name: 'Hambúrguer Tradicional', price: 18.00, image: require('../assets/tradicional.jpg'), quantity: 2 },
    { id: 2, name: 'Suco de Laranja', price: 15.00, image: require('../assets/laranja.jpg'), quantity: 1 },
  ];

  const calcularTotal = () => {
    return carrinhoItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleFinalizarPedido = () => {
    navigation.navigate('Finalizar');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={carrinhoItems}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productQuantity}>Quantidade: {item.quantity}</Text>
              <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R$ {calcularTotal().toFixed(2)}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Premium')}>
          <Text style={styles.premiumText}>Obtenha premium</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.finalizarButton} onPress={handleFinalizarPedido}>
        <Text style={styles.finalizarButtonText}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productQuantity: {
    fontSize: 16,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  premiumText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'none',
    backgroundColor: '#fff',
    elevation: 7,
    borderRadius: 5,
    padding: 10,
    shadowColor: 'green',
  },
  finalizarButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  finalizarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default CarrinhoScreen;
