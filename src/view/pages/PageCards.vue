<template>
    <div class="page__main main">
        <cards-list/>
        <div class="main__buttons buttons">
            <button-navigation>Previous</button-navigation>
            <button-navigation>Next</button-navigation>
        </div>
    </div>
</template>

<script>
    import CardsList from "../widgets/CardsList.vue";
    import ButtonNavigation from "../atoms/ButtonNavigation.vue";

    const componentsList = {};
    componentsList[CardsList.name] = CardsList;
    componentsList[ButtonNavigation.name] = ButtonNavigation;

    export default {
        name: "PageCards",
        components: componentsList,
        data() {
            return {
                pageCount: 1,
                maxCount: 0,
            }
        },
        mounted() {

        }
    }
</script>