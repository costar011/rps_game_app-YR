import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  /* 현재 디바이스의 width 값 가져오기 - Dimensions */
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TopBox}>
        <TouchableOpacity>
          <View style={styles.BtnBox}>
            <Text style={styles.Txt}>Start</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.DownBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  TopBox: {
    flex: 8,

    alignItems: `center`,
    justifyContent: `center`,

    backgroundColor: `#9ca0a1`,
  },

  DownBox: {
    flex: 2,

    alignItems: `center`,
    justifyContent: `center`,

    backgroundColor: `#7a7a7a`,
  },

  BtnBox: {
    width: CURRENT_WIDTH / 2,
    height: 45,
    backgroundColor: "#5511d4",
    borderRadius: 5,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 50,
  },

  Txt: {
    color: `#fff`,

    fontSize: 30,
    fontWeight: `700`,
  },
});

export default App;
