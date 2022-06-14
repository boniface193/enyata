<template>
    <div class="b-card">
        <div class="d-flex justify-content-between b-space-23">
            <span class="films">{{title}}</span>
            <div class="b-color" :style="bColor"></div>
        </div>

        <span class="b-price">200</span>
        <p class="b-para">20 More than than yesterday</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'bColor']

}
</script>

<style lang="scss" scoped>


.b-card {
    width: 208px;
    height: 130px;
    left: 310px;
    top: 108px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 24px 18px 0 18px;

    .b-color {
        width: 27px;
        height: 26px;
        left: 473px;
        top: 131px;
        border-radius: 5px;
    }

    .b-space-23 {
        margin: 0 0 23px 0;
    }

    .b-price {
        width: 33px;
        height: 24px;
        left: 328px;
        top: 179px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #434854;
    }

    .b-para {
        font-style: normal;
        font-weight: 400;
        font-size: 9px;
        color: #00992B;
    }

    .films {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #434854;


    }
}
</style>