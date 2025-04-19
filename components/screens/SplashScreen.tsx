import { Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../helper/navigationTypes';
import { s } from 'react-native-wind';

const SplashScreen = () => {
  type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
  }, []);

  return (
    <View style={s`flex-1 bg-white justify-center items-center relative`}>
      <Image
        source={require('../../assets/images/logoup.png')}
        style={s`w-48 h-48`}
        resizeMode="contain"
      />

      <View style={s`absolute bottom-0 w-full`}>
        <Image
          source={require('../../assets/images/image.png')}
          style={s`w-full h-28`}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SplashScreen;
