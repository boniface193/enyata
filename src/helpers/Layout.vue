<template>
    <div>
        <div class="d-flex" style="overflow: hidden">
            <div class="col-md-3 sidebar bg-primary" id="d-none">
                <!-- dashboad starwar logo -->
                <div class="img-space text-center">
                    <img src="@/assets/images/logo.svg" class="logoImg" alt="">
                </div>

                <!-- list items to the layout -->
                <ListItem v-for="item in list" :key="item.id" :text="item.title" :class="item.spaceBottom" :image="item.image"
                    :imgFrame="item.color" :route="item.route"/>
            </div>

            <div class="col-md-9 col-12">

                <!-- navbar items -->
                <nav class="bg-nav">
                    <div class="container-fluid d-flex justify-content-between">
                        <div class="handler navbar">
                            <i class="fa-solid fa-align-left" @click="handler()"></i>
                        </div>
                        <div class="d-flex justify-content-end">
                            <div class="navbar">
                                <i class="fa-regular fa-bell"></i>
                                <span class="horizontal-rule"></span>
                                <div class="navbar">
                                    <i class="fa-solid fa-circle-user"></i>
                                    <span class="john-doe">John Doe</span>
                                </div>
                                <i class="fa-solid fa-ellipsis me-3"></i>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- view files will inject here  -->
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import ListItem from "@/components/primary/ListItem.vue"
export default {
    components: {
        ListItem
    },
    data() {
        return {
            list: [
                { color: "background-color: #A9C1FF", title: "Overview", route: "overview", spaceBottom: "space-bottom", image: true },
                { color: "background-color: #A9C1FF", title: "Starships", route: "starship" },
                { color: "background-color: #FFA9EC", title: "People", route: "people"},
                { color: "background-color: #FDFFA9", title: "Species", route: "species" },
            ]
        }
    },
    methods: {
        handler() {
            document.querySelector('#d-none').classList.toggle('d-none')
        }
    }
}
</script>

<style lang="scss" scoped>



$primary: #031434 !important;

.bg-primary {
    background: $primary;
    
    .logoImg {
        width: 107px;
    }
    .img-space {
        margin: 32px auto;
    }

    .space-bottom{
        margin-bottom: 70px;
    }
}

.fa-regular.fa-bell {
    font-size: 16px;
    height: 19.5px;
    color: #333758;
}

.fa-solid.fa-circle-user {
    color: #BDECFC;
    font-size: 30px;
    height: 30px;
}

.john-doe {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #303B54;
    margin: 0 59px 0 24px;
}

.horizontal-rule {
    width: 1px;
    height: 25px;
    left: 1176px;
    top: 27px;
    border: 1px solid #E5E5E5;
    margin: 0 32px 0 36px;
}

.fa-solid.fa-ellipsis {
    color: #C4C4C4;
}

.col-12 {
    flex: 0 0 auto;
    width: 100%;
}

.bg-nav {
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(229, 229, 229, 0.3);
    height: 64px;

    .handler {
        color: #434854;
    }               
}

@media (max-width: 766px) {
    .sidebar {
        position: relative;
        z-index: 1;
        width: 250px;
        background-color: #fff;
        height: 100vh;
    }
}

@media (min-width: 972px) {
    
    .col-md-3 {
        flex: 0 0 auto;
        width: 17.7%;
    }
    .col-md-9 {
        flex: 0 0 auto;
        width: 82.3%;
    }
    .fa-solid.fa-align-left {
        display: none;
    }
}

@media (min-width: 1203px) { 
    .bg-primary {
        height: 100vh;
    }
}

</style>