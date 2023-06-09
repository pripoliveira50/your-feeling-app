import React from "react";

import { Modal, View, Text, Image } from "react-native";

import Button from "@components/Button";

import success from "../../assets/success.png";
import styles from "./styles";
import { ModalSuccessProps } from "./types";
import { MODAL } from "./constants";

const ModalSuccess: React.FC<ModalSuccessProps> = ({
  isVisible,
  text,
  subText,
  onPress,
  buttonText,
}) => {
  return (
    <Modal style={styles.screenContainer} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.imgSucess}>
          <Image source={success} style={styles.stretchLogo} />
        </View>

        <Text style={styles.headerText}>{text}</Text>
        <Text style={styles.subHeaderText}>{subText}</Text>

        <View style={styles.onClosed}>
          <Button primary text={buttonText} onPress={onPress} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalSuccess;
