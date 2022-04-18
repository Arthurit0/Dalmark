import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export function Tab02() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://www.famac.ind.br/localize-a-assistencia-tecnica-famac-mais-proxima/",
        }}
      />
    </SafeAreaView>
  );
}
