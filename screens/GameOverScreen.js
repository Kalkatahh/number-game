import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scren: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
