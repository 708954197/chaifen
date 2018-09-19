import * as types from "../types/types";

export default {
    [types.GETALL](context,payload){
        $.get("/getall",function (data) {
            context.commit("GETALL",data);
        })
    },
    [types.CHANGEDONE](context,payload){
        $.get("/changdone",{id:payload.id,done:payload.done == true ? 1 : -1},function (data) {
            context.commit("CHANGEDONE",data);
        })
    },
    [types.CHANGETITLE](context,payload){
        console.log(payload)
        $.get("/changetitle",payload,function (data) {
            context.commit("CHANGETITLE",data);
        })
    }
    , [types.DEL](context,payload){
        console.log(payload)
        $.get("/del",payload,function (data) {
            context.commit("DEL",data);
        })
    }
    , [types.ADD](context,payload){
        console.log(payload)
        $.get("/add",payload,function (data) {
            context.commit("ADD",data);
        })
    }
}