import React from 'react';
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import COLORS from '../constants/Colors';
import style from '../assets/css/Style';
import {useNavigation} from '@react-navigation/native';

const ListCategories = ({categoryIcons}: {categoryIcons: any}) => {
  const navigation = useNavigation();

  return (
    <View style={style.categoryContainer}>
      {categoryIcons.map((item: any, index: number) => (
        <TouchableOpacity key={index} activeOpacity={0.8}>
          <View style={style.iconContainer}>{item.icon}</View>
          <Text style={style.iconCategoryText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListCategories;
//  onPress={() => navigation.navigate('Tab')}
