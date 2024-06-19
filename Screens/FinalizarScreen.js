import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert, FlatList } from 'react-native';

const FinalizarScreen = () => {
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [valorTotal, setValorTotal] = useState(0);

  const items = [
    { id: '1', name: 'Hambúrguer Tradicional', price: 18.00 },
    { id: '7', name: 'Suco de Laranja', price: 15.00 },
  ];

  useEffect(() => {
    calcularValorTotal();
  }, []);

  const calcularValorTotal = () => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    setValorTotal(total);
  };

  const finalizarPedido = () => {
    console.log('Pedido finalizado:', {
      endereco,
      complemento,
      nome,
      telefone,
      valorTotal
    });

    Alert.alert(
      'Pedido finalizado',
      'Seu pedido foi finalizado com sucesso!',
      [{ text: 'OK', onPress: () => console.log('Pedido finalizado') }]
    );
  };

  return (
    <ImageBackground source={require('../assets/fundo.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Finalizar Pedido</Text>

        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.input}
          placeholder="Complemento"
          value={complemento}
          onChangeText={setComplemento}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.finalizarButton} onPress={finalizarPedido}>
          <Text style={styles.finalizarButtonText}>Finalizar Pedido</Text>
        </TouchableOpacity>

        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R$ <Text style={{ color: 'green' }}>{item.price.toFixed(2)}</Text></Text>
            </View>
          )}
          style={styles.list}
        />

        <Text style={styles.totalLabel}>Valor Total do Pedido: <Text style={styles.totalValue}>R$ {valorTotal.toFixed(2)}</Text></Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  background: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  list: {
    width: '100%',
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  itemName: {
    fontSize: 16,
    color: '#000',
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff'
  },
  totalValue: {
    color: 'green',
  },
  finalizarButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10, 
  },
  finalizarButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FinalizarScreen;
