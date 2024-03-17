import React from 'react';
import {Modal, View, StyleSheet, Dimensions} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import TextField from './TextField';
const {height} = Dimensions.get('window');
const TextFieldModal = ({show, hide, addTodo}) => {
  const theme = useTheme();
  const [text, setText] = React.useState('');
  return (
    <Modal
      transparent
      visible={show}
      onRequestClose={hide}
      animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: '#00000060',
        }}>
        <View
          style={{
            backgroundColor: theme.colors.background,
            minHeight: height * 0.3,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            padding: 8,
          }}>
          <View
            style={{
              backgroundColor: theme.colors.outline,
              height: 6,
              width: 64,
              marginBottom: 40,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          />
          <TextField
            label="Todo"
            text={text}
            setText={setText}
            multiline={true}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Button
              icon="check"
              mode="contained"
              disabled={!text.length}
              onPress={() => {
                addTodo(text);
                hide(false);
                setText('');
              }}>
              Save
            </Button>
            <Button
              icon={!text.length ? '' : 'close'}
              mode="contained"
              onPress={!text.length ? () => hide(false) : () => setText('')}>
              {!text.length ? 'Back' : 'Clear'}
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default TextFieldModal;
