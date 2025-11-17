import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // ✨ All your fonts here
    Nosifer: require("../assets/fonts/Nosifer-Regular.ttf"),
    Monoton: require("../assets/fonts/Monoton-Regular.ttf"),
    RubikDoodleShadow: require("../assets/fonts/RubikDoodleShadow-Regular.ttf"),
    Audiowide: require("../assets/fonts/Audiowide-Regular.ttf"),
  });

  useEffect(() => {
    // 📌 Android bottom navigation bar customization
    NavigationBar.setBackgroundColorAsync("#e60068");
    NavigationBar.setButtonStyleAsync("dark");
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e41f53" }}>
      {/* 🌟 Top StatusBar color + text color */}
      <StatusBar style="light" backgroundColor="#e41f53" />

      {/* Render screens */}
      <Slot />
    </SafeAreaView>
  );
}
