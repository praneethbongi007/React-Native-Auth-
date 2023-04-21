import React from "react";
import MainNavigator from "./src/navigator/AppNavigator";
import { ThemeProvider } from "react-native-rapi-ui";
import { AuthProvider } from "./src/AuthContext/AuthProvider";
const App = () => {
  return (
    <ThemeProvider theme="light">
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
