<template>
    <div @click="this.routerPage" class="cards__block" :style="{'background-image': `url(${this.image})`}">
        <div class="cards__title">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyCard",
        props: ["cardItem", "cardImage"],
        data() {
            return {
                image: null,
                countPage: +this.$route.query.page - 1,
                imageStarships: [
                    null, null, 5, 9, 10, 11, 12, 13, 15, null, 21, 22,
                    23, 27, 28, 29, 31, null, 39, 40, 41, 43, 47, 48
                ],
                imageVehicles: [
                    4, 6, 7, 8, 14, 16, 18, 19, 20, 24,
                    25, 26, 30, 33, 34, 35, 36, 37, 38, 42
                ],
                dataItem: {},
                idImage: null
            }
        },
        mounted() {
            this.idImage = this.countPage * 10 + this.cardImage + 1;
            let nameUrl = this.$route.path === '/people/' ? '/characters/' : this.$route.path;

            if (this.idImage >= 17 && nameUrl === '/characters/')
                this.idImage += 1;

            if (nameUrl === '/starships/')
                this.idImage = !this.imageStarships[this.idImage - 1] ? 'placeholder' : this.imageStarships[this.idImage - 1];

            if (nameUrl === '/vehicles/')
                this.idImage = !this.imageVehicles[this.idImage - 1] ? 'placeholder' : this.imageVehicles[this.idImage - 1];

            if (nameUrl === '/planets/' && (this.idImage === 1 || this.idImage === 20 || this.idImage > 21))
                this.idImage = 'placeholder';

            if (this.idImage === 'placeholder')
                nameUrl = '/';

            this.image = `https://starwars-visualguide.com/assets/img${nameUrl}${this.idImage}.jpg`;

            for (let item in this.cardItem) {
                if (typeof this.cardItem[item] !== 'object' && item !== 'url' && item !== 'homeworld')
                    this.dataItem[item] = this.cardItem[item]
            }
        },
        methods: {
            routerPage() {
                this.$router.push({
                    name: `${this.$route.path.split('/')[1]}Id`,
                    params: {
                        dataInfo: this.dataItem,
                        dataImage: this.image,
                        id: this.idImage
                    }
                })
            }
        }
    }
</script>