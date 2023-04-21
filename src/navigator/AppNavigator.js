import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-rapi-ui";
import {  initializeApp } from "firebase/app";
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import About from "../screens/About";
import Profile from "../screens/Profile";
import TabBarIcons from "../components/TabBarIcons";
import TabBarText from "../components/TabBarText";
import Login from "../screens/authScreens/Login";
import Register from "../screens/authScreens/Register";
import ForgetPassword from "../screens/authScreens/Forget";
import { AuthContext } from "../AuthContext/AuthProvider";
import Loading from "../screens/Utils/Loading";
const StackNavigator = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCTOuRX6O3yRElJWutfL8SUl8rkXvZstGo",
  authDomain: "react-native-auth-1c992.firebaseapp.com",
  projectId: "react-native-auth-1c992",
  storageBucket: "react-native-auth-1c992.appspot.com",
  messagingSenderId: "204731472584",
  appId: "1:204731472584:web:43eb2a424ae19684cb63fd",
  measurementId: "G-DKK082G5Z1",
};

if (!firebase.apps.length) {
  initializeApp(firebaseConfig);
}

const MainTabs = () => {
  const { isDarkmode,setTheme } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? "white" : "black",
          backgroundColor: isDarkmode ? "black" : "white",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText title="Home" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcons icon="md-home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText title="About" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcons icon="ios-information-circle" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText title="Profile" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcons icon="person" focused={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const Main = () => {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen
        name="MainTabs"
        options={{ title: "Home" }}
        component={MainTabs}
      />
      <StackNavigator.Screen
        name="SecondScreen"
        options={{ title: "Second Screen" }}
        component={SecondScreen}
      />
    </StackNavigator.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainNavigator = () => {
  const auth = useContext(AuthContext);
  const user = auth.user;

  return (
    <NavigationContainer>
      {/* {user === null && <Loading />} */}
      {user === false && <Auth />}
      {user === true && <Main />}
    </NavigationContainer>
  );
};

export default MainNavigator;
