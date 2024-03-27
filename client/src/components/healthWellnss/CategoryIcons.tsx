import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import style from '../../assets/css/Style';
import {useNavigation} from '@react-navigation/native';

const ListCategories = ({categoryIcons}: {categoryIcons: any}) => {
  const navigation = useNavigation();

  const handleCardPress = (screenName: any) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={style.container}>
      {categoryIcons.map((item: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={style.card}
          onPress={() => handleCardPress(item.screenName)}>
          <Image style={{width: 40, height: 40}} source={{uri: item?.image}} />
          <Text style={{fontSize: 12, fontWeight: '800', marginTop: 2}}>
            {item?.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListCategories;
