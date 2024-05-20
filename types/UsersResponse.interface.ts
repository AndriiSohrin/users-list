import type {UserInterface} from "~/types/User.interface";

export interface UserResponseInterface {
    users: UserInterface[]
    limit: number
    skip: number
    total: number
}