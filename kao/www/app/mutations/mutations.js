import * as types from "../types/types";

export default {
    [types.GETALL](state,payload){
        state.todos = payload.mapList
    },
    [types.CHANGEDONE](state,payload){
        state.todos = payload.mapList
    },
    [types.CHANGETITLE](state,payload){
        state.todos = payload.mapList
    },
    [types.DEL](state,payload){
        state.todos = payload.mapList
    },
    [types.ADD](state,payload){
        state.todos = payload.mapList
    }
}