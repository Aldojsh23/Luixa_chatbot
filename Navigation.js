/*Este es de la barra de navegacion para el sistema */
import React from "react";
import { StyleSheet } from "react-native";

//Importacion de los iconos
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

//Tab navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Pantallas
import Home_screen from "./Pantallas/Home_screen";
import Pedidos from "./Pantallas/Pedidos";
import Clientes from "./Pantallas/Clientes";
import Inventario from "./Pantallas/Inventario";
import Clientes_view from "./Pantallas/Clientes_view";
import Clientes_agregar from "./Pantallas/Clientes_agregar";
//import Login from "./Pantallas/Login";

//para la navegacion 
const HomeStackNavigator = createNativeStackNavigator();

function Mystack() {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name="Clientes_view"
                component={Clientes_view}
            />

            <HomeStackNavigator.Screen
                name="Clientes_agregar"
                component={Clientes_agregar}
            />
        </HomeStackNavigator.Navigator>
    );
}

const Tab = createBottomTabNavigator();

//Visualizar los clientes
const ClientesStack = createNativeStackNavigator();

function ClientesNavigator() {
    return (
        <ClientesStack.Navigator >
            <ClientesStack.Screen
                name="Clientes"
                component={Clientes}
                options={{ headerShown: false }}  // Oculta el título en Clientes.js

            />

            <ClientesStack.Screen
                name="Clientes_view"
                component={Clientes_view}
                styles={styles.headerTitle}
                options={{
                    headerTitle: "Clientes registrados",

                    headerBackTitleVisible: false
                }}  // Oculta el título en Clientes.js
            />

            <ClientesStack.Screen
                name="Clientes_agregar"
                component={Clientes_agregar}
                styles={styles.headerTitle}
                options={{
                    headerTitle: "Agregar clientes",

                    headerBackTitleVisible: false
                }}  // Oculta el título en Clientes.js
            />
        </ClientesStack.Navigator>
    );
}

function Mytabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'blue',
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home_screen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={24} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Pedidos"
                component={Pedidos}
                options={{
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="edit-note" size={24} color={color} />
                    ),
                    headerShown: false,

                }}
            />

            <Tab.Screen
                name="Clientes"
                component={ClientesNavigator} // Cambié Clientes por ClientesNavigator
                options={{
                    tabBarLabel: 'Clientes',
                    tabBarIcon: ({ color }) => (
                        <Feather name="users" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Inventario"
                component={Inventario}
                options={{
                    tabBarLabel: 'Inventario',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="inventory" size={24} color={color} />
                    ),
                    headerShown: false,

                }}
            />

        </Tab.Navigator>

    );
}

export default function Navigation() {
    return (
        //Dentro de este Navigation le estamos pasando nuestras tabs
        <NavigationContainer>
            <Mytabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        textAlign: 'center',
    },

});








