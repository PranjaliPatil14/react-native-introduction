/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Text,
  FlatList,
  RefreshControl,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import {Card} from './components/Card';
import Avatar from './assets/avatar.png';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [refreshing, setRefresnhing] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const data = [
    {title: 'first', description: 'This is description'},
    {title: 'second', description: 'This is description of second'},
    {title: 'third', description: 'This is description of second'},
    {title: 'fourth', description: 'This is description of second'},
    {title: 'fifth', description: 'This is description of second'},
  ];

  return (
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setShowProfile(!showProfile)}>
          <Image
            source={Avatar}
            style={{
              height: 50,
              width: 50,
              marginRight: 8,
            }}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 24, fontWeight: '500'}}>Hello,</Text>
        <Text style={{fontSize: 24, fontWeight: '500', color: 'purple'}}>
          Pranjali
        </Text>
      </View>
      {showProfile ? (
        <Text>Profile Page</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={() => <Card />}
          style={{paddingHorizontal: 4}}
          keyExtractor={item => item.title}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                console.log('in on refresh');
                setRefresnhing(true);
                setTimeout(() => setRefresnhing(false), 2000);
              }}
              progressBackgroundColor="white"
            />
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '900',
    color: 'purple',
  },
});

export default App;
