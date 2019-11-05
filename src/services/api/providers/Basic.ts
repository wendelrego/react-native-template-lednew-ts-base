import { AxiosResponse } from 'axios'
import API from '../API'
import { CommonResponse, LoginResponse } from '../types'

class Basic extends API {
    constructor() {
        super('')
    }

    login = (
        username: string,
        password: string
    ): Promise<AxiosResponse<CommonResponse<LoginResponse>>> => this.get('/login', { username, password })
}

const BasicProvider = new Basic()
export default BasicProvider
