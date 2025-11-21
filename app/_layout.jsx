import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import "../global.css";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // ✨ All your fonts here
    Nosifer: require("../assets/fonts/Nosifer-Regular.ttf"),
    Monoton: require("../assets/fonts/Monoton-Regular.ttf"),
    RubikDoodleShadow: require("../assets/fonts/RubikDoodleShadow-Regular.ttf"),
    Audiowide: require("../assets/fonts/Audiowide-Regular.ttf"),
    NewRocker: require("../assets/fonts/NewRocker-Regular.ttf"),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
      } catch (error) {
        console.warn("Error loading assets: ", error);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!isReady || !fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        gestureEnabled: true,
        gestureDirection: "horizontal",
        statusBarStyle: "dark",
        presentation: "card",
        animationDuration: 450,
        navigationBarColor: "black",
        navigationBarHidden: false,
        //animationTypeForReplace: "push",
        //orientation: "portrait",
        // Edge swipe area
        // gestureResponseDistance: {
        //   horizontal: 50, // swipe length to trigger back
        // },
        // contentStyle: {
        //   backgroundColor: "#e41f53",
        // },
      }}
    >
      <Stack.Screen
        name="launch"
        options={{
          title: "Launch",
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: "Index",
        }}
      />
      <Stack.Screen
        name="welcome"
        options={{
          title: "Welcome",
        }}
      />
    </Stack>
  );
}
