import React from 'react';
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import COLORS from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../assets/css/Style';
import ListCategories from '../../components/CategoryIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {getImagePath} from '../../../types';

// const categoryIcons = [
//   {
//     icon: <FontAwesome6 name="weight-scale" size={25} color={COLORS.primary} />,
//     name: 'Weight Scale',
//     screen: 'OnBoardScreen',
//   },
//   {
//     icon: <FontAwesome6 name="bottle-water" size={25} color={COLORS.primary} />,
//     name: 'Hydration',
//     screen: '',
//   },
//   {
//     icon: <FontAwesome6 name="bowl-rice" size={25} color={COLORS.primary} />,
//     name: 'Meal Planner',
//     screen: '',
//   },
//   {
//     icon: <Icon name="qr-code-scanner" size={25} color={COLORS.primary} />,
//     name: 'Nutrition Scanner',
//     screen: '',
//   },
// ];

const items = [
  {
    id: '0',
    name: 'Weight Tracker',
    screen: '',
    image: 'https://cdn-icons-png.flaticon.com/128/822/822184.png',
  },
  {
    id: '1',
    name: 'Hydration',
    screen: ' ',
    image: 'https://cdn-icons-png.flaticon.com/128/8013/8013441.png',
  },
  {
    id: '2',
    name: 'Nutrition Scanner',
    screen: '',
    image: 'https://cdn-icons-png.flaticon.com/128/11592/11592106.png',
  },
  {
    id: '4',
    name: 'Meal Planner',
    screen: ' ',
    image: 'https://cdn-icons-png.flaticon.com/128/8302/8302686.png',
  },
];

const HealthWellnessScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="account-circle" size={28} color={COLORS.white} />
      </View>
      {/* <ListCategories categoryIcons={categoryIcons} /> */}

      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
      <View style={style.categoryContainer}>
        {items?.map((item, index) => (
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
        ))}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default HealthWellnessScreen;
