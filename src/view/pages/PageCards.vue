<template>
    <div class="page__main main">
        <cards-list/>
        <div class="main__buttons buttons">
            <button class="buttons__next">Next</button>
            <button class="buttons__previous">Previous</button>
        </div>
    </div>
</template>

<script>
    import CardsList from "../widgets/CardsList.vue";

    const componentsList = {};
    componentsList[CardsList.name] = CardsList;

    export default {
        name: "PageCards",
        components: componentsList,
    }
</script>