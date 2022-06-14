<template>
    <div class="b-mt">
        <Data-Table :items="overview" :headers="tableHeaders" itemKey="id" :select="false" />
    </div>
</template>

<script>
import DataTable from "@/components/primary/DataTable.vue"
export default {
    components: {
        DataTable
    },
    data() {
        return {
            overview: [],
            tableHeaders: [
                { title: 'Film Title', value: "title" },
                { title: "Release Date", value: "release_date" },
                { title: "Director", value: "director" },
                { title: "Producer", value: "producer" },
                { title: "Episode ID", value: "episode_id" },
                { title: "Character", value: "url" },
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
}
</style>