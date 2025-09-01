import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function OurServicesScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#eeeeeeff', dark: '#292a2bff' }}
            headerImage={
                <Image
                    source={require('@/assets/images/serviteca_2.png')}
                    style={styles.Logo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">¿Cuáles son nuestros servicios?</ThemedText>
            </ThemedView>
            <ThemedView>
                <ThemedText type="default">
                    Ofrecemos una amplia gama de servicios automotrices, incluyendo:
                </ThemedText>
            </ThemedView>
            <ThemedView>
                <Collapsible title="Mantenimiento Preventivo">
                    <ThemedText type="default">
                        Realizamos revisiones periódicas y mantenimiento preventivo para asegurar el óptimo funcionamiento de su vehículo.
                    </ThemedText>
                </Collapsible>
                <Collapsible title="Reparación de Vehículos">
                    <ThemedText type='default'>
                        Contamos con un equipo de expertos en la reparación de todo tipo de vehículos, utilizando herramientas y técnicas de vanguardia.
                    </ThemedText>
                </Collapsible>
                <Collapsible title="Venta de Repuestos">
                    <ThemedText type='default'>
                        Ofrecemos una amplia variedad de repuestos y accesorios para su vehículo, garantizando calidad y durabilidad.
                    </ThemedText>
                </Collapsible>
                <Collapsible title="Asesoría Personalizada">
                    <ThemedText type='default'>
                        Nuestro equipo está disponible para brindarle asesoría personalizada y ayudarle a tomar las mejores decisiones para su vehículo.
                    </ThemedText>
                </Collapsible>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    Logo: {
        height: 200,
        width: '100%',
        bottom: 0,
        left: 0,       
        marginTop: 50,
        borderRadius: 10,
    },
});
