import React from 'react';
import PageBody from './common/PageBody';
import {View} from 'react-native';
import FloatingActionButton from './common/FloatingActionButton';
import TodoList from './todo/TodoList';
import TextFieldModal from './common/TextFieldModal';
import {Text, useTheme} from 'react-native-paper';
const Main = () => {
  const theme = useTheme();
  const [showTextModal, setShowTextModal] = React.useState(false);
  const [todo, setTodo] = React.useState([]);
  const addTodo = val => {
    setTodo([...todo, val]);
  };
  const filterTodo = val => {
    setTodo(todo.filter((item, index) => index !== val));
  };
  const [isExtended, setIsExtended] = React.useState(false);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Text
        variant="headlineLarge"
        style={{alignSelf: 'center', marginVertical: 7}}>
        Todo's
      </Text>
      <PageBody scrollable={true} setIsExtended={setIsExtended}>
        <TodoList todo={todo} filter={filterTodo} />
      </PageBody>
      <FloatingActionButton
        isExtended={isExtended}
        onPress={() => setShowTextModal(!showTextModal)}
      />
      <TextFieldModal
        show={showTextModal}
        hide={setShowTextModal}
        addTodo={addTodo}
      />
    </View>
  );
};
export default Main;
