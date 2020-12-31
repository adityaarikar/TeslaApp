import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import CustomButton from "./CustomButton";

const CarItem = (props) => {
  const { name, tagLine, tagLineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.images} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.subTitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <CustomButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.log("custom order was pressed");
          }}
        />

        <CustomButton
          type="secondary"
          content={"Exesting Inventory"}
          onPress={() => {
            console.log("exesting eventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "rgb(0,0,0)",
  },
  subTitle: {
    fontSize: 16,
    color: "gray",
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  btnContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
});

export default CarItem;
