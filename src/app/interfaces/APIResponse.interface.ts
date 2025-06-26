
export interface APIResponse<T>{
    
    status: number
    detail: T
    message: string

}