import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
    BLACK, FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR, FONT_SIZE_LARGE, FONT_SIZE_MEDIUM, FONT_SIZE_SMALL, FONT_SIZE_X_LARGE, LIGHTERGRAY,
    LIGHTGRAY, WHITE
} from '../../../../../../../styles/styles';
import { Botao } from '../../../../components/Botao';
import { formataValor } from '../../../../utils/utils';

export const DescricaoItem = ({
  imagem,
  estudio,
  itemDesc,
  itemName,
  titulo,
  preco,
  id,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View styles={styles.headerPosicao}>
            <View>
              <Text style={styles.textoSuperior}>{estudio}</Text>
              <Text style={styles.textoMedio}>{itemName}</Text>
              <Text style={styles.textoInferior}>{titulo}</Text>
            </View>
            <Image source={imagem} style={styles.imagemItem} />
          </View>
          <View>
            <Text style={styles.textoDescricao}>{itemDesc}</Text>
          </View>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{formataValor(preco)}</Text>
            <Botao
              titulo={'COMPRAR'}
              onPress={() => navigation.push('Checkout')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },
  itemPosicao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  headerPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textoSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },
  textoMedio: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 4,
  },
  textoInferior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTGRAY,
    marginBottom: 12,
  },
  imagem: {
    width: 30,
    height: 72,
  },
  textoDescricao: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTERGRAY,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  moeda: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    marginTop: 10,
    color: BLACK,
  },
});
