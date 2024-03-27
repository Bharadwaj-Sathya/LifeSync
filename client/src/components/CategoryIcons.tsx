import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import COLORS from '../constants/Colors';
import style from '../assets/css/Style';
import {useNavigation} from '@react-navigation/native';

const ListCategories = ({categoryIcons}: {categoryIcons: any}) => {
  const navigation = useNavigation();

  return (
    <View style={style.categoryContainer}>
      {categoryIcons.map((item: any, index: number) => (
        <TouchableOpacity key={index} activeOpacity={0.8}>
          <View
            key={index}
            style={{
              width: 90,
              height: 90,
              borderColor: '#E0E0E0',
              borderWidth: 1,
              borderRadius: 5,
              marginLeft: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
            }}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: item?.image}}
            />
            <Text style={{fontSize: 12, fontWeight: '800', marginTop: 2}}>
              {item?.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListCategories;
//  onPress={() => navigation.navigate('Tab')}
