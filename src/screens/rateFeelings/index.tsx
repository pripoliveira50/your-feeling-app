import React, { useState, useCallback, useMemo } from "react";
import { View, Text } from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

import Header from "@components/Header";
import Button from "@components/Button";
import Rating from "@components/Rate";

import ModalSuccess from "@components/ModalSuccess";

import styles from "./styles";
import { Feelings, FeelingsNames, FeelingsTypes } from "./types";
import { MODAL, ratingFeelings, SCREEN } from "./constants";

const RateFeelings = () => {
  const { goBack, push } = useNavigation();
  const { params } = useRoute();
  const [visible, setViseble] = useState(false);
  const [rate, setRate] = useState(0);

  const onReturneAndDisableModal = useCallback(() => {
    setViseble(false);
    push("Home");
  }, [setViseble]);

  const mountText = useMemo(() => {
    const feelings: Feelings = {
      [FeelingsTypes.VOTE1]: FeelingsNames.Slinghtly,
      [FeelingsTypes.VOTE2]: FeelingsNames.ALittle,
      [FeelingsTypes.VOTE3]: FeelingsNames.Fairly,
      [FeelingsTypes.VOTE4]: FeelingsNames.Very,
      [FeelingsTypes.VOTE5]: FeelingsNames.Extremely,
    };

    return feelings[rate];
  }, [rate]);

  const renderRating = useMemo(() => {
    return ratingFeelings.map((item, index) => (
      <Rating
        key={index}
        rate={rate}
        setRate={setRate}
        valueRate={item.value}
        text={item.label}
        percent={item.percent}
      />
    ));
  }, [rate, setRate, ratingFeelings]);

  return (
    <>
      <ModalSuccess
        isVisible={visible}
        text={MODAL.title}
        subText={MODAL.description}
        buttonText={MODAL.button}
        onPress={onReturneAndDisableModal}
      />

      <Header back={"<"} onPress={goBack} />

      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={["#ffffff", "#9d8cea", "#8573d6", "#7C64E3"]}
        style={styles.container}
      >
        <Text style={styles.feelingEmoji}>{params?.emoji}</Text>
        <View style={styles.content}>
          <Text style={styles.title}>{SCREEN.title}</Text>
          <Text style={styles.feelingText}>
            {mountText} {params?.text}
          </Text>
          <Text style={styles.subTitle}>{SCREEN.description}</Text>
        </View>
        <View style={styles.contentRate}>{renderRating}</View>

        <Button
          primaryTextButton
          primary={false}
          text={SCREEN.button}
          onPress={() => {
            setViseble(true);
          }}
        />
      </LinearGradient>
    </>
  );
};

export default RateFeelings;
