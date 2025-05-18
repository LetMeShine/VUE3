<template>
    <div class="home">
        <Banner />
    </div>
</template>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import { Options, Vue } from "vue-class-component";

@Options({
    components: { Banner },
})
export default class Home extends Vue {}
</script>
