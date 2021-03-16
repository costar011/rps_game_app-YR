import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  /* 현재 디바이스의 width 값 가져오기 - Dimensions */
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const RPS_RANDOM = ["가위", "바위", "보"];
const RPS_IMAGES = [
  "http://i.011st.com/cm_exhibition/2012/1501/mwevent/game/images/user_img_0.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqumKKO3S5YxpDvwSclqci_cvGC1_HRKimg&usqp=CAU",
  "http://image.blog.livedoor.jp/deaiup/imgs/1/5/1506be2c.png",
];

const App = () => {
  const [tab, setTab] = useState(0);
  const [MeData, setmeData] = useState(`기다려주세요.`);
  const [ComData, setcomData] = useState(`기다려주세요.`);
  const [resultText, setText] = useState(``);
  const [MeImage, setMeImage] = useState(``);
  const [ComImage, setComImage] = useState(``);

  const RanDom = () => Math.floor(Math.random() * 3);

  const _startButtonClickHandler = (value) => {
    setTab(value);

    if (value === 0) {
      setmeData(`잠시만 기다려 주세요`);
      setcomData(`잠시만 기다려 주세요`);
      setText(``);
    }

    if (value === 1) {
      const rum1 = RanDom();
      const rum2 = RanDom();

      const Me = RPS_RANDOM[rum1];
      const Com = RPS_RANDOM[rum2];

      const MeImage = RPS_IMAGES[rum1];
      const ComImage = RPS_IMAGES[rum2];

      setmeData(Me);
      setcomData(Com);

      setMeImage(MeImage);
      setComImage(ComImage);

      if (rum1 === rum2) {
        setText("사용자와 컴퓨터는 비겼습니다.");
        return;
      }
      if (rum1 === 0) {
        if (rum2 === 1) {
          setText("사용자는 컴퓨터에게 졌습니다");
          return;
        } else if (rum2 === 2) {
          setText("사용자는 컴퓨터에게 이겼습니다.");
          return;
        }
      }
      if (rum1 === 1) {
        if (rum2 === 0) {
          setText("사용자는 컴퓨터에게 이겼습니다.");
          return;
        } else if (rum2 === 2) {
          setText("사용자는 컴퓨터에게 졌습니다");
          return;
        }
      }
      if (rum1 === 2) {
        if (rum2 === 0) {
          setText("사용자는 컴퓨터에게 졌습니다");
          return;
        } else if (rum2 === 1) {
          setText("사용자는 컴퓨터에게 이겼습니다.");
          return;
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Area}>
        {tab === 0 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startButtonClickHandler(1)}
          >
            <Text style={styles.startBtnText}>Start Game</Text>
          </TouchableOpacity>
        )}
        {tab === 1 && (
          <View>
            <View style={styles.ingameTop}>
              <Image
                style={styles.rpsImg}
                source={{
                  uri: MeImage,
                }}
              />
              <Text>{MeData}</Text>
            </View>
            <View style={styles.ingameMiddle}>
              <LinearGradient
                colors={["#9debf5", "#2ed1e6"]}
                locations={[0.9, 0.1]}
                style={styles.vsView}
                start={[`left`, `right`]}
              >
                <Text style={styles.vs}>VS</Text>
              </LinearGradient>
            </View>
            <View style={styles.gameBottom}>
              <Image
                style={styles.rpsImg}
                source={{
                  uri: ComImage,
                }}
              />
              <Text>{ComData}</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.resultArea}>
        <View style={styles.resultAreaTop}>
          <Text>{resultText}</Text>
        </View>
        <View style={styles.resultAreaBottom}>
          {tab === 1 && (
            <TouchableOpacity
              style={styles.startBtn}
              onPressOut={() => _startButtonClickHandler(0)}
            >
              <Text style={styles.startBtnText}>RESTART!</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

/* 삼항연산자 -> (조건식) ? true일 때 : false일 때 */
/* javascript optional -> (조건식) ? true라면 && ~~~ */
/* 속도는 삼항연산자가 더 빠름 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Area: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  resultArea: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  startBtn: {
    width: CURRENT_WIDTH / 2,
    height: 45,
    backgroundColor: "#43ded9",
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },

  startBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 25,
  },

  resultAreaTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  resultAreaBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  ingameTop: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  ingameMiddle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  gameBottom: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  vsView: {
    width: CURRENT_WIDTH,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  vs: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },

  rpsImg: {
    width: 150,
    height: 150,
  },
});

export default App;
