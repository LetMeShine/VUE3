<template>
    <div id="app">
        <router-view />
        <NavBottom />
    </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";
import NavBottom from "./views/NavBottom";

export default {
    setup() {},
    components: {
        NavBottom,
    },
};
</script>

<style>
@import "./assets/css/index.css";
</style>
<style lang="less" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

