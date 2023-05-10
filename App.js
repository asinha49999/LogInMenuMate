import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image
} from "react-native";
const appIcon = require("./assets/MenuMateLogo.png");
const appName = require("./assets/appName.png");

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      domState: "normal",
    };
  }


  render() {
    const { bookId, studentId} = this.state;
    return (
      <View style={styles.container}>
          <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.textinputContainer}>
              <TextInput
                style={styles.textinput}
                placeholder={"Username"}
                placeholderTextColor={"#140000"}
                value={bookId}
              />

            </View>
            <View style={[styles.textinputContainer, { marginTop: 25 }]}>
              <TextInput
                style={styles.textinput}
                placeholder={"Password"}
                placeholderTextColor={"#140000"}
                value={studentId}
              />
           
            </View>
            <TouchableOpacity style = {styles.button}
            onPress = {this.handleTransaction}> 
            <Text style = {styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ABC19B"
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: 200,
    height: 300,
    resizeMode: "contain",
    marginTop: 80
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    borderColor: "#140000",
    fontFamily:"Rajdhani_600SemiBold"
  },
  textinput: {
    width: "100%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#140000"
  },

  buttonText: {
    alignItems:"center",
    fontSize: 24,
    color: "#140000",
    fontFamily: "Rajdhani_600SemiBold"
  },
  button:{
    marginTop:15,
    justifyContent:"center",
    alignItems: "center",
    borderRadius:15,
    backgroundColor:"orange",
    width:"70%",
    height:55,
    fontFamily: "ArialRoundedMTBold"
  }
});
