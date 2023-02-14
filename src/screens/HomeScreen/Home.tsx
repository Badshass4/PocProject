import { View, FlatList } from 'react-native';
import React from 'react';
import MatchCard from '../../components/MatchCard';
import tw from '../../lib/tailwind';

type HomeProps = {
  seriesMatches: any;
};
const Home = (props: HomeProps): JSX.Element => {
  const { seriesMatches } = props;

  const renderItem = ({ item }: { item: any }) => {
    if (typeof item?.seriesAdWrapper === undefined) {
      return <></>;
    }
    const matchesView = item?.seriesAdWrapper?.matches.map((match: any) => {
      return <MatchCard match={match} />;
    });
    return matchesView;
  };
  return (
    <View style={tw`mx-3`}>
      <FlatList data={seriesMatches} renderItem={renderItem} />
    </View>
  );
};

export default Home;
