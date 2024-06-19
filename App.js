import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import InicioScreen from './Screens/InicioScreen';
import CarrinhoScreen from './Screens/CarrinhoScreen';
import FinalizarScreen from './Screens/FinalizarScreen';
import PremiumScreen from './Screens/PremiumScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }} />
        <Stack.Screen 
          name="Inicio" 
          component={InicioScreen} 
          options={{
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }} 
        />
        <Stack.Screen name="Carrinho" component={CarrinhoScreen}  />
        <Stack.Screen name="Finalizar" component={FinalizarScreen}options={{
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }} />
        <Stack.Screen name="Premium" component={PremiumScreen}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}  /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
