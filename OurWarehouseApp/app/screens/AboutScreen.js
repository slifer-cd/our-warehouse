// import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// function AboutScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.header_text}>معلومات</Text>
//         <View style={styles.arrow}>
//           <AntDesign
//             name="caretleft"
//             size={32}
//             color="black"
//             onPress={() => {
//               navigation.navigate("Welcome");
//             }}
//           />
//         </View>
//       </View>
//       <ScrollView style={{ width: Dimensions.get("screen").width }}>
//         <Text style={styles.mainText}></Text>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     backgroundColor: "#ff3c00",
//     width: Dimensions.get("screen").width,
//     height: 120,
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "row-reverse",
//     paddingHorizontal: 20,
//   },
//   header_text: {
//     fontSize: 36,
//   },
//   arrow: {
//     paddingLeft: 10,
//   },
//   mainText: {
//     width: Dimensions.get("screen").width,
//     fontSize: 36,
//     lineHeight: 60,
//     textAlign: "center",
//     flex: 1,
//   },
// });

// export default AboutScreen;
