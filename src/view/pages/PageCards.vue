<template>
    <div class="page__main main">
        <div class="main__cards">

        </div>
        <div class="main__buttons buttons">
            <button class="buttons__next"></button>
            <button class="buttons__previous"></button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "PageCards",
        data() {
            return{
                result: null,
                pageCount: 1,
            }
        },
        methods: {
            async pageGet(){
                this.pageCount = this.$route.query.page;
                return new Promise(async resolve => {
                    let res =  axios
                        .get(`https://swapi.dev/api${this.$route.path}?page=${this.pageCount}`);
                    this.result = (await res).data;
                    resolve()
                });
            },
        },
        mounted: function() {
            this.pageGet()
        },
    }
</script>