import React, { Component } from "react";
import { View } from "react-native";
import { colors } from "./style/index";

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View>
          <Text>Login</Text>
        </View>
      </View>
    );
  }
}
