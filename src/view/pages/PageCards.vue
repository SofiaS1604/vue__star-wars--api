<template>
    <div class="page__main main">
        <cards-list v-if="this.result" :cardsListProps="this.result.results" :key="this.result.results[0].mass" :pageCount="this.pageCount"/>
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
                result: null,
            }
        },
        methods: {
            clickButton(type) {
                this.pageCount += type === 'next' && this.result.next ? 1 : 0;
                this.pageCount -= type === 'previous' && this.result.previous ? 1 : 0;

                this.$router.replace({
                    query: {
                        page: this.pageCount
                    }
                }).catch(() => {});

                setTimeout(() => {
                    this.getPeople();
                }, 500)
            },

            getPeople() {
                this.pageCount = +this.$route.query.page;
                axios
                    .get(`https://swapi.dev/api${this.$route.path}?page=${this.pageCount}`)
                    .then(response => this.result = response.data);
            }
        },
        watch: {
            pageCount: function () {
                this.getPeople();
            }
        },
        mounted() {
            this.getPeople();
        },
    }
</script>