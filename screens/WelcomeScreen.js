import { View, Button } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

export default WelcomeScreen;
