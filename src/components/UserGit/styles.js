import styled from 'styled-components/native';
import { colors, metrics, fonts } from '../../theme';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: ${colors.global.grayRgb(.2)};
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #eee;
  margin: 0 15px 0 0;
`;

export const IconSearch = styled.Image`
  width: 10px;
  height: 10px;
  margin: 10px;
`;

export const IconAdd = styled.Image`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

export const IconRemove = styled.Image`
  width: 25px;
  height: 25px;
  margin: 10px;
`;

export const IconCheck = styled.Image`
  width: 10px;
  height: 10px;
  margin: 5px;
`;

export const WrapperMiddle = styled.View`
flex: 1;
`;

export const WrapperRight = styled.View`
justify-content: center;
align-items: center;
`;

export const WrapperActions = styled.View`
flex: 1;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const Login = styled.Text`
  font-size: ${fonts.moderateScale(18)}px;
  color: #666;
  text-transform: capitalize;
`;

export const HtmlURL = styled.Text`
  font-size: ${fonts.moderateScale(11)}px;
  color: ${colors.boxAviso.danger};
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Stars = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const BtViewProfile = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const BtAction = styled.TouchableOpacity``;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;

export const Loading = styled.ActivityIndicator.attrs({
    color: '#7159c1',
    size: 50,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;