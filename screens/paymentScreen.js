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
  StatusBar
} from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";
import Navbar from "../Components/navbar";

onPressAddToCart = () => {
  this.props.navigation.navigate("Confirmation");
};

const leftImage = require("../assests/images/back.png");
const rightImage = require("../assests/images/cart.png");

export default class Address extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    name: "",
    cardNo: null,
    expiryDate: null,
    cvv: 0
  };
  render() {
    return (
      <View style={styles.mainDiv}>
        <StatusBar barStyle="light-content" backgroundColor="#10D731" />
        <Navbar
          leftImage={leftImage}
          title="Your Order"
          rightImage={rightImage}
          rightImageClicked={() => this.props.navigation.navigate("order")}
          leftImageClicked={() => this.props.navigation.goBack()}
        />
        <KeyboardAvoidingView behavior="padding" style={styles.mainDiv} enabled>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30
            }}
          >
            <View
              style={{
                width: 270,
                height: 140,
                backgroundColor: "#EEEAEA",
                elevation: 5
              }}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30
            }}
          >
            <TextInput
              style={styles.textInput}
              placeholder="Account Holder Name"
              value={this.state.name}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30
            }}
          >
            <TextInput
              style={styles.textInput}
              placeholder="Card Number"
              keyboardType="number-pad"
              value={this.state.cardNo}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30
            }}
          >
            <TextInput
              style={styles.textInput}
              placeholder="Expiry Date"
              value={this.state.expiryDate}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30
            }}
          >
            <TextInput
              style={styles.textInput}
              placeholder="CVV"
              keyboardType="number-pad"
              value={this.state.cvv}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonTouch}
              onPress={() => this.props.navigation.navigate("Confirmation")}
            >
              <Text style={styles.addTCart}>PAY ORDER</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  textInput: {
    height: 50,
    width: 250,
    borderRadius: 4,
    backgroundColor: "#F6F1F1",
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTouch: {
    backgroundColor: "#10D731",
    borderRadius: 25,
    width: 250,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  addTCart: {
    color: "#FFFFFF",
    fontSize: 15
  }
});
