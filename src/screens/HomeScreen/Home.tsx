import { View, Button } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

import FontText from '../../components/FontText'
import tw from '../../lib/tailwind'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FontText title='Screen A' style={tw`text-lg text-red-500`} />
      <Button onPress={()=>navigation.navigate('Detail')} title='Hello'/>
    </View>
  )
}

export default Home;