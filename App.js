import React, { useState } from "react";
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
const RPS_IMAGE = [
  "http://i.011st.com/cm_exhibition/2012/1501/mwevent/game/images/user_img_0.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqumKKO3S5YxpDvwSclqci_cvGC1_HRKimg&usqp=CAU",
  "http://image.blog.livedoor.jp/deaiup/imgs/1/5/1506be2c.png",
];

const App = () => {
  const [tab, setTab] = useState(0);
  const [MeData, setMeData] = useState(`잠시만 기다려주세요.`);
  const [ComData, setComData] = useState(`잠시만 기다려주세요.`);
  const [resultText, setValue] = useState(``);
  const [meImage, setMeImage] = useState(``);
  const [comImage, setComImage] = useState(``);

  const RanDom = () => Math.floor(Math.random() * 3);

  const StartBtnHandler = (value) => {
    setTab(value);

    if (value === 0) {
      setMeData(`잠시만 기다려 주세요`);
      setComData(`잠시만 기다려 주세요`);
      setValue(``);
    }

    if (value === 1) {
      const rum1 = StartBtnHandler();
      const rum2 = StartBtnHandler();

      const me = RPS_IMAGE[rum1];
      const com = RPS_IMAGE[rum2];

      const setMeImage = RPS_IMAGE[rum1];
      const setComImage = RPS_IMAGE[rum2];

      setMeData(me);
      setComData(com);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopBox}>
        {tab === 0 && (
          <TouchableOpacity onPressOut={() => StartBtnHandler(1)}>
            <View style={styles.BtnBox}>
              <Text style={styles.Txt}>START</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.DownBox}>
        <TouchableOpacity>
          <View style={styles.BtnBox}>
            <Text style={styles.Txt}>AGAIN</Text>
          </View>
        </TouchableOpacity>
      </View>
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
