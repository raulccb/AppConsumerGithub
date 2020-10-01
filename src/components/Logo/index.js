import React from 'react'
import { Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { images } from '../../theme/index'
import styles from './styles'

const Logo = props => (
    <Animatable.View
        delay={850}
        animation="bounceIn"
        useNativeDriver={true}
        style={styles.boxLogo}>
        <Image
            style={[styles.logoImg, {
                width: props.lWidth,
                height: props.lHeight
            }]}
            source={images.logo}
        />
    </Animatable.View>
)

Logo.defaultProps = {
    lWidth: '80%',
    lHeight: '80%',
}

export default Logo
