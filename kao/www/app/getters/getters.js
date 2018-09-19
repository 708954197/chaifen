export default {
    yiwan:function (state) {
        return state.todos.filter(function (item) {
            return item.done == true
        })
    },
    weiwan:function (state) {
        return state.todos.filter(function (item) {
            return item.done == false
        })
    }
}