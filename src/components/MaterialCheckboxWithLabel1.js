import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.checkLabel}>{props.label || "Febre"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  checkIcon: {
    color: "rgba(235,94,40,1)",
    fontFamily: "Roboto",
    fontSize: 28,
    lineHeight: 28
  },
  checkLabel: {
    color: "rgba(0,0,0,0.87)",
    marginLeft: 2,
    fontSize: 25
  }
});

export default MaterialCheckboxWithLabel1;
