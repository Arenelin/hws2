import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a, b) => {
                return action.payload === 'up'
                    ? a.name > b.name ? 1 : -1
                    : a.name < b.name ? 1 : -1
            })
        }
        case 'check': {
            return state.filter(u => u.age >= 18)
        }
        default:
            return state
    }
}
