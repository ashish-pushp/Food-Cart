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
  Dimensions
} from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Map from "../Components/map";

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
        <View
          style={{
            backgroundColor: "#10D731",
            height: 60,
            flexDirection: "row"
          }}
        >
          <Grid>
            <Col
              style={{
                backgroundColor: "transparent",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                style={{ left: 10 }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Image
                  source={require("../assests/images/back.png")}
                  style={{ width: 27, height: 27 }}
                />
              </TouchableOpacity>
            </Col>
            <Col
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                width: 190
              }}
            >
              <Text
                style={{
                  fontSize: 21,
                  color: "white",
                  fontFamily: "Roboto-Bold",
                  left: 15
                }}
              >
                Order Confirmation
              </Text>
            </Col>
            <Col
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{ left: 25 }}
                onPress={() => this.props.navigation.navigate("Order")}
              >
                <Image
                  source={require("../assests/images/cart.png")}
                  style={{ width: 27, height: 27 }}
                />
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
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
