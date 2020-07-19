<template>
    <a class="navigation__item" v-if="url" :href="url"><slot/></a>
</template>

<script>
    export default {
        name: "NavigationLink",
        props: {
            url: {
                type: String,
                default: null
            }
        }
    }
</script>