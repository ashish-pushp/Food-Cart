import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import Home from "./screens/homeScreen";
import Order from "./screens/order";
import Address from "./screens/deliveryAddress";
import Payment from "./screens/paymentScreen";
import Confirmation from "./screens/confirmationScreen";

export default (RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Order: {
    screen: Order
  },
  Address: {
    screen: Address
  },
  Payment: {
    screen: Payment
  },
  Confirmation: {
    screen: Confirmation
  }
}));
