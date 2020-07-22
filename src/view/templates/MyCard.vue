<template>
    <div class="cards__block" :style="{'background-image': `url(${this.image})`}">
        <div class="cards__title"><slot/></div>
    </div>
</template>

<script>
    export default {
        name: "MyCard",
        props: ["cardImage"],
        data(){
            return{
                image: null
            }
        },
        mounted() {
            // console.log(this.cardImage);
            this.pageCount = +this.$route.query.page;

            let nameUrl = this.$route.path.split('/')[1] === 'people' ? '/characters/' : this.$route.path;
            this.image = `https://starwars-visualguide.com/assets/img${nameUrl}${(this.pageCount - 1) * 10 + this.cardImage + 1}.jpg`;
        }
    }
</script>