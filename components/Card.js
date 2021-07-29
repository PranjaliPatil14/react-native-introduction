import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';

import Avatar from '../assets/avatar.png';
import {AddComment} from './AddComment';

export const Card = () => {
  return (
    <View
      style={{
        marginVertical: 8,
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
        borderRadius: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 8,
        }}>
        <Image
          source={Avatar}
          style={{
            height: 20,
            width: 20,
            marginRight: 8,
          }}
        />
        <Text style={{fontWeight: '700'}}>Your Friend</Text>
      </View>
      <Image
        source={{
          uri: 'https://picsum.photos/seed/picsum/300/200',
          method: 'GET',
          headers: {Accept: 'image/*'},
        }}
        style={{height: 200, width: '100%', marginBottom: 8}}
      />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: '700', marginRight: 8}}>NickName</Text>
        <Text numberOfLines={1} ellipsizeMode="clip" style={{flexShrink: 1}}>
          This is caption. sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim
        </Text>
        <TouchableOpacity onPress={{}}>
          <Text>...</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: 'grey'}}>Comments</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{fontWeight: '500', marginRight: 8}}>someone</Text>
          <Text numberOfLines={1} ellipsizeMode="clip" style={{flexShrink: 1}}>
            This is comment. Lorem ipsum dolor sit amet, consectetur dolore
            magna aliqua. Ut enim
          </Text>
          <TouchableOpacity onPress={{}}>
            <Text>...</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{fontWeight: '500', marginRight: 8}}>someone_else</Text>
          <Text numberOfLines={1} ellipsizeMode="clip" style={{flexShrink: 1}}>
            This is another comment. Lorem ipsum dolor sit amet, consectetur
            dolore magna aliqua. Ut enim
          </Text>
          <TouchableOpacity onPress={{}}>
            <Text>...</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AddComment />
    </View>
  );
};
