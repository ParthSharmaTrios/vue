<template>

    <div>

        <b-list-group>
            <b-list-group-item v-for="(user,index) in users" :key="index">
               {{user.name}}
            </b-list-group-item>
        </b-list-group>

    </div>

</template>

<script>

    const axios = require('axios');
    export default{

        data(){
           return {
                users:[]
           }
        },

        created() {
            this.fetchUsers()
        },

        methods:{

            fetchUsers(){


                axios.get('http://jsonplaceholder.typicode.com/users')
                    .then(response => {
                        this.users = response.data
                    })
            }

        }
    }
</script>