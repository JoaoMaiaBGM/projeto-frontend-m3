import { ThemeProvider } from "styled-components";
import RoutesMain from "./Routes";
import { GlobalStyle } from "./Global/index";
import Theme from "./Global/Theme";
import { AuthProvider } from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </ThemeProvider>
      <GlobalStyle />
      <ToastContainer theme='dark' autoClose='1500' />
    </>
  );
}

export default App;
