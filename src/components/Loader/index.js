import React from 'react'
import { string, bool } from 'prop-types'
import { View, Text, ActivityIndicator } from 'react-native'
import Modal from "react-native-modal"
import { metrics, colors } from '../../theme'
import constants from '../../utils/constants'

import {
    styles,
    Container
} from './styles'

const Loader = ({ visible, msg, title }) => {
    return (
        <Modal style={styles.modal}
            useNativeDriver={true}
            visible={visible}
            deviceWidth={metrics.screenWidth}
            deviceHeight={metrics.screenHeight}
        >
            <Container>
                <View style={styles.content}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.loading}>
                        <View style={styles.loader}>
                            <ActivityIndicator color={colors.global.blue} size={constants.app.ActivityIndicator.size} />
                        </View>
                        <View style={styles.loadingContent}>
                            <Text style={styles.subTitle}>{msg}</Text>
                        </View>
                    </View>
                </View>
            </Container>
        </Modal>
    )
}

Loader.propTypes = {
    visible: bool,
    msg: string,
    title: string
}

Loader.defaultProps = {
    visible: false,
    msg: constants.app.loader.msg,
    title: constants.app.loader.title
}

export default Loader