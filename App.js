import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/licensed-image.jpg")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={{ color: "violet", fontSize: 45 }}>Hi there!</Text>
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
