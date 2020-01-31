<template>

    <div>

        <div class="row">
            <div class="col-4">

                <b-list-group>
                    <b-list-group-item v-for="(user,index) in users" :key="index" >
                        {{user.name}}
                    </b-list-group-item>
                </b-list-group>

            </div>

            <div class="col-8">
                <UserDetails msg="This is my prop"></UserDetails>
                <UserDetails msg="This is my prop2"></UserDetails>
                <UserDetails msg="This is my prop3"></UserDetails>
                <UserDetails msg="This is my prop4"></UserDetails>
            </div>
        </div>


    </div>

</template>

<script>

  import axios from 'axios'
  import UserDetails from "./UserDetails";

    export default{

        components:{
            UserDetails
        },

        data(){
           return {

                users:[]
           }
        },

        created() {
            this.fetchUsers()
        },

        methods:{
            honey(id){
                this.ids= id
            },

            fetchUsers(){


                axios.get('http://jsonplaceholder.typicode.com/users')
                    .then(response => {
                        this.users = response.data
                    })
            }

        }
    }
</script>