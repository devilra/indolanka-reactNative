import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { MotiText, MotiView } from "moti";
import { useEffect } from "react";
import { Image, View } from "react-native";
import logo from "../../assets/logo/logo.webp";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/email-signup");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      {/* MAIN CONTAINER */}
      <MotiView
        from={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 13,
          stiffness: 120,
          delay: 300,
        }}
        style={{ alignItems: "center" }}
      >
        {/* 🔥 TOP LOGO IMAGE */}
        <MotiView
          from={{ opacity: 0, translateY: -40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 700, delay: 300 }}
        >
          {/* Gradient Border Circle */}
          <LinearGradient
            colors={["orange", "indigo"]}
            style={{
              width: 140,
              height: 140,
              borderRadius: 140 / 2,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            {/* Inner White Circle + Image */}
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 120 / 2,
                paddingTop: 5,

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={logo}
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                  marginBottom: 10,
                  backgroundColor: "white",
                  borderRadius: 120,
                }}
              />
            </View>
          </LinearGradient>
        </MotiView>

        {/* 🔥 INDOLANKA */}
        <MotiText
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 600 }}
          style={{
            fontFamily: "Nosifer",
            fontSize: 42,
            color: "white",
            textAlign: "center",
            width: "90%",
          }}
        >
          INDOLANKA
        </MotiText>

        <MotiText
          from={{ opacity: 0, translateX: -200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 800, delay: 500, type: "timing" }}
          style={{
            fontFamily: "RubikDoodleShadow",
            fontSize: 45,
            color: "white",
            textAlign: "center",
            width: "90%",
          }}
        >
          MATRIMONY
        </MotiText>

        {/* 🔥 Sub Title */}
        <MotiText
          from={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 800, delay: 650, type: "timing" }}
          style={{
            fontFamily: "Audiowide",
            fontSize: 13,
            color: "white",
            opacity: 0.7,
            textAlign: "right",
            paddingLeft: 100,
            paddingTop: 10,
          }}
        >
          by Indolankamatrimony.com
        </MotiText>
      </MotiView>
    </View>
  );
};

export default Homepage;
