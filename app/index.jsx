import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

const NeonText = ({ children, delay = 0, font = "Audiowide" }) => {
  return (
    <Animatable.View
      animation="bounceIn"
      duration={1200}
      delay={delay}
      style={{ alignItems: "center" }}
    >
      <Text
        style={{
          fontSize: 38,
          //fontWeight: "bold",
          textAlign: "center",
          fontFamily: font,
          color: "#ffffff",

          // 🌈 Triple Neon Glow for High Visibility
          textShadowColor: "#4dd0ff", // Outer blue glow
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 26,

          // Extra purple glow
          shadowColor: "#c44dff",
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 10,

          // Inner pink glow
          textShadowRadius: 35,
          textShadowColor: "#ff4dd9",

          // ⭐ White-pink outline stroke (super clean)

          letterSpacing: 2,
        }}
      >
        {children}
      </Text>

      {/* ⭐ Blinking Underline */}
      <Animatable.View
        animation="pulse"
        iterationCount="infinite"
        easing="ease-in-out"
        style={{
          height: 3,
          width: "70%",
          backgroundColor: "#ffffff",
          marginTop: 4,
          borderRadius: 20,
        }}
      />
    </Animatable.View>
  );
};

const SubNeonText = ({ delay = 0 }) => {
  return (
    <View
      style={{
        alignSelf: "flex-end",
        marginRight: 20,
        marginTop: 12,
      }}
    >
      {/* Line 1: Powered by */}
      <Animatable.Text
        animation="fadeInRight"
        duration={800}
        delay={delay}
        style={{
          fontSize: 12,
          color: "#ffffff",
          opacity: 0.85,
          textAlign: "center",

          // soft neon glow
          textShadowColor: "#ffb3e6",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 6,

          fontFamily: "NewRocker",
          letterSpacing: 1,
        }}
      >
        Powered by
      </Animatable.Text>

      {/* Line 2: IndolankaMatrimony.com */}
      <Animatable.Text
        animation="fadeInUp"
        duration={900}
        delay={delay + 200}
        style={{
          fontSize: 13,
          color: "#ffffff",
          opacity: 0.95,
          textAlign: "right",

          // neon highlight
          textShadowColor: "#ff99dd",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 8,

          fontFamily: "NewRocker",
          letterSpacing: 1,
        }}
      >
        Indolankamatrimony.com
      </Animatable.Text>
    </View>
  );
};

const launch = () => {
  const backgroundRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      Promise.all([
        backgroundRef.current?.fadeOut(500),
        logoRef.current?.fadeOut(500),
      ]).then(() => {
        router.replace("/welcome");
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1">
      {/* 🌈 BEAUTIFUL ROSE GRADIENT BACKGROUND */}
      <LinearGradient
        colors={["#e41f53", "#ff6fb9", "#e41f53"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />

      <Animatable.View
        animation="fadeIn"
        duration={1000}
        //className="w-full h-full bg-[#e41f53]"
        style={{ position: "absolute", width: "100%", height: "100%" }}
        ref={backgroundRef}
      />

      <View className="absolute inset-0 justify-center items-center">
        {/* LOGO */}
        <Animatable.Image
          animation="zoomIn"
          duration={1300}
          source={require("../assets/images/logo.png")}
          style={{
            width: 260,
            height: 180,
            borderRadius: 90,
            //borderWidth: 3,
            resizeMode: "contain",
          }}
          ref={logoRef}
        />

        {/* 🔥 INDOLANKA */}
        <NeonText delay={650} font="Nosifer">
          INDOLANKA
        </NeonText>

        {/* 🔥 MATRIMONY */}
        <NeonText delay={900} font="RubikDoodleShadow">
          MATRIMONY
        </NeonText>

        {/* ⭐ Subtitle Right-Aligned */}
        <SubNeonText delay={1200}>
          Powered by indolankamatrimony.com
        </SubNeonText>
      </View>
    </View>
  );
};

export default launch;
