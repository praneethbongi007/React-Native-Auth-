import React from "react";
import { Linking, StyleSheet, View } from "react-native";
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

function Home({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Components made it Rapi UI
            </Text>
            <Button
              text="Rapi Docs"
              style={{ marginTop: 10 }}
              status="info"
              onPress={() => {
                Linking.openURL("https://rapi-ui.kikiding.space/docs");
              }}
            />
            <Button
              text="Go to Second Screen"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              status="success"
              style={{ marginTop: 10 }}
            />
            <Button
              text={isDarkmode ? "Light Mode" : "Dark Mode"}
              style={{ marginTop: 10 }}
              status={isDarkmode ? "primary" : "danger"}
              onPress={() => {
                if (isDarkmode) {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}

export default Home;
