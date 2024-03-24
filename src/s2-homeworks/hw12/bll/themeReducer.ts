const initState = {
    themeId: 1,
}

type InitialStateType = typeof initState

type ChangeThemeType = {
    type:'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: ChangeThemeType): InitialStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeType => ({ type: 'SET_THEME_ID', id }) // fix any
