import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialButtonPrimary1 from "../components/MaterialButtonPrimary1";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";

function Cadastro(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonPrimaryRow}>
        <MaterialButtonPrimary
          text1="Entrar"
          button1="Tela1"
          style={styles.materialButtonPrimary}
        ></MaterialButtonPrimary>
        <MaterialButtonPrimary1
          text1="Cadastre-se"
          button1="Untitled"
          style={styles.materialButtonPrimary1}
        ></MaterialButtonPrimary1>
      </View>
      <MaterialUnderlineTextbox
        textInput1="Usuário ou Email"
        style={styles.materialUnderlineTextbox}
      ></MaterialUnderlineTextbox>
      <MaterialUnderlineTextbox1
        textInput1="Senha"
        style={styles.materialUnderlineTextbox1}
      ></MaterialUnderlineTextbox1>
      <Text style={styles.agisus}>Agisus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonPrimary: {
    width: 100,
    height: 36
  },
  materialButtonPrimary1: {
    width: 108,
    height: 36,
    marginLeft: 38
  },
  materialButtonPrimaryRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 500,
    marginLeft: 67,
    marginRight: 47
  },
  materialUnderlineTextbox: {
    width: 317,
    height: 43,
    borderColor: "#000000",
    borderWidth: 0,
    shadowOpacity: 1,
    overflow: "hidden",
    marginTop: -173,
    alignSelf: "center"
  },
  materialUnderlineTextbox1: {
    width: 317,
    height: 42,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 25,
    alignSelf: "center"
  },
  agisus: {
    width: 204,
    height: 78,
    color: "rgba(74,144,226,1)",
    fontSize: 60,
    fontFamily: "roboto-regular",
    marginTop: -303,
    alignSelf: "center"
  }
});

export default Cadastro;
