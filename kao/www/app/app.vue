<template>
    <div>
        <div>
            <input type="text" v-model="txt">
            <button @click="add">增加</button>
        </div>
        <div>
            <ul>
                <li is="todoList" v-for="item in todos" :item="item"></li>
            </ul>
        </div>
        <p>
            <button @click="all">全部</button>
            <button @click="yiwan">已完</button>
            <button @click="weiwan">未完</button>
        </p>
        <p>
            全部{{this.$store.state.todos.length}}
            已完{{this.$store.getters.yiwan.length}}
            未完{{this.$store.getters.weiwan.length}}
        </p>
    </div>
</template>

<script>
    import todoList from "./components/todoList.vue"
    export default {
        components:{
            todoList
        },
        data(){
            return{
                txt:"",
                state:"all"
            }
        },
        created(){
            this.$store.dispatch("GETALL");
        },
        computed:{
          todos(){
              if (this.state == "all"){
                  return this.$store.state.todos
              }else if (this.state == "yiwan"){
                  return this.$store.getters.yiwan
              } else if (this.state == "weiwan"){
                  return this.$store.getters.weiwan
              }
          }
        },
        methods:{
            add(){
                if (this.txt == "") return
                var id = ""
                var str = "123456qwertyuiopasdfghjklzcxvbnm0963"
                for (var i = 0 ; i <8 ;i++){
                    id += [~~(Math.random()*str.length)]
                }
                this.$store.dispatch("ADD",{
                    id:id,
                    title:this.txt
                });
                this.txt = ""
            },
            all(){
                this.state = "all"
            },
            yiwan(){
                this.state = "yiwan"
            },
            weiwan(){
                this.state = "weiwan"
            },
        }
    }
</script>

<style scoped>

</style>