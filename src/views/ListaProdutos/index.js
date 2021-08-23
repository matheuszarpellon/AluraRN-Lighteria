import React from 'react';
import {FlatList, View} from 'react-native';
import { DATA } from '../../utils/data';
import Cabeçalho from './components/Cabeçalho';
import { Item } from './components/Produto';

const ListaProdutos = () => {
  return (
  <View style={styles.container}>
    <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Cabeçalho />}
        />
  </View>
  )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
    }
})

export default ListaProdutos;
