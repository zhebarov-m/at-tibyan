import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "@/app/providers/StoreProvider/config/store.ts";

interface SidebarState {
    collapsed: boolean
}

const initialState: SidebarState = {
    collapsed: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setCollapsed: (state, action: PayloadAction<boolean>) => {
            state.collapsed = action.payload
        }
    },
})

export const { setCollapsed } = sidebarSlice.actions

export const selectCollapse = (state: RootState) => state.sidebar.collapsed

export default sidebarSlice.reducer
