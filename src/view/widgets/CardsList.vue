<template>
    <div class="main__cards">

    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "CardsList",
        data() {
            return {
                result: null,
                pageCount: 1,
            }
        },
        methods: {
            async pageGet() {
                this.pageCount = this.$route.query.page;
                return new Promise(async resolve => {
                    let res = axios
                        .get(`https://swapi.dev/api${this.$route.path}?page=${this.pageCount}`);
                    this.result = (await res).data;
                    resolve()
                });
            },
        },
        mounted: function () {
            this.pageGet()
        },
    }
</script>

<style scoped>

</style>