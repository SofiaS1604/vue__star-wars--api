<template>
    <div class="main__cards" v-if="this.result">
        <h1 v-for="item in this.result">{{item.name}}</h1>
    </div>
</template>

<script>
    import axios from "axios";
    import MyCard from "../templates/MyCard.vue";

    export default {
        name: "CardsList",
        components: {MyCard},
        data() {
            return {
                result: null,
                pageCount: 1,
            }
        },
        methods: {

        },
        mounted() {
            this.pageCount = this.$route.query.page;
            axios
                .get(`https://swapi.dev/api${this.$route.path}?page=${this.pageCount}`)
                .then(response => (this.result = response.data.results));

            console.log(this.result);
        },
    }
</script>