import Axios, { AxiosInstance } from 'axios'

const env = require('../../../env.json')

const PRODUCTION_BASE_URL = ''

const debugBase = env.useProduction ? PRODUCTION_BASE_URL : env.baseUrl
// eslint-disable-next-line no-undef
const BASE_URL = __DEV__ ? debugBase : PRODUCTION_BASE_URL

class API {
    private axios: AxiosInstance
    private basePath: string
    private static token?: string
    private static userId?: string

    constructor(basePath: string = '') {
        this.basePath = basePath
        this.axios = Axios.create({
            baseURL: BASE_URL,
            timeout: 120000,
            headers: { 'Cache-Control': 'no-cache' }
        })

        this.axios.interceptors.request.use((request) => {
            // Add your params
            // E.g: request.headers['Authorization'] = `Bearer ${API.token}`
            return request
        })
    }

    static setToken = (token: string | undefined) => {
        API.token = token
    }

    get = (path: string, data?: any) => this.axios.get(this.basePath.concat(path), { params: data })

    post = (path: string, data: any) => this.axios.post(this.basePath.concat(path), data)
}

export default API
