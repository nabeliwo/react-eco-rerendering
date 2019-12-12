export const CHANGE_VIEW_MODE = 'CHANGE_VIEW_MODE'

export type ChangeViewModeAction = {
  type: typeof CHANGE_VIEW_MODE
  payload: {
    mode: 'show' | 'edit'
  }
}

export function changeViewMode(mode: 'show' | 'edit'): ChangeViewModeAction {
  return {
    type: CHANGE_VIEW_MODE,
    payload: { mode },
  }
}

export type ViewActionTypes = ChangeViewModeAction
