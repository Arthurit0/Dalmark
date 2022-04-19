import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

import { LoadingIndicator } from "../components/LoadingIndicator";

export function Tab02() {
  const [loading, setLoading] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://www.famac.ind.br/localize-a-assistencia-tecnica-famac-mais-proxima/",
        }}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      />
      {loading && <LoadingIndicator />}
    </SafeAreaView>
  );
}
