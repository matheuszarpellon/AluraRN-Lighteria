import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { LIGHTBLUE } from '../styles/styles';

export const Botao = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.texto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    botaoContainer: {
        backgroundColor: LIGHTBLUE,
        padding: 30,
        borderRadius: 6,
    },
    texto: {
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        fontSize: FONT_SIZE_MEDIUM,
        color: WHITE,
    },
});
