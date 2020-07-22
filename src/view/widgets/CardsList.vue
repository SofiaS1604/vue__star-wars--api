<template>
    <div class="main__cards cards" v-if="this.cardsList">
        <my-card v-for="item in this.cardsList" :cardImage="item" :key="item.image">{{item.name}}</my-card>
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
            }
        },
        mounted() {
            this.cardsList = this.cardsListProps;
        }
    }
</script>