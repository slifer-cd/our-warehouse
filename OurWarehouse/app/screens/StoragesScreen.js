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

function StoragesScreen({ navigation }) {
  const data = [
    {
      id: 1,
      title: "القدس",
      keyword: "jer",
      source: require("../assets/imgs/jerusalem.jpg"),
    },
    {
      id: 2,
      title: "رام الله",
      keyword: "ram",
      source: require("../assets/imgs/ramallah.jpg"),
    },
    {
      id: 3,
      title: "بيت لحم",
      keyword: "bitl7m",
      source: require("../assets/imgs/beetl7m.jpg"),
    },
    {
      id: 4,
      title: "نابلس",
      keyword: "nab",
      source: require("../assets/imgs/nablus.jpg"),
    },
    {
      id: 5,
      title: "جنين",
      keyword: "jnin",
      source: require("../assets/imgs/jnin.jpg"),
    },
    {
      id: 6,
      title: "الخليل",
      keyword: "khalil",
      source: require("../assets/imgs/heborn.jpg"),
    },
  ];

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
              onPress={() => navigation.navigate("Tools")}
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
    fontFamily: "abdo",
    fontSize: 36,
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
