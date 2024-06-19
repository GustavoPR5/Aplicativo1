import React from 'react';
import { ScrollView, View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const InicioScreen = () => {
  const navigation = useNavigation(); 
  
 
  const products = [
    { id: 1, name: 'Hambúrguer Tradicional', price: 20.00, image: require('../assets/tradicional.jpg'), description: 'Hambúrguer com carne suculenta e ingredientes frescos.' },
    { id: 2, name: 'Hambúrguer de Bacon', price: 25.00, image: require('../assets/bacon2.jpg'), description: 'Hambúrguer com carne suculenta, queijo derretido e bacon crocante.' },
    { id: 3, name: 'Batata Frita', price: 15.00, image: require('../assets/batata.jpg'), description: 'Batata frita crocante e saborosa.' },
    { id: 4, name: 'Coca-Cola', price: 15.00, image: require('../assets/coca.jpg'), description: 'Bebida refrescante e gelada.' },
    { id: 5, name: 'Suco de Maracujá', price: 15.00, image: require('../assets/maracuja.jpg'), description: 'Suco natural de maracujá, refrescante e sem adição de açúcar.' },
    { id: 6, name: 'Suco de Cupuaçu', price: 15.00, image: require('../assets/cupuaçu.jpg'), description: 'Suco natural de cupuaçu, rico em vitamina C e antioxidantes.' },
    { id: 7, name: 'Suco de Laranja', price: 10.00, image: require('../assets/laranja.jpg'), description: 'Suco natural de laranja, feito na hora e sem conservantes.' },
    { id: 8, name: 'Milkshake', price: 18.00, image: require('../assets/milkshake.jpg'), description: 'Milkshake cremoso e delicioso, disponível em vários sabores.' },
  ];

 
  const handleAddToCart = (product) => {
    console.log(`Produto adicionado: ${product.name}`);

  };

 
  const handleCartPress = () => {
    navigation.navigate('Carrinho');
  };

  return (
    <ImageBackground source={require('../assets/fundo.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
          <Feather name="shopping-cart" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Catálogo</Text>
        
        {products.map(product => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>
              <Text style={styles.productPrice}>R$ <Text style={{ color: 'green' }}>{product.price.toFixed(2)}</Text></Text>
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(product)}>
                <Text style={styles.addButtonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    paddingTop: 40, 
    paddingBottom: 16,
  },
  cartButton: {
    position: 'absolute',
    top: 40,
    right: 16,
    zIndex: 1, 
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    overflow: 'hidden',
    
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productInfo: {
    flex: 1,
    padding: 12,
  },
  productName: {
    fontSize: 18,
    marginBottom: 4,
    color: 'white',
  },
  productDescription: {
    marginBottom: 4,
    color: 'white',
  },
  productPrice: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InicioScreen;
