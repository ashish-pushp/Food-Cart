import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  StatusBar
} from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";
import Navbar from "../Components/navbar";

const leftImage = require("../assests/images/back.png");
const rightImage = require("../assests/images/cart.png");

export default class Order extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    price: 12,
    value: 1,
    data: "ashish"
  };
  onPressAddToCart = () => {
    this.props.navigation.navigate("Address");
  };
  onMinusPress = () => {
    if (this.state.value != 1) {
      this.setState({ value: this.state.value - 1 });
    }
  };
  onPlusPress = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <View style={styles.mainDiv}>
        <StatusBar barStyle="light-content" backgroundColor="#10D731" />
        <Navbar
          leftImage={leftImage}
          title="Order"
          rightImage={rightImage}
          rightImageClicked={() => this.props.navigation.navigate("order")}
          leftImageClicked={() => this.props.navigation.goBack()}
        />
        <View
          style={{
            backgroundColor: "transparent",
            height: 160,
            flexDirection: "row",
            top: 10,
            borderBottomColor: "black",
            elevation: 1
          }}
        >
          <Grid>
            <Col
              size={1}
              style={{
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../assests/images/burger.png")}
                style={{ width: 150, height: 110 }}
              />
            </Col>
            <Col
              size={1}
              style={{
                backgroundColor: "transparent"
              }}
            >
              <Row
                style={{
                  backgroundColor: "transparent",
                  top: 50,
                  left: 15
                }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    textAlign: "center",
                    fontWeight: "bold"
                  }}
                >
                  Wayback Burger
                </Text>
              </Row>
              <Row
                style={{
                  top: 0,
                  left: 15
                }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    color: "#10D731",
                    fontWeight: "bold"
                  }}
                >
                  ${this.state.price * this.state.value}
                </Text>
              </Row>
            </Col>
            <Col size={0.9} style={{ backgroundColor: "transparent" }}>
              <Row
                style={{
                  backgroundColor: "transparent",
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={this.onPlusPress}
                >
                  <Image
                    source={require("../assests/images/add.png")}
                    style={{
                      marginTop: 20,
                      width: 23,
                      height: 25
                    }}
                  />
                </TouchableOpacity>
              </Row>
              <Row
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={this.onMinusPress}
                >
                  <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                    {this.state.value}
                  </Text>
                </TouchableOpacity>
              </Row>
              <Row
                style={{
                  backgroundColor: "transparent",
                  alignItems: "baseline",
                  justifyContent: "center"
                }}
              >
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={this.onMinusPress}
                >
                  <Image
                    source={require("../assests/images/minus.png")}
                    style={{ marginTop: 0, width: 23, height: 23 }}
                  />
                </TouchableOpacity>
              </Row>
            </Col>
          </Grid>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            top: 40,
            flexDirection: "row"
          }}
        >
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>Total:</Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              color: "#10D731",
              left: 5
            }}
          >
            ${this.state.value * this.state.price}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonTouch}
            onPress={this.onPressAddToCart}
          >
            <Text style={styles.addTCart}>PROCESS ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    fontSize: 48,
    fontWeight: "bold"
  },
  plusButton: {
    color: "black",
    fontSize: 28
  },
  counterButton: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    textAlign: "center",
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
