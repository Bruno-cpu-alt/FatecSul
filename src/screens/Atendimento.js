import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import MaterialButtonShare5 from "../components/MaterialButtonShare5";
import MaterialButtonShare6 from "../components/MaterialButtonShare6";
import MaterialButtonShare2 from "../components/MaterialButtonShare2";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import MaterialButtonShare4 from "../components/MaterialButtonShare4";
import MaterialButtonShare7 from "../components/MaterialButtonShare7";

function Atendimento(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/1308125-blue-people-icon-clipart-1-blue-people-png-132_297_preview1.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <MaterialButtonShare
            button1="Cabeca"
            style={styles.materialButtonShare}
          ></MaterialButtonShare>
          <View style={styles.materialButtonShare1Row}>
            <MaterialButtonShare1
              style={styles.materialButtonShare1}
            ></MaterialButtonShare1>
            <View style={styles.materialButtonShare5Column}>
              <MaterialButtonShare5
                style={styles.materialButtonShare5}
              ></MaterialButtonShare5>
              <MaterialButtonShare6
                style={styles.materialButtonShare6}
              ></MaterialButtonShare6>
            </View>
            <MaterialButtonShare2
              style={styles.materialButtonShare2}
            ></MaterialButtonShare2>
          </View>
        </ImageBackground>
        <MaterialButtonShare3
          style={styles.materialButtonShare3}
        ></MaterialButtonShare3>
        <MaterialButtonShare4
          style={styles.materialButtonShare4}
        ></MaterialButtonShare4>
        <MaterialButtonShare7
          style={styles.materialButtonShare7}
        ></MaterialButtonShare7>
        <Text style={styles.voltar}>Voltar</Text>
      </View>
      <Text style={styles.ondeDoiEmVoce}>Onde dói em você?</Text>
      <Text style={styles.mostreNoBoneco}>mostre no boneco</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    left: 9,
    width: 290,
    height: 419,
    position: "absolute"
  },
  image_imageStyle: {},
  materialButtonShare: {
    width: 89,
    height: 85,
    opacity: 0,
    marginTop: 9,
    marginLeft: 101
  },
  materialButtonShare1: {
    width: 40,
    height: 136,
    opacity: 0,
    marginTop: 5
  },
  materialButtonShare5: {
    width: 104,
    height: 115,
    opacity: 0
  },
  materialButtonShare6: {
    width: 89,
    height: 56,
    opacity: 0,
    marginLeft: 7
  },
  materialButtonShare5Column: {
    width: 104,
    marginLeft: 7
  },
  materialButtonShare2: {
    width: 40,
    height: 139,
    opacity: 0,
    marginLeft: 9
  },
  materialButtonShare1Row: {
    height: 171,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 47,
    marginRight: 43
  },
  materialButtonShare3: {
    top: 278,
    left: 102,
    width: 46,
    height: 147,
    position: "absolute",
    opacity: 0
  },
  materialButtonShare4: {
    top: 278,
    left: 161,
    width: 46,
    height: 147,
    position: "absolute",
    opacity: 0
  },
  materialButtonShare7: {
    top: 396,
    left: 0,
    width: 56,
    height: 56,
    position: "absolute"
  },
  voltar: {
    top: 419,
    left: 56,
    width: 67,
    height: 28,
    color: "rgba(100,100,100,1)",
    position: "absolute",
    fontFamily: "roboto-regular"
  },
  imageStack: {
    width: 299,
    height: 452,
    marginTop: 286,
    marginLeft: 32
  },
  ondeDoiEmVoce: {
    width: 280,
    height: 86,
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    fontFamily: "roboto-regular",
    lineHeight: 40,
    marginTop: -600,
    marginLeft: 40
  },
  mostreNoBoneco: {
    width: 228,
    height: 41,
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    lineHeight: 40,
    marginTop: 21,
    marginLeft: 60
  }
});

export default Atendimento;
