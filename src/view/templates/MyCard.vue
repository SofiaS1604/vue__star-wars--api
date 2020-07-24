<template>
    <div class="cards__block" :style="{'background-image': `url(${this.image})`}">
        <div class="cards__title">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyCard",
        props: ["cardImage"],
        data() {
            return {
                image: null,
                countPage: +this.$route.query.page - 1,
                imageStarships: [null, null, 5, 9, 10, 11, 12, 13, 15, null, 21, 22, 23, 27, 28, 29, 31, null,
                    39, 40, 41, 43, 47, 48],
                imageVehicles: [4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42]
            }
        },
        mounted() {
            let idImage = this.countPage * 10 +this.cardImage + 1;
            let nameUrl = this.$route.path === '/people/' ? '/characters/' : this.$route.path;

            if(idImage >= 17 && nameUrl === '/characters/')
                idImage += 1;

            if(nameUrl === '/starships/')
                idImage = !this.imageStarships[idImage - 1] ? 'placeholder' : this.imageStarships[idImage - 1];

            if(nameUrl === '/vehicles/')
                idImage = !this.imageVehicles[idImage - 1] ? 'placeholder' : this.imageVehicles[idImage - 1];

            if(nameUrl === '/planets/' && (idImage === 1 || idImage === 20 || idImage > 21))
                idImage = 'placeholder';

            if(idImage === 'placeholder')
                nameUrl = '/';

            this.image = `https://starwars-visualguide.com/assets/img${ nameUrl }${idImage}.jpg`;
        }
    }
</script>