import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTeSHB1kpE87XUZeae96Qunzuar1Iy8CmG2HikyzhxDVzDPACFVAmOrvv1vlP7szisjw&usqp=CAU",
        }}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
      />
      <Image
        source={require("./assets/licensed-image.jpg")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
        marginTop={-40}
      />
      <Text style={{ color: "violet", fontSize: 45 }}>Hi there!</Text>

      <FontAwesome5 name="facebook" size={24} color="blue" />
      <FontAwesome5 name="x-twitter" size={24} color="blue" />
      <FontAwesome5 name="linkedin" size={24} color="blue" />

      <StatusBar style="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
