<template>
    <div>
        <div class="d-flex justify-content-center">
            <router-link :to="{name: route}" class="d-flex align-items-center overview" exact-active-class="bcolor">
                <div class="">
                    <div class="d-flex align-items-center btn-img">
                        <img v-if="image" src="@/assets/images/grid_small.svg" alt="" class="btnImg">
                        <div v-else class="btn-blue" :style="imgFrame"></div>
                        <div class="overview-text">{{text}}</div>
                    </div>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    props: ['text', 'imgFrame', 'image', 'route']
}
</script>

<style lang="scss" scoped>



.bcolor {
    background-color: #0A74DC !important;
    border-radius: 4px;
}

.overview {
    width: 232px;
    height: 48px;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    
    .overview:hover {
        border-color: #0a73dc44;
    }

    .overview:focus {
        border-color: #0a73dc44;
    }

    .btn-img {
        margin: 0 24px;
    }

    .btnImg {
        width: 18px;
    }

    .overview-text {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        margin: 0 19px;
    }

    .btn-blue {
        width: 17px;
        height: 16px;
        left: 51px;
        top: 230px;
        border-radius: 5px;
    }



    @media (max-width: 972px) {
        .overview-text {
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 24px;
            color: #FFFFFF;
            margin: 0 19px;
        }
    }
}
</style>