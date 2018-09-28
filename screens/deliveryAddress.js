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

const leftImage = require("../assests/images/back.png");
const rightImage = require("../assests/images/cart.png");

onPressAddToCart = () => {
  this.props.navigation.navigate("Payment");
};
export default class Address extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    address: "",
    city: "",
    zip: 0,
    phone: 0
  };
  onButtonClick = () => {
    this.props.navigation.navigate("Payment");
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.mainDiv} enabled>
        <StatusBar barStyle="light-content" backgroundColor="#10D731" />
        <Navbar
          leftImage={leftImage}
          title="Delivery Details"
          rightImage={rightImage}
          rightImageClicked={() => this.props.navigation.navigate("order")}
          leftImageClicked={() => this.props.navigation.goBack()}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30
          }}
        >
          <Image
            source={require("../assests/images/placeholder.png")}
            style={{ width: 130, height: 130 }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20
          }}
        >
          <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>
            Home Address
          </Text>
        </View>
        <View style={styles.textInputDiv}>
          <TextInput
            style={styles.textInput}
            placeholder="Address Line"
            onChangeText={val => this.setState({ val: this.state.address })}
            onSubmitEditing={val => this.setState({ val: this.state.address })}
          />
        </View>
        <View style={styles.textInputDiv}>
          <TextInput
            style={styles.textInput}
            placeholder="City"
            onChangeText={val => this.setState({ val: this.state.city })}
            onSubmitEditing={val => this.setState({ val: this.state.city })}
          />
        </View>
        <View style={styles.textInputDiv}>
          <TextInput
            style={styles.textInput}
            placeholder="Zip Code"
            keyboardType="number-pad"
            onChangeText={val => this.setState({ val: this.state.zip })}
            onSubmitEditing={val => this.setState({ val: this.state.zip })}
          />
        </View>
        <View style={styles.textInputDiv}>
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            keyboardType="number-pad"
            onChangeText={val => this.setState({ val: this.state.phone })}
            onSubmitEditing={val => this.setState({ val: this.state.phone })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonTouch}
            onPress={this.onButtonClick}
          >
            <Text style={styles.addTCart}>PROCESS To PAYMENT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  foodImageSection: {
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  foodImage: {
    width: 230,
    height: 200
  },
  textInputDiv: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  textInput: {
    height: 50,
    width: 250,
    borderRadius: 4,
    backgroundColor: "#F6F1F1",
    textAlign: "center"
  },
  priceSection: {
    alignItems: "center",
    justifyContent: "center",
    top: 20
  },
  priceValue: {
    fontSize: 23,
    color: "#10D731"
  },
  descSection: {
    top: 40,
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
  },
  counter: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 80
  },
  counterValue: {
    textAlign: "center",
    fontSize: 18,
    width: 180,
    color: "black"
  },
  minusButton: {
    color: "black",
    fontSize: 38
  },
  plusButton: {
    color: "black",
    fontSize: 28
  },
  counterButton: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
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
