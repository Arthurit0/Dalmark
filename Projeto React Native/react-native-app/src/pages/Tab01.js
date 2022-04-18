import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export function Tab01() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://www.famac.ind.br/informacoes-produto/" }}
      />
    </SafeAreaView>
  );
}
