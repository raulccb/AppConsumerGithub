

import React from 'react'
import * as Animatable from 'react-native-animatable'
import { styles } from './styles'

const Header = ({ children }) => (
    <Animatable.View
        delay={50}
        style={styles.header}
        useNativeDriver={true}
        animation="fadeInDown">
        {children}
    </Animatable.View>
)

export default Header
