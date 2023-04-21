import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Layout,
  Section,
  SectionContent,
  Text,
  TopNav,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function SecondScreen({ navigation }) {
  const { isDarkMode, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(isDarkMode);

  const handleThemeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setTheme(newMode ? "dark" : "light");
  };

  return (
    <Layout>
      <TopNav
        leftAction={() => {
          navigation.goBack();
        }}
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={darkMode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={handleThemeToggle}
        rightContent={
          darkMode ? (
            <Ionicons
              name="sunny-outline"
              size={20}
              color={themeColor.white100}
            />
          ) : (
            <Ionicons
              name="moon"
              size={20}
              color={themeColor.dark}
            />
          )
        }
        bgColor={isDarkMode ? themeColor.dark : themeColor.white100}
        borderBottomColor={isDarkMode ? themeColor.line : themeColor.white100}
        statusBarStyle={isDarkMode ? "light-content" : "dark-content"}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>SecondScreen</Text>
      </View>
    </Layout>
  );
}
