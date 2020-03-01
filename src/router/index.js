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
                        require([
                            "@/views/storehouse/storehouseIn.vue"
                        ], resolve)
                },
                {
                    path: "/222222",
                    name: "222222",
                    component: resolve =>
                        require([
                            "@/views/storehouse/storehouseOut.vue"
                        ], resolve)
                },
                {
                    path: "/222333",
                    name: "222333",
                    component: resolve =>
                        require([
                            "@/views/storehouse/storehouseCheck.vue"
                        ], resolve)
                },
                {
                    path: "/333111",
                    name: "333111",
                    component: resolve =>
                        require([
                            "@/views/setting/dictManage.vue"
                        ], resolve)
                },
                {
                    path: "/333222",
                    name: "333222",
                    component: resolve =>
                        require([
                            "@/views/setting/parameterManage.vue"
                        ], resolve)
                }
            ]
        }
    ]
});
