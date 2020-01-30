<template>
    <div>

        <div class="container">
            <div class="row" v-if="showAlert==true" >
                <div class="col-lg-12">

                    <b-alert
                            :show="dismissCountDown"
                            dismissible
                            variant="warning"
                            @dismissed="dismissCountDown=0"
                            @dismiss-count-down="countDownChanged"
                    >
                        <p>task : {{task}} added</p>
                        <b-progress
                                variant="warning"
                                :max="dismissSecs"
                                :value="dismissCountDown"
                                height="4px"
                        ></b-progress>
                    </b-alert>

                </div>
            </div>



            <div class="row">
                <div class="col-lg-12">
                    <div class="form-inline">
                        <input type="text" class="form-control" v-model="task">
                        <button @click="add" class="btn btn-primary"> Add </button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <h1> This is my todo list</h1>
                    <b-list-group>
                        <b-list-group-item v-for="(t,index) in tasks" :key="index" @click="remove(index)">
                            {{t}}
                        </b-list-group-item>

                    </b-list-group>
                </div>
            </div>
        </div>



    </div>

</template>

<script>
    export default{

        data(){

            return{
                dismissSecs: 2,
                dismissCountDown:2,
               task :'',
               tasks:[],
                showAlert : false
            }
        },

        methods:{

            add(){

                this.tasks.push(this.task)

                this.showAlert=true

            },

            remove(index){

                this.tasks.splice(index,1)

            },

            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown

                 if(this.dismissCountDown == 0){
                   this.dismissCountDown=2
                   this.showAlert=false
                     this.task = ""


               }
            }


        }


    }

</script>