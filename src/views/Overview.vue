<template>
    <div class="b-mt">
        <div class="card-wrapper d-flex pb-4">
            <div class="col-md-3 b-card-space" v-for="item in list" :key="item.id">
                <Card :title="item.title" :bColor="item.bColor" />
            </div>
        </div>

        <Data-Table tableName="Films" :items="overview" :headers="tableHeaders" itemKey="id" :select="false" />
    </div>
</template>

<script>
import Card from "@/components/secondary/Card.vue"
import DataTable from "@/components/primary/DataTable.vue"
export default {
    components: {
        Card,
        DataTable
    },
    data() {
        return {
            overview: [],
            list: [
                { title: "Films", bColor: "background: #A9FFE0;" },
                { title: "Starship", bColor: "background: #FFA9EC;" },
                { title: "People", bColor: "background: #FFA9EC;" },
                { title: "Species", bColor: "background: #FDFFA9;" },
            ],

            tableHeaders: [
                { title: 'Film Title', value: "title", link: "details" }, 
                { title: "Release Date", value: "release_date", link: "details" }, 
                { title: "Director", value: "director", link: "details" }, 
                { title: "Producer", value: "producer", link: "details" }, 
                { title: "Episode ID", value: "episode_id", link: "details" }, 
                { title: "Character", value: "url", link: "details" },
            ]
        }
    },
    created() {
        this.$store.dispatch('overview/getOverview').then((res) => {
            this.overview = res
        })
    }
}
</script>

<style lang="scss" scoped>
.b-mt {
    margin: 44px 38px 0 38px;

    .b-card-space {
        margin: 0 55px 0 0;
    }

    .card-wrapper {
        overflow: auto;
    }

    .col-md-3 {
        flex: 0 0 auto;
        width: 208px;
    }
}    
</style>