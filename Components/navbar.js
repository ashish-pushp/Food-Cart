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
import PropTypes from "prop-types";
class Navbar extends Component {
  state = {};
  render() {
    return (
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
              onPress={this.props.leftImageClicked}
            >
              <Image
                source={this.props.leftImage}
                style={{ width: 27, height: 27 }}
              />
            </TouchableOpacity>
          </Col>
          <Col
            style={{
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "center",
              width: this.props.titleWidth
            }}
          >
            <Text
              style={{
                fontSize: 21,
                color: "white",
                fontFamily: "Roboto-Bold"
              }}
            >
              {this.props.title}
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
              onPress={this.props.rightImageClicked}
            >
              <Image
                source={this.props.rightImage}
                style={{ width: 27, height: 27 }}
              />
            </TouchableOpacity>
          </Col>
        </Grid>
      </View>
    );
  }
}

export default Navbar;

Navbar.propTypes = {
  leftImageClicked: PropTypes.func.isRequired,
  rightImageClicked: PropTypes.func.isRequired,
  leftImage: PropTypes.string.isRequired,
  rightImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleWidth: PropTypes.number.isRequired,
  titleLeft: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: "#10D731",
    height: 60,
    flexDirection: "row"
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
    width: 30,
    height: 30,
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
