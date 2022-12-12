import Main from "./Main";
import { LoginProvider } from "./store/LoginContext";

export default function App() {
  return (
    <LoginProvider>
      <Main />
    </LoginProvider>
  );
}
