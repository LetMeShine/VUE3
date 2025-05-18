<template>
    <div class="banner">
        <img
            :src="v"
            v-for="(v, index) in imgs"
            :key="index"
            v-show="i === n"
        />
        <div class="banner-circle">
            <ul>
                <li class="selected"></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { reactive, toRefs, inject } from "vue";
export default class Banner extends Vue {
    setup() {
        let temp = [
            require("@/assets/img/1.jpg"),
            require("@/assets/img/2.jpg"),
            require("@/assets/img/3.jpg"),
            require("@/assets/img/4.jpg"),
            require("@/assets/img/5.jpg"),
            require("@/assets/img/6.jpg"),
        ];
        console.log(temp);
        const state: any = reactive({
            n: 0,
            // imgs: inject("imgs"),
            imgs: temp,
        });
        return {
            ...toRefs(state),
        };
    }
}
</script>

