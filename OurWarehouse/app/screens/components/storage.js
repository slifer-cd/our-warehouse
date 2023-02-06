import { Text } from "react-native";

function storage({ title }) {
  return (
    <Text
      style={{
        textAlign: "center",
        fontFamily: "kaff",
        fontSize: 26,
        color: "#fff",
      }}
    >
      {title}
    </Text>
  );
}

export default storage;
