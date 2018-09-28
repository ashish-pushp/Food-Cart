import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  StatusBar
} from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Map from "../Components/map";
import Navbar from "../Components/navbar";

const leftImage = require("../assests/images/back.png");
const rightImage = require("../assests/images/cart.png");

export default class Confirmation extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainDiv}>
        <StatusBar barStyle="light-content" backgroundColor="#10D731" />
        <Navbar
          leftImage={leftImage}
          title="Order Confirmation"
          rightImage={rightImage}
          rightImageClicked={() => this.props.navigation.navigate("order")}
          leftImageClicked={() => this.props.navigation.goBack()}
          titleWidth={155}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 23, fontWeight: "bold" }}>
              ORDER CONFIRMED
            </Text>
          </View>
          <View style={styles.descSection}>
            <Text style={styles.descText}>
              Our Driver is on his way to collect your order and will deliver it
              to your home shortly
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <Map />
        </View>
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: "blue",
            top: 580,
            borderRadius: 64,
            left: 300,
            position: "absolute"
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: 605,
            left: 325,
            fontSize: 19,
            fontWeight: "bold",
            color: "#FFFFFF",
            backgroundColor: "transparent",
            width: 38,
            textAlign: "center"
          }}
        >
          17 MIN
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    right: 0,
    bottom: 0,
    width: 413,
    marginLeft: 7,
    height: 510,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  mainDiv: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  descSection: {
    top: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginLeft: 30,
    marginRight: 30
  },
  descText: {
    fontSize: 19,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 10,
    color: "#CCCCCC"
  }
});
