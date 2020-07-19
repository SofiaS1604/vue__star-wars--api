<template>
    
</template>

<script>
    import axios from 'axios'
    export default {
        name: "MyCharacters",
        data() {
            return{
                result: null,
                k: null
            }
        },
        methods: {
            async pageGet(){
                return new Promise(async resolve => {
                    let res =  axios
                        .get("https://swapi.dev/api/people/?page=1");
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

<style scoped>

</style>