import { UserAPI } from "../src/datasources/user"


export interface User {
  id: number
  email: string
  token?: string
}
export interface DataSources {
  userAPI: UserAPI
}