export type { User, UserProfile } from './model/types'

export {
    fetchProfile,
    checkAuth,
    changePassword,
    updateProfile
} from './api/userApi'

export { STORAGE_NAME } from './constants'

export { saveUser, getUser, removeUser } from './model/userStorage'
