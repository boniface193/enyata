<template>
    <div class="b-mt">
        <Data-Table tableName="People" :items="people" :headers="tableHeaders" itemKey="id" :select="false" />
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
            people: [],
            tableHeaders: [
                { title: 'Name', value: "name", link: "details" },
                { title: "Birth Year", value: "birth_year", link: "details" },
                { title: "Gender", value: "gender", link: "details" },
                { title: "Hair Color", value: "hair_color", link: "details" },
                { title: "Height", value: "height", link: "details" },
                { title: "Created", value: "created", link: "details" },
            ]
        }
    },
    created() {
       
        this.$store.dispatch('people/getPeople').then((res) => {
            this.people = res
        })
    }

}
</script>

<style lang="scss" scoped>
.b-mt {
    margin: 44px 38px 0 38px;
}
</style>