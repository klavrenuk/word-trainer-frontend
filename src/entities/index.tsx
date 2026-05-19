export type { User } from './user/model/types'

export { 
    fetchProfile,
    checkAuth
 } from './user/api/userApi'

export { default as ProfileUser } from './user/ui/ProfileUser'