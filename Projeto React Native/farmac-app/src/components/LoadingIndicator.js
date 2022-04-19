import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-paper";

export function LoadingIndicator() {
  return (
    <SafeAreaView style={styles.loading}>
      <ActivityIndicator animating={true} size="large" color="#00965a" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    margin: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
