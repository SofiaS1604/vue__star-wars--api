<template>
    <header class="page__header header">
        <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG10.png" alt="" class="header__logo" />
        <nav class="header__navigation navigation">
            <ul class="navigation__container">
                <li class="navigation__list">
                    <navigation-link url="/">Main</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/people">Characters</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/game">Films</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/game">Species</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/game">Starships</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/game">Planets</navigation-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
    import NavigationLink from "../atoms/NavigationLink.vue";

    const componentsList = {};
    componentsList[NavigationLink.name] = NavigationLink;

    export default {
        name: "MyHeader",
        components: componentsList
    }
</script>

<style scoped>

</style>