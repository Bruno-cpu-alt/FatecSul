import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialButtonShare8(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="subdirectory-arrow-left" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(74,144,226,1)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  icon: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 24,
    alignSelf: "center"
  }
});

export default MaterialButtonShare8;
