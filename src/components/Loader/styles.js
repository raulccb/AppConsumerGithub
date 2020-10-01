import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { colors } from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: 'rgba(0, 0, 0, .4)';
    align-items: center;
    justify-content: center;
`;

export const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        backgroundColor: 'white',
        height: 120,
        elevation: 5
    },
    boxTitle: {
        flex: 1.3,
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.global.darktext
    },
    subTitle: {
        fontSize: 17,
    },
    loading: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    loader: {
        flex: 1,
        paddingLeft: 10
    },
    loadingContent: {
        flex: 3,
        paddingHorizontal: 15,
    },
    modal: {
        margin: 0
    }
})
