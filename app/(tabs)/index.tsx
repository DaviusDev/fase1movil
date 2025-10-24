import * as Haptics from "expo-haptics";
import { StyleSheet, TouchableOpacity } from "react-native";

import { router } from "expo-router";

import { HelloWave } from "@/components/HelloWave";

import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <HelloWave />
        <Text style={styles.title}>Bienvenido a Full Autos SAS</Text>

        <Text style={styles.subtitle}>Tu serviteca de confianza</Text>
        <Text style={styles.text}>Ingresa como usuario por acá:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Haptics.selectionAsync();
            Alert.alert("Próximamente");
          }}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <Text style={styles.text}>¿Aún no tienes una cuenta? Regístrate: </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Haptics.selectionAsync();
            Alert.alert("Próximamente");
          }}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>
            Estás interesado en hacer parte de nuestro equipo?
          </Text>
          <Text style={styles.text}>
            Estamos activamente contratando personal para todas nuestras áreas.
            Sí te encuentras interesado, no dudes en contactarnos a través de
            nuestro correo electrónico O nuestra plataforma de aspirantes.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/jobs")}
        >
          <Text style={styles.buttonText}>Vacantes</Text>
        </TouchableOpacity>

        <Image
          source={require("@/assets/images/serviteca_2.png")}
          style={{
            width: "100%",
            height: 200,
            marginTop: 20,
            borderRadius: 10,
          }}
        ></Image>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 12,
    color: "#34495e",
  },
  text: {
    fontSize: 14,
    fontWeight: "normal",
    marginBottom: 8,
    color: "#7f8c8d",
  },
  button: {
    backgroundColor: "#157784",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10, // 🔹 bordes redondeados
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondary: {
    backgroundColor: "#0e4e52", // variante para otro botón
  },
});
