import {
  CoreServerConfig,
  CoreServices,
  CoreSingletonServices,
  CoreUserSession,
  JWTService
} from '@vramework/core'
import { BookService } from '../src/book.service'

export interface Config extends CoreServerConfig {}

export interface UserSession extends CoreUserSession {}

export type SingletonServices = CoreSingletonServices & {
  jwt: JWTService<UserSession>
  books: BookService
}

export interface Services extends CoreServices<SingletonServices> {}
