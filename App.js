import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
const { useState, useEffect } = require("react");
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

function DisplayInsets() {
  const insets = useSafeAreaInsets();
  return (
    <Text>
      Insets: {insets.bottom} - {insets.top}
    </Text>
  );
}

export default function App() {
  const onContactMe = () => {
    Linking.openURL("mailto:rafiferdos@gmail.com");
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);
  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]}>
        <ScrollView>
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
            <DisplayInsets />
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginTop: 20,
                display: "flex",
              }}
            >
              <FontAwesome5 name="facebook" size={24} color="blue" />
              <FontAwesome5 name="x-twitter" size={24} color="blue" />
              <FontAwesome5 name="linkedin" size={24} color="blue" />
            </View>
            <Text style={{ color: "violet", fontSize: 45 }}>Hi there!</Text>
            <View style={{ height: 20 }} />
            <Button title="Contact Me" onPress={onContactMe} />

            <Text style={{ margin: 20, textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              reiciendis vero possimus. Sapiente ad ea ducimus minus cum,
              debitis, culpa ratione velit impedit deserunt animi, numquam
              officia laudantium corporis ab molestiae. Eius, similique maxime
              facilis incidunt deserunt quibusdam esse, ex odit cumque inventore
              ipsa unde, totam atque eos ducimus delectus corporis doloribus
              ratione? In blanditiis corrupti quod quo voluptatibus explicabo
              eveniet quaerat cupiditate molestiae numquam, hic magnam enim,
              soluta eius sunt aliquam ullam quae debitis cumque voluptate
              similique! Ut suscipit rem, ducimus, tempore perspiciatis quo quas
              magni sapiente libero sed ullam, ea quibusdam. Quas corrupti porro
              alias quae itaque nemo. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Soluta reprehenderit, sit aperiam expedita
              optio, libero numquam aut fugiat incidunt harum in totam.
              Obcaecati assumenda cum magnam mollitia molestias sequi
              dignissimos ducimus sed modi doloribus! Velit, vitae? Eius eveniet
              inventore labore. Molestiae magni, deleniti maxime sit recusandae
              illum architecto dolore facilis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste laboriosam ullam laborum fuga
              culpa quos. Ad deserunt ratione neque laborum iure. Impedit
              temporibus deserunt repudiandae cupiditate nostrum vero quam
              ducimus rerum illum perspiciatis! Facere excepturi repellat nam
              modi et. Consequatur in error assumenda, nihil at, ex possimus
              doloribus eos omnis labore mollitia aliquid obcaecati eius quia
              qui, nam beatae optio molestiae dignissimos! Vel nostrum eum
              sapiente aliquid ad recusandae enim repellendus porro, sint labore
              vero harum, sequi autem, repudiandae id maxime explicabo? Porro
              ratione, iure libero modi in atque fuga nihil dicta distinctio vel
              expedita, id hic commodi? Iusto at eos a, voluptatem officia
              assumenda laboriosam sit quo laudantium molestias cum
              perspiciatis. Ut illo corrupti excepturi tempora suscipit itaque
              sed quas ullam asperiores inventore, ipsum iure ea voluptatem ad
              aliquid modi molestiae doloremque eaque, accusantium sit unde
              necessitatibus beatae quis! Laudantium odit quam beatae molestiae
              pariatur. Tempore necessitatibus, minima doloremque voluptatibus
              optio asperiores et omnis ex impedit, deleniti nam illum veniam
              harum quae cum repellendus totam sit neque nemo molestias, eius
              quo fugit dolore. Similique harum facilis natus, delectus illo
              commodi veritatis expedita incidunt fugit accusamus consectetur
              minima dicta debitis consequuntur, tenetur quaerat voluptates
              quibusdam doloribus molestiae quis sed dolore.
            </Text>

            <StatusBar style="" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
