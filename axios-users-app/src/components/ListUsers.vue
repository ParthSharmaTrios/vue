<template>

    <div>

        <div class="row">
            <div class="col-4">

                <b-list-group>
                    <b-list-group-item v-for="(user,index) in users" :key="index" @click="fillInfo(user)">
                        {{user.name}}
                    </b-list-group-item>
                </b-list-group>

            </div>

            <div class="col-8">

<!--                <UserDetails :details="info"></UserDetails>-->
            </div>
        </div>


    </div>

</template>

<script>

  import axios from 'axios'
  // import UserDetails from "./UserDetails";

    export default{

        components:{
            // UserDetails
        },

        data(){
           return {
                info:'',
                users:[]
           }
        },



       created() {

            this.fetchUsers()
        },

        beforeDestroy() {
            alert("Alert");
        },
        methods:{

            fillInfo(user){
                this.info = user

            },

            fetchUsers(){


                axios.get('http://api.test/users')
                    .then(response => {



                        this.users = response.data
                    })
            }

        }
    }
</script>