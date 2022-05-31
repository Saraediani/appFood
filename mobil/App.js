import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";

import {
  SigninScreen,
  SignupScreen,
  ForgotPasswordScreen,
  HomeScreen,
  CartScreen,
  MenuScreen,
} from "./src/screen";
import OrderScreen from "./src/screen/Order/OrderScreen";
import { AuthProvider } from "./src/context/AuthProvider";
import { CartProvider } from "./src/context/CartProvider";
import { Container } from "./src/styles/Global.styles";
import PersistLogin from "./src/components/PersistLogin ";
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <CartProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Register" component={SignupScreen} />
            <Stack.Screen name="Login" component={SigninScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            {/* <PersistLogin> */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            {/* </PersistLogin> */}
          </Stack.Navigator>
        </NavigationContainer>
        </CartProvider>
      </AuthProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
