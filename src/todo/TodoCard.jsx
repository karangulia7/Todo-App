import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-paper';
const TodoCard = ({item, index, filter}) => {
  return (
    <TouchableOpacity key={index} onLongPress={() => filter(index)}>
      <Card mode="contained" style={styles.container}>
        <Card.Content>
          <Text>{item}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
export default TodoCard;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8
  },
});
