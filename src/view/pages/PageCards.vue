<template>
    <div class="page__main main">
        <cards-list v-if="this.result" :cardsListProps="this.result.results" :key="this.result.results[0].mass"
                    :pageCount="this.pageCount"/>
        <div class="main__buttons buttons" v-if="this.result">
            <button-navigation :class="{'buttons__item--active': this.result.previous}" @click.native="clickButton('previous')">Previous</button-navigation>
            <button-navigation :class="{'buttons__item--active': this.result.next}" @click.native="clickButton('next')">Next</button-navigation>
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
                pageCount: +this.$route.query.page,
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
            },

            async getData() {
                return new Promise(async resolve => {
                    let res = await axios.get(`https://swapi.dev/api${this.$route.path}?page=${this.pageCount}`);
                    resolve(await res);
                });
            },

            async getPeople() {
                this.pageCount = +this.$route.query.page;
                this.result = await this.getData().then(res => this.result = res.data);
                let i = (this.pageCount - 1) * 10;

                this.result.results.forEach((el, index) => {
                    let nameUrl = this.$route.path.split('/')[1] === 'people' ? '/characters/' : this.$route.path;
                    el.i = `https://starwars-visualguide.com/assets/img${nameUrl}${i + index + 1}.jpg`;
                    console.log(this.result)
                })
            },
        },
        watch: {
            pageCount() {
                this.getPeople();
            }
        },
        mounted() {
            this.getPeople();
        },
    }
</script>