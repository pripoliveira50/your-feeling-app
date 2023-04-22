import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { getFeelings } from "@services/api";

import Header from "@components/Header";
import Bubbles from "@components/Bubbles";

import styles from "./styles";
import { FeelingsData } from "@services/types";
import { SCREEN } from "./constants";

const Home = () => {
  const { navigate } = useNavigation();
  const [dataFeelings, setDataFeelings] = useState<FeelingsData[]>([]);

  useEffect(() => {
    getFeelings().then((response) => {
      return setDataFeelings(response);
    });
  }, [getFeelings]);

  return (
    <>
      <Header primary title={SCREEN.header} />

      <ScrollView style={styles.content}>
        <View style={styles.container}>
          {dataFeelings &&
            dataFeelings.map(({ emoji, text }) => (
              <Bubbles
                key={emoji}
                onPress={() =>
                  navigate("RateFeellings", {
                    emoji: emoji,
                    text: text,
                  })
                }
                emoji={emoji}
                description={text}
              />
            ))}
        </View>
      </ScrollView>
    </>
  );
};
export default Home;
