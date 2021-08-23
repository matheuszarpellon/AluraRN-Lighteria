import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Background } from './components/Background';
import { DescricaoItem } from './components/DescricaoItem';

export const DetalhesProduto = ({route}) => {
  const {imagem, estudio, itemDesc, titulo, preco, id} = route.params;

  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        id={id}
        titulo={titulo}
        preco={preco}
        imagem={imagem}
        estudio={estudio}
        itemDesc={itemDesc}
      />
    </View>
  );
};
 