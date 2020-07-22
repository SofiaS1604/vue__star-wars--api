<template>
    <div class="cards__block" :style="{'background-image': `url(${this.cardImage.image})`}">
        <div class="cards__title"><slot/></div>
    </div>
</template>

<script>
    export default {
        name: "MyCard",
        props: ["cardImage"],
        mounted() {
            console.log(Object.keys(this.cardImage), this.cardImage);
        }
    }
</script>