import AsyncStorage from '@react-native-community/async-storage'

/**
 * Função que insere no localStorage qualquer informação
 * @param {Object} objeto - Objeto contendo chave e valor.
 * @example <caption>Exemplo de uso.</caption>
 * storeData({ key: '@dadosLogin', value: JSON.stringify(login) })
 */
export const storeData = async (p) => {
    try {
        await AsyncStorage.setItem(p.key, p.value)
    } catch (e) {
        throw e
    }
}

/**
 * Função que retorna do localStorage qualquer informação
 * @param {String} key - Uma string contendo o nome da chave.
 * @example <caption>Exemplo de uso.</caption>
 * getData('@dadosLogin')
 */
export const getData = async (p) => {
    try {
        const value = await AsyncStorage.getItem(p)
        return value
    } catch (e) {
        throw e
    }
}

/**
 * Função que substitui o valor de algum atributo do objeto serializado
 * @param {String} key - Uma string contendo o nome da chave.
 * @param {String} attr - nome do atributo.
 * @param {String} val - valor a ser substituido.
 * @example <caption>Exemplo de uso.</caption>
 * addItemData('@dadosLogin','nome_usuario','Leo')
 */
export const addItemData = async (key, attr, val) => {

    try {

        let obj = await AsyncStorage.getItem(key)

        if (obj) {

            obj = JSON.parse(obj)
            obj[attr] = val

            await storeData({ key: key, value: JSON.stringify(obj) })
            return obj
        }

        return null

    } catch (e) {
        throw e
    }
}

/**
 * Função que remove um item do localStorage
 * @param {String} key - Uma string contendo o nome da chave.
 * @example <caption>Exemplo de uso.</caption>
 * removeItem('@dadosLogin')
 */
export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        throw e
    }
}
