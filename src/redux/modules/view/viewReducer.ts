import { ViewActionTypes, CHANGE_VIEW_MODE } from './viewAction'

export type ViewState = {
  mode: 'show' | 'edit'
}

const initialState: ViewState = {
  mode: 'show',
}

// eslint-disable-next-line default-param-last
export const viewReducer = (state: ViewState = initialState, action: ViewActionTypes): ViewState => {
  switch (action.type) {
    case CHANGE_VIEW_MODE:
      return {
        ...state,
        mode: action.payload.mode,
      }

    default:
      return state
  }
}
