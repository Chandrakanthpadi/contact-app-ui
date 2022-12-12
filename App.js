import { NavigationContainer } from "@react-navigation/native";
import Main from "./Main";
import { UserProvider } from "./store/UserContext";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </UserProvider>
  );
}
