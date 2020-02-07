import Vue from 'vue'
import Router from 'vue-router'

import List from './components/list'
import Create from './components/create'

Vue.use(Router)

export default new Router({

    routes:[
        {
            path:'/',
            name :'list',
            component:List

        },

        {
            path:'/create',
            component: Create
        }

    ]


})
