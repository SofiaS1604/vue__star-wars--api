<template>
    <div class="main__cards cards" v-if="this.cardsList">
        <my-card v-for="(item, index) in this.cardsList" :cardImage="index" :cardItem="item" :key="index">{{item.name ? item.name : item.title}}</my-card>
    </div>
</template>

<script>
    import MyCard from "../templates/MyCard.vue";

    const componentsList = {};
    componentsList[MyCard.name] = MyCard;

    export default {
        name: "CardsList",
        components: componentsList,
        props: ["cardsListProps"],
        data() {
            return {
                cardsList: null,
                images: [],
            }
        },
        mounted() {
            this.cardsList = this.cardsListProps;
        }
    }
</script>