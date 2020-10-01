import React from 'react'
import { Container } from '../../theme/styles'
import { StatusBar } from 'react-native'

const AppContainer = ({ children }) => (
    <Container>
        <StatusBar
            translucent
            barStyle={'dark-content'}
            backgroundColor="transparent"
        />
        {children}
    </Container>
)

export default AppContainer