import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { metrics, fonts, colors } from '../theme';

export const Container = styled.View`
  flex: 1;
  margin: 0;
  margin: 0;
`;

export const WrapperHeader = styled.View`
 flex-direction: row;
 justify-content: space-between;
`;

export const WrapperScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
})`
    flex: 1;
    padding: 20px;
  `;

export const ListUser = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 20px 15px 25px 15px;
  background-color: #fff;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
`;

export const WrapperTop = styled.View`
  flex: 1;
  margin-bottom: 20px;
  justify-content: space-evenly;
`;

export const WrapperContent = styled.View`
   padding: 0 15px;
`;

export const Description = styled.Text`
    color: white;
    font-size: 15px;
    text-align: center;
`;

export const WrapperFooter = styled.View`
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 25px;
`;

export const BtnLoadMore = styled.TouchableOpacity`
    padding: 10px;
    background-color: ${colors.global.blue};
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const WrapperMiddle = styled.View`
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

export const WrapperBottom = styled.View``;

export const styles = StyleSheet.create({
  header: {
    width: metrics.screenWidth,
    height: 170,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white'
  },
  title: {
    ...fonts.style.h5,
    color: colors.global.darktext
  },
  activeIndicator: { marginLeft: 8 }
});
