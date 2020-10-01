import React, { useEffect, useState } from 'react'

/**
 * Native Components
 */
import {
  Text,
  ActivityIndicator,
  Keyboard,
  Linking
} from 'react-native'

/**
 * Styled Components
 */
import {
  styles,
  WrapperHeader,
  WrapperContent,
  WrapperFooter,
  BtnLoadMore,
  Description,
  ListUser
} from './theme/styles'

/**
 * Components
 */
import Loader from './components/Loader'
import BtViewUsers from './components/BtViewUsers'
import UserGit from './components/UserGit'
import AppContainer from './components/AppContainer'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import Logo from './components/Logo'

/**
 * Helper Utils
 */
import { apiClient } from './service/api'
import constants from './utils/constants'
import { getData, storeData } from './utils/storage'

const App = () => {

  const [msgLoader, setMsgLoader] = useState(constants.app.loader.msgUser)
  const [hasUser, setHasUser] = useState(false)
  const [page, setPage] = useState(1)
  const [list, setList] = useState([])
  const [listUserAdded, setListUserAdded] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showLoader, setShowLoader] = useState(false)
  const [showLoaderCtrl, setShowLoaderCtrl] = useState(false)

  useEffect(() => {
    checkingUsers()
  }, [])

  const checkingUsers = async () => {

    setMsgLoader(constants.app.loader.msgUserExist)
    const hasData = await getData('@usersData')

    if (hasData) {

      const newData = JSON.parse(hasData)

      if (newData.length) {
        setListUserAdded(newData)
        setHasUser(true)
      }
      else
        setHasUser(false)

    } else
      setHasUser(false)

  }

  const getUsers = async () => {

    setShowLoader(true)
    Keyboard.dismiss()
    const result = await apiClient.get('/search/users', { params: { q: searchTerm } })

    if (result.data && result.data.items)
      setList(result.data.items)

    setPage(page + 1)
    setShowLoader(false)

  }

  const loadMoreData = async () => {

    setShowLoaderCtrl(true)
    const result = await apiClient.get('/search/users', { params: { q: searchTerm, page: page } })

    if (result.data && result.data.items) {
      setPage(page + 1)
      setList([...list, ...result.data.items])
    }

    setShowLoaderCtrl(false)
  }

  const addUser = (item) => {

    let newList = listUserAdded

    if (!newList.includes(item)) {

      item.added = true
      newList.push(item)
      storeData({ key: '@usersData', value: JSON.stringify(newList) })
      setListUserAdded(newList)

      const filteredItens = list.filter(p => p.login != item.login)
      setList(filteredItens)

      setHasUser(true)
    }
  }

  const removeUser = (item) => {

    const filteredItens = listUserAdded.filter(p => p.login != item.login)
    storeData({ key: '@usersData', value: JSON.stringify(filteredItens) })
    setListUserAdded(filteredItens)
    setList(filteredItens)

  }

  const openURLButton = url => Linking.openURL(url)
  const showUsersAdded = () => setList(listUserAdded)
  const handleSearchTerm = (term) => setSearchTerm(term)

  const ItemUser = ({ item }) => (
    <UserGit
      item={item}
      addItem={addUser}
      removeItem={removeUser}
      viewProfile={openURLButton}
    />
  )

  const renderFooter = () => {
    return list.length ?
      <WrapperFooter>
        <BtnLoadMore
          activeOpacity={0.9}
          onPress={loadMoreData}>
          <Description>Load More Data</Description>
          {showLoaderCtrl ?
            <ActivityIndicator
              color="white"
              style={styles.activeIndicator}
            />
            : null}
        </BtnLoadMore>
      </WrapperFooter> : null
  }

  return (
    <AppContainer>
      <Header>

        <WrapperHeader>
          <Logo />
          <BtViewUsers
            activeButton={hasUser}
            onPress={showUsersAdded}
          />
        </WrapperHeader>

        <WrapperContent>
          <Text style={styles.title}>{constants.app.title}</Text>
        </WrapperContent>

        <SearchBar
          onPress={getUsers}
          onChangeText={(text) => handleSearchTerm(text)}
          value={searchTerm}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="default"
        />
      </Header>

      <ListUser
        data={list}
        keyboardShouldPersistTaps={'handled'}
        keyExtractor={(item, index) => index.toString()}
        enableEmptySections={false}
        renderItem={ItemUser}
        ListFooterComponent={renderFooter}
      />

      <Loader visible={showLoader} msg={msgLoader} />

    </AppContainer>
  )
}

export default App
