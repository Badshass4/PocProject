import { View } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import FontText from './FontText';
import tw from '../lib/tailwind';

const MatchCard = (props: any) => {
  const { match } = props;
  console.log('match in MatchCard - ', match.matchInfo);
  return (
    <Card style={tw`my-3`}>
      <Card.Content style={tw`px-4 py-2`}>
        <View style={tw`flex-1 flex-row justify-between`}>
          <FontText title={match.matchInfo.seriesName} style={tw`text-10px font-bold`}></FontText>
          <FontText title={match.matchInfo.matchDesc} style={tw`text-xs font-bold`}></FontText>
        </View>

        <View style={tw`flex-1 flex-row justify-between`}>
          <FontText title={match.matchInfo.team1.teamSName} style={tw`text-sm font-bold`}></FontText>
          <FontText title="VS" style={tw`text-sm font-bold`}></FontText>
          <FontText title={match.matchInfo.team2.teamSName} style={tw`text-sm font-bold`}></FontText>
        </View>
        {match.matchScore && (
          <>
            <View style={tw`flex-1 flex-row justify-between`}>
              <View style={tw`flex-1 flex-row items-center`}>
                <FontText
                  title={`${match.matchScore?.team1Score?.inngs1?.runs}/${match.matchScore?.team1Score?.inngs1?.wickets}`}
                  style={tw`text-xs font-bold mr-2`}
                />
                <FontText
                  title={match.matchScore?.team1Score?.inngs1?.overs}
                  style={tw`text-10px font-bold`}></FontText>
              </View>
              <View style={tw`flex-1 flex-row items-center justify-end`}>
                <FontText
                  title={`${match.matchScore?.team2Score?.inngs1?.runs}/${match.matchScore?.team2Score?.inngs1?.wickets}`}
                  style={tw`text-xs font-bold mr-2`}
                />
                <FontText
                  title={match.matchScore?.team2Score?.inngs1?.overs}
                  style={tw`text-10px font-bold`}></FontText>
              </View>
            </View>
            <View style={tw`flex-1 flex-row justify-between`}>
              {match.matchScore?.team1Score?.inngs2 && (
                <View style={tw`flex-1 flex-row items-center`}>
                  <FontText
                    title={`${match.matchScore?.team1Score?.inngs2?.runs}/${match.matchScore?.team1Score?.inngs2?.wickets}`}
                    style={tw`text-xs font-bold mr-2`}
                  />
                  <FontText
                    title={match.matchScore?.team1Score?.inngs2?.overs}
                    style={tw`text-10px font-bold`}></FontText>
                </View>
              )}
              {match.matchScore?.team2Score?.inngs2 && (
                <View style={tw`flex-1 flex-row items-center justify-end`}>
                  <FontText
                    title={`${match.matchScore?.team2Score?.inngs2?.runs}/${match.matchScore?.team2Score?.inngs2?.wickets}`}
                    style={tw`text-xs font-bold mr-2`}
                  />
                  <FontText
                    title={match.matchScore?.team2Score?.inngs2?.overs}
                    style={tw`text-10px font-bold`}></FontText>
                </View>
              )}
            </View>
          </>
        )}
        <FontText title={match.matchInfo.status} style={tw`text-xs font-bold text-center`}></FontText>
      </Card.Content>
    </Card>
  );
};

export default MatchCard;
