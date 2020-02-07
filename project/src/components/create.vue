<template>
    <div>
        <h1>Enter user's details</h1>

        <form >
            <div class="form-group">
                <label >name:</label>
                <input type="email" class="form-control" v-model="user.name">
            </div>

            <div class="form-group">
                <label >Email address:</label>
                <input type="email" class="form-control" v-model="user.email">
            </div>
            <div class="form-group">
                <label >Password:</label>
                <input type="password" class="form-control" v-model="user.password">
            </div>

            <div class="form-group">
                <label > Confirm Password:</label>
                <input type="password" class="form-control" v-model="user.confirmPass">
            </div>

            <button type="button" @click="create" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {


        data(){

            return {
                user:{
                    name:'',
                    email:'',
                    password:'',

                    confirmPass:'',

                }

            }
        },

        methods:{

            create(){

                if(!this.validate()){
                    alert("Please enter valid data")

                    return;
                }

                axios.post('http://vue.parthrai.ca/user/create',this.user).then(response =>{

                    alert(response.data)
                    this.reset()

                })




            },

            validate(){

                if(this.user.name == ""){
                    return false;
                }

                if(this.user.email == ""){
                    return false;
                }

                if(this.user.password == ""){
                    return false;
                }

                if(this.user.confirmPass == ""){
                    return false;
                }

                if(this.user.password != this.user.confirmPass){

                    return false
                }

                return true;

            },

            reset(){

                this.user.name=""
                this.user.email=""
                this.user.password=""
                this.user.confirmPass=""

            }


        }
    }
</script>

