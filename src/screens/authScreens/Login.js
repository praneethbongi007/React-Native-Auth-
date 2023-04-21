import React from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Layout,
  useTheme,
  TextInput,
  Button,
  themeColor,
} from "react-native-rapi-ui";
const ForgetPassword = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }} enabled>
      <Layout>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
            }}
          >
            <Text style={{ alignSelf: "center", padding: 30 }} size="h3">
              Login
            </Text>
            <Text>Email</Text>
            <TextInput placeholder="Enter your Email" />
            <Text style={{ marginTop: 15 }}>Password</Text>
            <TextInput placeholder="Enter your Password" />
            <Button title="Continue" />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                justifyContent: "center",
              }}
            >
              <Text size="md">Already have a Account</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text size="md" fontWeight="bold">
                  Forget Password
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  isDarkmode ? setTheme("light") : setTheme("dark");
                }}
              >
                <Text size="md" style={{ marginLeft: 5 }}>
                  {isDarkmode ? "Light Theme" : "Dark Theme"}{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;
