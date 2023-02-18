import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
function SigninScreen({ navigation }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const myReg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(gmail|yahoo).(net|com|org)\s*$/gi;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>تسجيل الدخول للموظفين</Text>
        <View style={styles.arrow}>
          <AntDesign
            name="caretleft"
            size={32}
            color="black"
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          />
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.label}>الايميل</Text>
        <TextInput
          style={{
            ...styles.textInput,
            color: myReg.test(text1) ? "black" : "#ff3c00",
          }}
          value={text1}
          onChangeText={(newText) => setText1(newText)}
        />
        <Text style={{ ...styles.label }}>كلمة السر</Text>
        <TextInput
          style={styles.textInput}
          value={text2}
          onChangeText={(newText) => {
            setText2(newText);
            console.log(newText);
          }}
        />
        <View style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>تسجيل الدخول</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#ff3c00",
    width: Dimensions.get("screen").width,
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",
    paddingHorizontal: 20,
  },
  header_text: {
    fontSize: 26,
    fontWeight: "bold",
  },
  arrow: {
    paddingLeft: 10,
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
  },
  label: {
    fontWeight: "bold",
    fontSize: 36,
    textAlign: "right",
    width: Dimensions.get("screen").width / 1.5,
  },
  textInput: {
    width: Dimensions.get("screen").width / 1.5,
    height: 40,
    borderColor: "#000",
    borderRadius: 16,
    borderWidth: 3,
    paddingHorizontal: 16,
  },
  submitBtn: {
    marginTop: 100,
    width: Dimensions.get("screen").width / 2.5,
    height: 80,
    backgroundColor: "#ff3c00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  submitBtnText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default SigninScreen;
