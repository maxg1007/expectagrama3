import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: "image1",
      dropDownHeight: 40,
    };
  }
  render() {
    let preview_images = {
      image1: require("../assets/image_1.jpg"),
      image2: require("../assets/image_2.jpg"),
      image3: require("../assets/image_3.jpg"),
      image4: require("../assets/image_4.jpg"),
      image5: require("../assets/image_5.jpg"),
      image6: require("../assets/image_6.jpg"),
      image7: require("../assets/image_7.jpg"),
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Novo Post</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            />
            <View style={{ height: RFValue(this.state.dropDownHeight) }}>
              <DropDownPicker
                items={[
                  { label: "Image1", value: "image1" },
                  { label: "Image2", value: "image2" },
                  { label: "Image3", value: "image3" },
                  { label: "Image4", value: "image4" },
                  { label: "Image5", value: "image5" },
                ]}
                defaultValue={this.state.previewImage}
                open={this.state.dropDownHeight === 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropDownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropDownHeight: 40 });
                }}
                placeholder={this.state.previewImage}
                onSelectItem={(item) => {
                  this.setState({ previewImage: item.value });
                }}
                arrowIconStyle={{ color: "white" }}
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "white",
                  color: "white",
                }}
              />
            </View>
            <TextInput
              style={styles.inputFont}
              onChangeText={(caption) => this.setState({ caption })}
              placeholder={"legenda"}
              placeholderTextColor="white"
            />
          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
  },
});
