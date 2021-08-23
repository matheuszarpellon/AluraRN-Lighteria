import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';
import { Sacola } from '../../../../components/sacola';

export const Background = () => {
  const imgSrc = require('../../../assets/images/bgimg.jpg');
  const navigation = useNavigation();
  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.imagemFundo}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/images/flecha-esquerda.png')}
              style={styles.imagemSeta}
            />
          </TouchableOpacity>
          <View style={styles.containerSacola}>
            <Sacola />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 6,
  },
  imagemFundo: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagemSeta: {
    width: 24,
    height: 24,
    marginTop: 36,
    marginLeft: 24,
  },
  containerSacola: {
    padding: 18,
  },
});
