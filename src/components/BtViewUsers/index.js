import React from 'react'
import PropTypes from 'prop-types'

import {
    TouchableOpacity,
    View,
    StyleSheet,
    Image
} from 'react-native'

import { colors, images } from '../../theme'
import styles from './styles'

/**
 * Button component that displays
 * an image instead of text.
 * 
 * @param {function} onPress - A function onpress
 * @param {Boolean} activeButton - Boolean attribute that indicates whether the button is active or not.
 * @param {Object} userStyle - User style-containing object.
 * @param {Element} iconImage - Source Image.
 * @component
 * @example <caption>Exemplo de uso.</caption>
 *   <ButtonIcon
 *      onPress={() => someFunction()}
 *      activeButton={true|false}
 *      iconImage={componentImage}
 *      userStyle={}
 *  />
 */
export default function BtViewUsers(props) {

    const _onPress = () => {
        props.onPress()
    }

    return (
        <View style={StyleSheet.flatten([styles.view, props.userStyle])}>
            <TouchableOpacity disabled={!props.activeButton} onPress={_onPress}>
                <Image
                    style={styles.img}
                    source={props.iconImage}
                    tintColor={props.activeButton ? colors.global.green : colors.global.lightGray}
                />
            </TouchableOpacity>
        </View>
    )
}

BtViewUsers.defaultProps = {
    activeButton: false,
    iconImage: images.users_added,
    userStyle: {},
}

BtViewUsers.propTypes = {
    /**
     * function onPress
     */
    onPress: PropTypes.func.isRequired,
    /**
     * Boolean attribute that indicates whether the button is active or not
     */
    activeButton: PropTypes.bool,
    /**
     * Display box summary
     */
    userStyle: PropTypes.object,
    /**
     * Component image
     */
    iconImage: Image.propTypes.source
}
