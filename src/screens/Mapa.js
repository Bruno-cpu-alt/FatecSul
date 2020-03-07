import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialMapView1 from "../components/MaterialMapView1";

function Mapa(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialMapView1Stack}>
        <MaterialMapView1 style={styles.materialMapView1}></MaterialMapView1>
        <Text style={styles.hospitaisProximos}>Hospitais próximos</Text>
      </View>
      <Text style={styles.vocePodeEstaCom}>Você pode esta com:</Text>
      <Text style={styles.cefaleia}>Cefaleia</Text>
      <Text style={styles.gengivaInflamada}>gengiva inflamada</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialMapView1: {
    top: 101,
    left: 2,
    width: 280,
    height: 322,
    position: "absolute"
  },
  hospitaisProximos: {
    top: 0,
    left: 0,
    width: 282,
    height: 102,
    color: "rgba(74,144,226,1)",
    position: "absolute",
    fontSize: 40,
    fontFamily: "roboto-regular"
  },
  materialMapView1Stack: {
    width: 282,
    height: 423,
    marginTop: 302,
    marginLeft: 38
  },
  vocePodeEstaCom: {
    width: 200,
    height: 62,
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    fontFamily: "roboto-regular",
    marginTop: -642,
    marginLeft: 38
  },
  cefaleia: {
    width: 157,
    height: 41,
    color: "rgba(235,94,40,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: 37,
    marginLeft: 38
  },
  gengivaInflamada: {
    width: 280,
    height: 50,
    color: "rgba(235,94,40,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    marginTop: 15,
    marginLeft: 38
  }
});

export default Mapa;
