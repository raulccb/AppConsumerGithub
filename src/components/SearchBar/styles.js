import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { colors } from '../../theme';

const screenWidth = Math.round(Dimensions.get('window').width)

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.global.grayRgb(.2)};
  border-radius: 50px;
  margin: 15px 10px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const WrapperIconBorder = styled.View`
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  align-items: center;
  margin-right: 10px;
  margin-left: 20px;
  padding: 15px;
`;

export const Icon = styled.Image``;

export const WrapperInput = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput.attrs({
  maxLength: 20,
})`
  font-size: ${screenWidth < 375 ? '14' : '18'}px;
  font-weight: 500;
  justify-content: center;
  color: #000;
  padding: 10px 20px;
`;
