import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>مرحبا بك في مستودعك</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/logoWithoutBg.png")}
      />
      <View style={styles.btn}>
        <Text
          style={styles.btn_text}
          onPress={() => navigation.navigate("Storages")}
        >
          عرض المستودعات المتوفرة
        </Text>
      </View>
      {/* <View style={{ ...styles.btn, width: 200 }}>
        <Text
          style={styles.btn_text}
          onPress={() => navigation.navigate("About")}
        >
          معلومات
        </Text>
      </View> */}
      <Text
        style={{ fontFamily: "kaff", fontSize: 20 }}
        onPress={() => navigation.navigate("Sign")}
      >
        تسجيل دخول
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: Dimensions.get("screen").width / 2,
    height: Dimensions.get("screen").width / 2,
  },
  text: {
    fontFamily: "kaff",
    fontSize: 36,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#ff3c00",
    width: 300,
    height: 134,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 38,
    textAlign: "center",
  },
});
export default WelcomeScreen;
