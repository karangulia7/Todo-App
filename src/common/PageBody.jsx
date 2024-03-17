import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTheme} from 'react-native-paper';
const PageBody = ({scrollable, children, style, setIsExtended}) => {
  const theme = useTheme();
  const Container = scrollable ? ScrollView : View;
  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };
  return (
    <Container
      onScroll={onScroll}
      style={{...style, backgroundColor: theme.colors.background, flex: 1}}>
      {children}
    </Container>
  );
};
export default PageBody;
