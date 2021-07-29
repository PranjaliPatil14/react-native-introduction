import React, {useState} from 'react';

import {Text, View, TouchableOpacity, TextInput, Keyboard} from 'react-native';

export const AddComment = () => {
  const [comment, setComment] = useState('');
  const [tick, showTick] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        alignItems: 'center',
      }}>
      <TextInput
        placeholder="write your comment here..."
        value={comment}
        style={{flex: 0.9}}
        onFocus={() => showTick(true)}
        onChange={val => {
          setComment(val.nativeEvent.text);
        }}
      />
      {tick && (
        <TouchableOpacity
          onPress={() => {
            showTick(false);
            Keyboard.dismiss();
          }}>
          <Text>✔️</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
