import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

import MenuItems from "./components/MenuItems";
import showCaseData from "./assets/showcaseData";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            {showCaseData.map((item) => (
              <MenuItems key={item.id} data={item} />
            ))}
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
