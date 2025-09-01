import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';


export default function whoWeAreScreen() {
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
       <ThemedText type="title">¿Quiénes somos?</ThemedText>
    </ThemedView>
    <ThemedView>
      <ThemedText type="default">
        Somos un equipo de profesionales
         enfocados en brindar un servicio exepcional, enfocado
         en la atención al cliente.
      </ThemedText>
    </ThemedView>
    <ThemedView>
      <Collapsible title="Nuestra Historia">
      <ThemedText type="default">
        Estamos comprometidos con la mejora continua y la innovación en nuestros servicios.
        Fundada en 1990, La Serviteca ha evolucionado para convertirse en un referente en el sector automotriz,
        ofreciendo soluciones integrales y adaptadas a las necesidades de nuestros clientes.
      </ThemedText>
      </Collapsible>
      <Collapsible title="Misión">
      <ThemedText type='default'>
        Nuestra misión es proporcionar servicios de alta calidad que superen las expectativas de nuestros clientes,
        contribuyendo al desarrollo sostenible de la industria automotriz.
      </ThemedText>
      </Collapsible>
      <Collapsible title="Visión">
      <ThemedText type='default'>
        Nuestra visión es ser la empresa líder en servicios automotrices, reconocida por nuestra
        innovación, calidad y compromiso con la satisfacción del cliente.
      </ThemedText>
      </Collapsible>
      <Collapsible title="Valores">
      <ThemedText type='default'>
        Nuestros valores fundamentales son la integridad, la innovación y el compromiso con la excelencia.
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
