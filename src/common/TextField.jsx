import * as React from 'react';
import {TextInput} from 'react-native-paper';

const TextField = ({label, text, setText, multiline = false}) => {
  return (
    <TextInput
      multiline={multiline}
      label={label}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default TextField;
