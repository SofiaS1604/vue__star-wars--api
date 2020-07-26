<template>
    <div class="page__main main">
        <div class="main__card card">
            <div class="card__image" :style="{'background-image': `url(${this.cardImage})`}"></div>
            <div class="card__container"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageInfo",
        props: ["dataInfo", "dataImage"],
        data() {
            return {
                cardInfo: null,
                cardImage: null
            }
        },
        mounted() {
            this.cardImage = this.dataImage;
            for (let info in this.dataInfo) {
                let el = `<div class="card__info">${info[0].toUpperCase() + info.slice(1)}: ${this.dataInfo[info]}</div>`;
                this.$el.querySelector('.card__container').innerHTML += el;
            }
        }
    }
</script>