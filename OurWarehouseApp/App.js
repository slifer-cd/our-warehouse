import { StatusBar, SafeAreaView, StyleSheet, Platform } from "react-native";
import {
  WelcomeScreen,
  AboutScreen,
  StoragesScreen,
  ToolsScreen,
  SigninScreen,
} from "./app/screens";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";

const Stack = createNativeStackNavigator();
export const myContext = React.createContext();

export default function App() {
  const [state, setState] = useState(undefined);
  const [fontsLoaded] = useFonts({
    kaff: require("./app/assets/fonts/i-font.otf"),
  });
  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <myContext.Provider value={[state, setState]}>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Storages"
              component={StoragesScreen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="About"
              component={AboutScreen}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Tools"
              component={ToolsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sign"
              component={SigninScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </myContext.Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
