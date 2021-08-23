import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONT_SIZE_SMALL, WHITE} from '../../../../styles/styles';
import {useNavigation} from '@react-navigation/native';

export const Item = ({
  titulo,
  imagem,
  estudio,
  itemDesc,
  itemName,
  preco,
  id,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() =>
        navigation.push(
          'DetalhesProduto',
          itemDesc,
          itemName,
          preco,
          id,
          titulo,
          imagem,
          estudio,
        )
      }>
      ,
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: WHITE,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  imagem: {
    height: 84,
  },
  titulo: {
    marginTop: 8,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: FONT_SIZE_SMALL,
    color: '#848486',
  },
});
