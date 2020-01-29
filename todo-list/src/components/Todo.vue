<template>
    <div>
        <h1> This is my todo list</h1>

        <div class="row">
            <div class="col-lg-12">
                <input type="text" class="form-control" v-model="task"> <button @click="add"> Add </button>
            </div>
            <br><br>
            <h3>There are {{tasks.length}} items in your list</h3>


            <ul>
                <li v-for="(t,index) in tasks" :key="index" @click="remove(index)" >
                    {{t}}
                </li>
            </ul>

        </div>
    </div>

</template>

<script>
    export default{

        data(){

            return{
               task :'',
               tasks:[]
            }
        },

        methods:{

            add(){

                this.tasks.push(this.task)
                this.task = ""

            },

            remove(index){

                this.tasks.splice(index,1)

            }


        }


    }

</script>