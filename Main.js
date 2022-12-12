import { View, Text } from "react-native";
import React, { useContext } from "react";
import { useLogin } from "./store/LoginContext";
import NewUserScreen from "./screens/NewUserScreen";
import HomeScreen from "./screens/HomeScreen";

const Main = () => {
  const { jwt } = useLogin();
  return (
    <View>
      <Text>{jwt}</Text>
      {jwt ? <HomeScreen /> : <NewUserScreen />}
    </View>
  );
};

export default Main;
