import React from 'react'

import {
    Container,
    Login,
    Avatar,
    HtmlURL,
    IconSearch,
    WrapperMiddle,
    WrapperActions,
    WrapperRight,
    BtViewProfile,
    IconAdd,
    IconRemove,
    IconCheck,
    BtAction
} from './styles'

import { images, colors } from '../../theme'


const UserGit = props => (
    <Container>
        <Avatar source={{ uri: props.item.avatar_url }} />
        <WrapperMiddle>
            <Login>{props.item.login}</Login>
            <BtViewProfile onPress={props.viewProfile.bind(this,props.item.html_url)}>
                <HtmlURL>{props.item.html_url}</HtmlURL>
                <IconSearch
                    source={images.search}
                    tintColor={colors.boxAviso.danger}
                />
            </BtViewProfile>
        </WrapperMiddle>
        <WrapperRight>

            {props.item.added ?
                    <BtAction onPress={props.removeItem.bind(this, props.item)}>
                        <IconRemove
                            source={images.clear}
                            tintColor={colors.boxAviso.danger}
                        />
                    </BtAction>
                :
                <BtAction onPress={props.addItem.bind(this, props.item)}>
                    <IconAdd
                        source={images.add}
                        tintColor={colors.boxAviso.success}
                    />
                </BtAction>
            }

        </WrapperRight>
    </Container>
)

export default UserGit