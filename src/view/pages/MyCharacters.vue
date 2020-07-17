<template>
    
</template>

<script>
    import axios from 'axios'
    export default {
        name: "MyCharacters",
        data() {
            return{
                result: null
            }
        },
        mounted() {
            async function getCharacters(){
                return new Promise(async resolve => {
                    let res = await axios.get('https://swapi.dev/api/people/?page=1');
                    res = await res.data;
                    resolve(await res)
                })
            }


            async function getData(){
                let res = await getCharacters();
                console.log(res);
            }

            console.log(getData())
        }
    }
</script>

<style scoped>

</style>