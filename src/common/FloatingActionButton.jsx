import React from 'react';
import {StyleSheet} from 'react-native';
import {AnimatedFAB} from 'react-native-paper';
const FloatingActionButton = ({isExtended, visible = true, onPress}) => {
  return (
    <AnimatedFAB
      icon="plus"
      label="Add Todo"
      extended={isExtended}
      onPress={onPress}
      visible={visible}
      animateFrom={'right'}
      iconMode="dynamic"
      style={[styles.fabStyle]}
    />
  );
};
export default FloatingActionButton;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});
