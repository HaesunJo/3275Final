import Vue from "vue";
import Router from "vue-router";
import Read from '@/components/Read';
import Create from '@/components/Create';
import Detail from '@/components/Detail';
import Board from '@/components/Board';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            alias: "/login",
            name: "login",
            component: () =>
                import ("./components/Login")
        },
        {
            path: "/registeredClassesList",
            name: "registered-classes-list",
            component: () =>
                import ("./components/RegisteredClassesList")
        },
        {
            path: "/classes",
            name: "classes",
            component: () =>
                import ("./components/ClassList")
        },
        {
            path: '/board',
            name: 'Board',
            component: Board
        },
        {
            path: '/read',
            name: 'Read',
            component: Read
        },
        {
            path: '/board/create/:contentId?',
            name: 'Create',
            component: Create
        },
        {
            path: '/board/detail/:contentId',
            name: 'Detail',
            component: Detail
        }
    ]
});