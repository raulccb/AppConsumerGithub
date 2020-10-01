import axios from 'axios'
import constants from '../utils/constants'

const apiClient = axios.create({
    baseURL: constants.github.baseUrl,
    headers: {
        Accept: 'application/json',
    }
})

export { apiClient }