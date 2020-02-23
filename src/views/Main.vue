<template>
    <a-layout id="ms-main" :style="{ width: width, height: height }">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <div class="logo">
                <span>仓库管理系统</span>
            </div>
            <a-menu
                theme="dark"
                mode="inline"
                :defaultSelectedKeys="['1']"
                @click="menuClick"
            >
                <template v-for="item in menuList">
                    <a-menu-item v-if="!item.children" :key="item.key">
                        <a-icon :type="item.icon ? item.icon : 'pie-chart'" />
                        <span>{{ item.title }}</span>
                    </a-menu-item>
                    <a-sub-menu v-else :key="item.key">
                        <span slot="title"
                            ><a-icon
                                :type="item.icon ? item.icon : 'pie-chart'"
                            /><span>{{ item.title }}</span></span
                        >
                        <template v-for="item0 in item.children">
                            <a-menu-item :key="item0.key">
                                <a-icon
                                    :type="
                                        item0.icon ? item0.icon : 'pie-chart'
                                    "
                                />
                                <span>{{ item0.title }}</span></a-menu-item
                            >
                        </template>
                    </a-sub-menu>
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="() => (collapsed = !collapsed)"
                />
            </a-layout-header>
            <a-layout-content
                :style="{
                    margin: '24px 16px',
                    padding: '24px',
                    background: '#fff',
                    minHeight: '280px'
                }"
            >
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
export default {
    data() {
        return {
            width: document.body.offsetWidth + "px",
            height: document.body.offsetHeight + "px",

            collapsed: false,
            menuList: [
                {
                    key: "111",
                    icon: "home",
                    title: "首页"
                },
                {
                    key: "222",
                    title: "仓库管理",
                    icon: "appstore",
                    children: [
                        {
                            key: "222111",
                            title: "入库管理"
                        },
                        {
                            key: "222222",
                            title: "出库管理"
                        },
                        {
                            key: "222333",
                            title: "仓库盘点"
                        }
                    ]
                },
                {
                    key: "333",
                    title: "系统管理",
                    icon: "setting"
                }
            ]
        };
    },
    methods: {
        menuClick(obj) {
            console.log(obj);
            console.log(this.$router);
            this.$router.push("/" + obj.key);
        }
    },
    created() {
        // let _this = this;
        // let h = document.body.offsetHeight;
        // let w = document.body.offsetWidth;
        // _this.mainStyle.height = h + "px";
        // _this.mainStyle.width = w + "px";
    }
};
</script>

<style>
#ms-main .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#ms-main .trigger:hover {
    color: #1890ff;
}

#ms-main .logo {
    height: 32px;
    background: #66d2c8;
    margin: 16px;
    text-align: center;
    line-height: 32px;
    font-size: 20px;
}
</style>
