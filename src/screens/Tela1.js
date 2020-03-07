import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonGrey from "../components/MaterialButtonGrey";
import MaterialButtonPrimary3 from "../components/MaterialButtonPrimary3";

function Tela1(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nomeDoUsuario}>Nome Do Usuário</Text>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 92.58 95.08" style={styles.ellipse}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(200,200,200,1)"
            stroke="rgba(230, 230, 230,1)"
            cx={46}
            cy={48}
            rx={46}
            ry={47}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/people_icon_b.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.dadosDoPaciente}>Dados do paciente</Text>
      <MaterialButtonGrey
        text1="Médicos"
        style={styles.materialButtonGrey}
      ></MaterialButtonGrey>
      <MaterialButtonGrey
        text1="Rémedio"
        style={styles.materialButtonGrey1}
      ></MaterialButtonGrey>
      <MaterialButtonGrey
        text1="Sintomas"
        style={styles.materialButtonGrey2}
      ></MaterialButtonGrey>
      <MaterialButtonPrimary3
        text1="Atendimento"
        button1="Atendimento"
        style={styles.materialButtonPrimary3}
      ></MaterialButtonPrimary3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nomeDoUsuario: {
    width: 320,
    height: 56,
    color: "rgba(64,123,189,1)",
    fontSize: 40,
    fontFamily: "roboto-regular",
    textAlign: "justify",
    marginTop: 166,
    alignSelf: "center"
  },
  ellipse: {
    top: 0,
    width: 93,
    height: 95,
    position: "absolute",
    left: 0
  },
  image: {
    top: 25,
    width: 45,
    height: 45,
    position: "absolute",
    left: 24
  },
  ellipseStack: {
    width: 93,
    height: 95,
    marginTop: -175,
    marginLeft: 134
  },
  dadosDoPaciente: {
    width: 211,
    height: 38,
    color: "rgba(74,144,226,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 93,
    marginLeft: 32
  },
  materialButtonGrey: {
    width: 289,
    height: 57,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 36,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    alignSelf: "flex-end",
    marginTop: 21,
    marginRight: 28
  },
  materialButtonGrey1: {
    width: 289,
    height: 57,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 43
  },
  materialButtonGrey2: {
    width: 289,
    height: 57,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 36,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 1,
    marginLeft: 43
  },
  materialButtonPrimary3: {
    width: 289,
    height: 86,
    borderRadius: 15,
    marginTop: 57,
    marginLeft: 43
  }
});

export default Tela1;
