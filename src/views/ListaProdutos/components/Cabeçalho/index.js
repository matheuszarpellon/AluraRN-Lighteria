import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Sacola } from '../../../../components/sacola';
import { FONT_FAMILY_REGULAR, FONT_FAMILY_SEMI_BOLD, FONT_SIZE_MEDIUM, FONT_SIZE_XX_LARGE, GRAY } from '../../../../styles/styles';

const Cabeçalho = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <Sacola />
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  titulo: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: GRAY,
    margin: 10,
  },
  containerDescricao: {
    paddingHorizontal: 16,
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 24,
    backgroundColor: COR_DE_FUNDO,
    color: GRAY,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
  },
});

export default Cabeçalho;