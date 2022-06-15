<template>
    <div class="b-mt">
        <Data-Table tableName="Species" :items="species" :headers="tableHeaders" itemKey="id" :select="false" />
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
            species: [],
            tableHeaders: [
                { title: 'Name', value: "name" },
                { title: "Classification", value: "classification" },
                { title: "Eyes Colors", value: "eye_colors" },
                { title: "Hair Color", value: "hair_colors" },
                { title: "Height", value: "average_height" },
                { title: "Created", value: "created" },
            ]
        }
    },
    created() {
        this.$store.dispatch('species/getSpecies').then((res) => {
            this.species = res
        })
    }

}
</script>

<style lang="scss" scoped>

.b-mt {
    margin: 44px 38px 0 38px;
}
</style>