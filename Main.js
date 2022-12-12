import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { usePrincipalUser } from "./store/UserContext";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Main = () => {
  const Stack = createNativeStackNavigator();
  const { jwt } = usePrincipalUser();

  if (jwt) {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    );
  }
};

export default Main;
