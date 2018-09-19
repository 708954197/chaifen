import actions from "../actions/actions"
import getters from "../getters/getters"
import mutations from "../mutations/mutations"

export const storeObj ={
    state:{
        todos:[]
    },
    actions:{
        ...actions
    },
    getters:{
        ...getters
    },
    mutations:{
        ...mutations
    }
}