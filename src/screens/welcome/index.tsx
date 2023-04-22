import React from "react";

import { useNavigation } from "@react-navigation/native";

import { View, Text, Image } from "react-native";

import Button from "@components/Button";

import welcome from "../../assets/welcome.png";

import styles from "./styles";
import { SCREEN } from "./constants";

const Welcome = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Image source={welcome} style={styles.image} />
        <Text style={styles.title}>{SCREEN.title}</Text>
        <Button
          onPress={() => navigate("Home")}
          primaryTextButton
          text={SCREEN.button}
          primary={false}
        />
      </View>
    </>
  );
};

export default Welcome;
