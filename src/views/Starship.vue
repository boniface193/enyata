<template>
    <div class="b-mt">
        <Data-Table tableName="Starship" :items="starship" :headers="tableHeaders" itemKey="id" :select="false" />
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
            starship: [],
            tableHeaders: [
                { title: 'Name', value: "name" },
                { title: "Model", value: "model" },
                { title: "Class", value: "MGLT" },
                { title: "Passenger", value: "passengers" },
                { title: "Length", value: "length" },
                { title: "Character", value: "url" },
            ]
        }
    },
    created() {
        this.$store.dispatch('starship/getStarship').then((res) => {
            this.starship = res
        })
    }

}
</script>

<style lang="scss" scoped>
.b-mt {
    margin: 44px 38px 0 38px;
}
</style>