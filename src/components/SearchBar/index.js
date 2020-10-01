import React, { useState } from 'react'
import { string, func, bool, number } from 'prop-types'
import { Image } from 'react-native'
import { images, colors } from '../../theme'

import {
    Container,
    ButtonIcon,
    WrapperInput,
    Input
} from './styles'

import constants from '../../utils/constants'
import { styles } from '../Header/styles'

const SearchBar = ({
    onPress,
    onChangeText,
    value,
    placeholder,
    placeholderTextColor,
    autoCapitalize,
    autoCorrect,
    keyboardType,
    returnKeyType,
    editable,
}) => {

    const [allowSearch, setAllowSearch] = useState(true)

    const _onChangeText = text => {

        onChangeText(text)

        if (text.length >= 3)
            return setAllowSearch(false)

        setAllowSearch(true)
    }

    return (
        <Container>
            <WrapperInput>
                <Input
                    onChangeText={_onChangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    editable={editable}
                />
            </WrapperInput>
            <ButtonIcon disabled={allowSearch} onPress={onPress}>
                <Image
                    style={styles.img}
                    source={images.search}
                    tintColor={allowSearch ? colors.global.lightGray : colors.global.blue}
                />
            </ButtonIcon>
        </Container>
    )
}

SearchBar.propTypes = {
    onPress: func.isRequired,
    onChangeText: func.isRequired,
    value: string.isRequired,
    placeholder: string.isRequired,
    placeholderTextColor: string,
    autoCapitalize: string,
    autoCorrect: bool,
    keyboardType: string,
    returnKeyType: string,
    editable: bool,
}

SearchBar.defaultProps = {
    placeholderTextColor: '#aaa',
    placeholder: constants.app.search_bar.placeholder,
    autoCapitalize: 'none',
    autoCorrect: false,
    keyboardType: 'default',
    returnKeyType: null,
    editable: true,
}

export default SearchBar
