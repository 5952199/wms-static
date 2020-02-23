import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Main",
            component: resolve => require(["@/views/Main"], resolve),
            children: [
                {
                    path: "/111",
                    name: "Home",
                    component: resolve =>
                        require(["@/views/home/Home.vue"], resolve)
                },
                {
                    path: "/222111",
                    name: "222111",
                    component: resolve =>
                        require(["@/views/storehouse/inStorehouse.vue"], resolve)
                }
            ]
        }
    ]
});
