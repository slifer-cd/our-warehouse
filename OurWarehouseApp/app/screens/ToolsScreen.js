import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { myContext } from "../../App";
function Tool({ data: { imageSource, name, pricePerHour } }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardPrice}>{`${pricePerHour}₪`}</Text>
      </View>
    </View>
  );
}

function ToolsScreen({ navigation }) {
  const tool = [
    {
      id: 1,
      name: "سلم",
      imageSource: require("../assets/images/woddenLadder.png"),
      pricePerHour: 12.99,
    },
    {
      id: 1,
      name: "سلم",
      imageSource: require("../assets/images/woddenLadder.png"),
      pricePerHour: 12.99,
    },
  ];
  const [state] = useContext(myContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.header_text}>الادوات المتوفرة</Text>
          <Text style={styles.state}>{`(${state})`}</Text>
        </View>
        <View style={styles.arrow}>
          <AntDesign
            name="caretleft"
            size={32}
            color="black"
            onPress={() => {
              navigation.navigate("Storages");
            }}
          />
        </View>
      </View>
      <View style={styles.grid}>
        {tool.map((e, i) => (
          <Tool key={i} data={e} />
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
  grid: {
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  card: {
    width: Dimensions.get("screen").width / 1.1,
    overflow: "hidden",
    height: Dimensions.get("screen").width / 2,
    borderColor: "#ff3c00",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 16,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "#ff3c00",
  },
  imageContainer: {
    width: "50%",
    height: "100%",
    borderColor: "#000",
    backgroundColor: "#fff",
    paddingVertical: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  cardInfo: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardName: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },
  cardPrice: {
    fontSize: 20,
  },
  textContainer: {
    height: "100%",
    justifyContent: "center",
  },
  state: {
    fontSize: 20,
  },
});

export default ToolsScreen;
