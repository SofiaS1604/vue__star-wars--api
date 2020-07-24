<template>
    <header class="page__header header">
        <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG10.png" alt="" class="header__logo"/>
        <nav class="header__navigation navigation">
            <ul class="navigation__container">
                <li class="navigation__list">
                    <navigation-link url="/">Main</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/people/?page=1">Characters</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/films/?page=1">Films</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/species/?page=1">Species</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/starships/?page=1">Starships</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/vehicles/?page=1">Vehicles</navigation-link>
                </li>
                <li class="navigation__list">
                    <navigation-link url="/#/planets/?page=1">Planets</navigation-link>
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