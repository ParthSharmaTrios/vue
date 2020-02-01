<template>
    <div>

        <h1>{{details.email}}</h1>
        <h2>{{details.username}}</h2>
        <h2>{{details.address.street}}, {{details.address.zipcode}}</h2>
        <h2>{{details.website}}</h2>
    </div>
</template>
<script>


    export default {

         props:['details'],
        data(){

            return{

            }
        }
    }
</script>