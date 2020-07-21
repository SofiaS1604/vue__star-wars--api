<template>
    <div class="page__main main">
        <cards-list/>
        <div class="main__buttons buttons">
            <button-navigation @click.native="clickButton('previous')">Previous</button-navigation>
            <button-navigation @click.native="clickButton('next')">Next</button-navigation>
        </div>
    </div>
</template>

<script>
    import CardsList from "../widgets/CardsList.vue";
    import ButtonNavigation from "../atoms/ButtonNavigation.vue";
    import axios from "axios";

    const componentsList = {};
    componentsList[CardsList.name] = CardsList;
    componentsList[ButtonNavigation.name] = ButtonNavigation;

    export default {
        name: "PageCards",
        components: componentsList,
        data() {
            return {
                pageCount: 1,
                result: null
            }
        },
        methods: {
            clickButton(type) {
                console.log(2, this.result, type);
                if (type === 'next' && this.result.next) {
                    console.log(3);
                    this.pageCount++;
                }

                if (type === 'previous' && this.results.previous) {
                    console.log(4);
                    this.pageCount--;
                }

                console.log(this.pageCount)
                this.$router.replace({
                    query: {
                        page: this.pageCount
                    }
                }).catch(() => {
                })
            },

            getPeople() {
                console.log(1);
                this.pageCount = +this.$route.query.page;
                axios
                    .get(`https://swapi.dev/api${this.$route.path}?page=${this.pageCount}`)
                    .then(response => (this.result = response.data));

            }
        },
        watch: {
            pageCount: function () {
                this.getPeople()
            }
        },

        mounted() {
            this.pageCount = +this.$route.query.page;
            axios
                .get(`https://swapi.dev/api${this.$route.path}?page=${this.pageCount}`)
                .then(response => (this.result = response.data));
        }
    }
</script>