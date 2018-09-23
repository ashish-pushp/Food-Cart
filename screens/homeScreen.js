import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    price: 12,
    value: 1
  };
  onMinusPress = () => {
    if (this.state.value != 1) {
      this.setState({ value: this.state.value - 1 });
    }
  };
  onPlusPress = () => {
    this.setState({ value: this.state.value + 1 });
  };
  onPressAddToCart = () => {
    this.props.navigation.navigate("Order");
  };
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
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 21,
                  color: "white",
                  fontFamily: "Roboto-Bold",
                  left: 45
                }}
              >
                Home
              </Text>
            </Col>
            <Col
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity style={{ left: 25 }} />
            </Col>
          </Grid>
        </View>
        <View style={styles.foodImageSection}>
          <Image
            source={require("../assests/images/burger.png")}
            style={styles.foodImage}
          />
        </View>
        <View style={styles.priceSection}>
          <Text style={styles.priceValue}>
            ${this.state.price * this.state.value}
          </Text>
        </View>
        <View style={styles.descSection}>
          <Text style={styles.descText}>
            Peanut butter, smoked bacon, chilli jam, lettuce, tomato & red onion
          </Text>
        </View>
        <View style={styles.counter}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={this.onMinusPress}
          >
            <Text style={styles.minusButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterValue}>{this.state.value}</Text>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={this.onPlusPress}
          >
            <Text style={styles.plusButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonTouch}
            onPress={this.onPressAddToCart}
          >
            <Text style={styles.addTCart}>ADD TO CART</Text>
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
    fontSize: 38
  },
  plusButton: {
    color: "black",
    fontSize: 28
  },
  counterButton: {
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 100,
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
