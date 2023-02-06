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

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    abdo: require("./app/assets/fonts/bold-font.ttf"),
    kaff: require("./app/assets/fonts/i-font.otf"),
  });
  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
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
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ headerShown: false }}
          />
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
