export interface CommonResponse<T> {
    error: boolean,
    message: string,
    data: T
}

export interface LoginResponse {
    token: string
}
