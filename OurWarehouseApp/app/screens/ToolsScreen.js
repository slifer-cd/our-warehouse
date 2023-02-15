import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
function Tool({ data: { imageSource, name, pricePerHour } }) {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <View style={styles.cardFotter}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardPrice}>{pricePerHour}</Text>
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
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>الادوات المتوفرة</Text>
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
        {tool.map((e) => (
          <Tool key={e.id} data={e} />
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
  grid: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  card: {
    width: Dimensions.get("screen").width / 2.5,
    overflow: "hidden",
    height: Dimensions.get("screen").width / 2,
    borderColor: "#ff3c00",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 16,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    width: "95%",
    height: "70%",
  },
  cardFotter: {
    marginTop: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  cardName: {
    fontSize: 20,
  },
  cardPrice: {
    fontSize: 20,
  },
});

export default ToolsScreen;
