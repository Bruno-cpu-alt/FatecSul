import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare8 from "../components/MaterialButtonShare8";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import MaterialCheckboxWithLabel1 from "../components/MaterialCheckboxWithLabel1";
import MaterialCheckboxWithLabel2 from "../components/MaterialCheckboxWithLabel2";
import MaterialCheckboxWithLabel3 from "../components/MaterialCheckboxWithLabel3";
import MaterialButtonPrimary6 from "../components/MaterialButtonPrimary6";

function Cabeca(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonShare8Row}>
        <MaterialButtonShare8
          style={styles.materialButtonShare8}
        ></MaterialButtonShare8>
        <Text style={styles.voltar1}>Voltar</Text>
      </View>
      <Text style={styles.ondeDoiEmVoce1}>
        Você selecionou a cabeça.{"\n"}Selecione os
      </Text>
      <Text style={styles.sintomas}>sintomas</Text>
      <MaterialCheckboxWithLabel
        text1="Dor"
        style={styles.materialCheckboxWithLabel}
      ></MaterialCheckboxWithLabel>
      <MaterialCheckboxWithLabel1
        style={styles.materialCheckboxWithLabel1}
      ></MaterialCheckboxWithLabel1>
      <MaterialCheckboxWithLabel2
        style={styles.materialCheckboxWithLabel2}
      ></MaterialCheckboxWithLabel2>
      <MaterialCheckboxWithLabel3
        style={styles.materialCheckboxWithLabel3}
      ></MaterialCheckboxWithLabel3>
      <MaterialButtonPrimary6
        text1=""
        button1="Mapa"
        style={styles.materialButtonPrimary6}
      ></MaterialButtonPrimary6>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonShare8: {
    width: 56,
    height: 56
  },
  voltar1: {
    width: 67,
    height: 28,
    color: "rgba(100,100,100,1)",
    fontFamily: "roboto-regular",
    marginTop: 23
  },
  materialButtonShare8Row: {
    height: 56,
    flexDirection: "row",
    marginTop: 682,
    marginLeft: 32,
    marginRight: 205
  },
  ondeDoiEmVoce1: {
    width: 280,
    height: 126,
    color: "rgba(74,144,226,1)",
    fontSize: 35,
    fontFamily: "roboto-regular",
    lineHeight: 40,
    marginTop: -682,
    marginLeft: 40
  },
  sintomas: {
    width: 280,
    height: 46,
    color: "rgba(235,94,40,1)",
    fontSize: 35,
    fontFamily: "roboto-regular",
    lineHeight: 40,
    marginLeft: 40
  },
  materialCheckboxWithLabel: {
    width: 90,
    height: 40,
    marginTop: 82,
    marginLeft: 43
  },
  materialCheckboxWithLabel1: {
    width: 90,
    height: 40,
    marginLeft: 54
  },
  materialCheckboxWithLabel2: {
    width: 112,
    height: 40,
    marginLeft: 54
  },
  materialCheckboxWithLabel3: {
    width: 112,
    height: 40,
    marginLeft: 54
  },
  materialButtonPrimary6: {
    width: 100,
    height: 36,
    borderRadius: 15,
    marginTop: 121,
    marginLeft: 130
  }
});

export default Cabeca;
