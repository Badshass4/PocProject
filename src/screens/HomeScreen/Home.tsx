import { View, Button, FlatList } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigation';
import { useGetMatchesQuery } from '../../redux/api/matches.api';
import { MATCH_TYPE, TYPE } from '../../utils/constant';
import Loader from '../../components/Loader';

type HomeProps = StackNavigationProp<RootStackParamList, 'Home'>;
const Home = () => {
  const getMatches = useGetMatchesQuery(TYPE.RECENT);
  const { data, error, isLoading } = getMatches;

  const renderItem = ({ item }: { item: keyof typeof MATCH_TYPE }): JSX.Element => {
    return <Button title={item} />;
  };

  if (isLoading) return <Loader />;
  return (
    <View>
      <FlatList
        keyExtractor={(index: Number) => index.toString()}
        data={data?.filters?.matchType}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
