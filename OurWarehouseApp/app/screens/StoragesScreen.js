import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Storage from "./components/storage";
import { myContext } from "../../App";
import { useContext } from "react";
function StoragesScreen({ navigation }) {
  const data = [
    {
      id: 1,
      title: "القدس",
      keyword: "jer",
      source: require("../assets/images/jerusalem.png"),
    },
    {
      id: 2,
      title: "رام الله",
      keyword: "ram",
      source: require("../assets/images/ramAllah.png"),
    },
    {
      id: 3,
      title: "بيت لحم",
      keyword: "bitl7m",
      source: require("../assets/images/beetl7m.png"),
    },
    {
      id: 4,
      title: "نابلس",
      keyword: "nab",
      source: require("../assets/images/nablus.png"),
    },
    {
      id: 5,
      title: "جنين",
      keyword: "jnin",
      source: require("../assets/images/jnin.png"),
    },
    {
      id: 6,
      title: "الخليل",
      keyword: "khalil",
      source: require("../assets/images/hebro.png"),
    },
  ];
  const [, setState] = useContext(myContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>المستودعات المتوفرة</Text>
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
      <View style={styles.btns_container}>
        {data.map((e) => (
          <View style={styles.card} key={e.id}>
            <Pressable
              style={{ flex: 1, justifyContent: "center" }}
              onPress={() => {
                setState(e.title);
                navigation.navigate("Tools");
              }}
            >
              <ImageBackground
                source={e.source}
                style={styles.ImageBackground}
                resizeMode="cover"
              >
                <View style={styles.dark} />
                <Storage title={e.title} keyword={e.keyword} />
              </ImageBackground>
            </Pressable>
          </View>
        ))}
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
    fontSize: 36,
    fontWeight: "bold",
  },
  arrow: {
    paddingLeft: 10,
  },
  btns_container: {
    width: Dimensions.get("screen").width,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: Dimensions.get("screen").height - 122,
  },
  card: {
    width: Dimensions.get("screen").width / 3 + 40,
    height: Dimensions.get("screen").width / 3 - 40,
    backgroundColor: "#000",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    overflow: "hidden",
  },
  ImageBackground: {
    width: Dimensions.get("screen").width / 3 + 40,
    height: Dimensions.get("screen").width / 3 - 40,
    justifyContent: "center",
  },
  dark: {
    position: "absolute",
    width: Dimensions.get("screen").width / 3 + 40,
    height: Dimensions.get("screen").width / 3 - 40,
    backgroundColor: "rgba(0,0,0,.30)",
  },
});
export default StoragesScreen;
