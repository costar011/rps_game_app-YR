import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view2}>
        <Text style={styles.txt}>Test</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#2f3dc2`,
  },
  view2: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
  txt: {
    fontSize: 20,
    fontWeight: `600`,
    color: `#fff`,
  },
});

export default App;
