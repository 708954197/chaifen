<template>
    <li>
        <input type="checkbox" v-model="item.done" ref="box" @click="changedone(item)">
        <span v-if="!isShowTxt"  @dblclick="showTxt" :class="{cur :item.done}">{{item.title}}</span>
        <input type="text" v-focus v-if="isShowTxt" @blur="hideInput(item)" v-model="item.title">
        <button @click="del(item.id)">×</button>
    </li>
</template>

<script>
    export default {
        props:["item"],
        data(){
            return{
                isShowTxt:false
            }
        },
        methods:{
            showTxt(){
                this.isShowTxt = !this.isShowTxt;
            },
            changedone(item){
                this.$store.dispatch("CHANGEDONE",{
                    id:item.id,
                    done: this.$refs.box.checked
                })
            },
            hideInput(item){
                this.showTxt()
                console.log(item.id,item.title)
                this.$store.dispatch("CHANGETITLE",{
                    id:item.id,
                    title:item.title
                })
            },
            del(id){
                this.$store.dispatch("DEL",{
                    id:id,
                })
            }
        },
        directives: {
            focus: {
                // 指令的定义
                inserted: function (el) {
                    el.focus()
                }
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .cur{
        text-decoration line-through
    }
</style>