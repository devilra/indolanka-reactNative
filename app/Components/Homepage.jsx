import { MotiText, MotiView } from "moti";
import React from "react";
import { View } from "react-native";

const Homepage = () => {
  return (
    <View className="flex-1 items-center justify-center">
      {/* OUTER ZOOM + FADE CONTAINER */}
      <MotiView
        from={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 13,
          stiffness: 120,
          delay: 500,
        }}
        style={{ alignItems: "center" }}
      >
        {/* SMALL TOP TEXT — Tamil */}
        <MotiText
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 600 }}
          style={{
            fontFamily: "Nosifer",
            fontSize: 50,

            color: "white",
          }}
        >
          INDOLANKA
        </MotiText>

        {/* BIG MAIN LOGO TEXT — Jodi */}
        <MotiText
          from={{ opacity: 0, translateX: -200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 800, delay: 500, type: "timing" }}
          style={{
            fontFamily: "RubikDoodleShadow",
            fontSize: 55,

            color: "white",
          }}
        >
          MATRIMONY
        </MotiText>

        {/* BOTTOM SMALL TEXT */}
        <MotiText
          from={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 800, delay: 500, type: "timing" }}
          style={{
            fontFamily: "Audiowide",
            fontSize: 13,
            color: "white",
            marginTop: 20,
            marginLeft: 150,
            opacity: 0.5,
          }}
        >
          by Indolankamatrimony.com
        </MotiText>
      </MotiView>
    </View>
  );
};

export default Homepage;
