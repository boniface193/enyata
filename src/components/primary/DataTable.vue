<template>
    <div>
        <div class="table-space">
            <div class="table-title">
                {{ tableName }}
            </div>

            <div class="d-flex justify-content-center mt-5" v-if="items.length == 0">
                <div class="spinner-grow" role="status">
                </div>
            </div>

            <div v-else>

                <div class="">
                    <div class="card table-body-2 p-3"
                        v-for="(item, index3) in sortedItems" :key="index3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <div v-for="(header, index) in headers" :key="index">
                            <span class="thead-color">{{header.title}}: </span>
                            <span class="tbody-color">{{item[`${header.value}`]}}</span>
                        </div>
                        <!-- <div>
                            <span class="thead-color">Release Date: </span>
                            <span class="tbody-color">9/18/20</span>
                        </div>
                        <div>
                            <span class="thead-color">Director: </span>
                            <span class="tbody-color">Esther Howard</span>
                        </div>
                        <div>
                            <span class="thead-color">Producer: </span>
                            <span class="tbody-color">Paracetamol</span>
                        </div>
                        <div>
                            <span class="thead-color">Episode ID: </span>
                            <span class="tbody-color">4</span>
                        </div>
                        <div>
                            <span class="thead-color">Character: </span>
                            <span class="tbody-color">https://swapi.dev/api/people</span>
                        </div> -->
                    </div>
                </div>

                <div class="table-body">
                    <table class="table">
                        <thead>
                            <tr class="thead-color">
                                <th scope="col"><input class="form-check-input" type="checkbox" id="check1"></th>
                                <th v-for="(header, index) in headers" :key="index">
                                    {{header.title}}
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(item, index3) in sortedItems" :key="index3" class="tbody-color">
                                <td><input class="form-check-input" type="checkbox" id="check1"></td>
                                <td v-for="(header, index2) in headers" :key="`${index2}${item[`${itemKey}`]}`">
                                    {{item[`${header.value}`]}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        "items",
        "headers",
        // "action",
        "select",
        // "actions",
        // "paginationLength",
        // "page",
        // "itemPerPage",
        "tableName",
        "itemKey",
        "statusKey",
    ],

    data() {
        return {
            selectAll: false,
            selected: [],
        }
    },

    computed: {
        sortedItems: function () {
            return this.items;
        }
    },

    methods: {
        // selectRow() {
        //     this.selected = [];
        //     if (this.selectAll) {
        //         for (let i in this.items) {
        //             this.selected.push(this.items[i][`${this.itemKey}`]);
        //         }
        //     }
        //     this.emitSelectedRow();
        // },
        // emitSelectedRow() {
        //     this.$emit("selectedRow", this.selected);
        // },
    },

    created() {
        console.log("sortedItems", this.sortedItems)
    }

}
</script>

<style lang="scss" scoped>
.table-space {
    margin: 75px 0 24px 0;

    .table-title {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #A4A7B7;
    }

    .table-body {
        width: 90%;
        background: #FFFFFF;
        border: 1px solid rgba(164, 167, 183, 0.4);
        border-radius: 4px;
        margin: 31px 0 0 0;
        padding: 0 0 25px 0;
    }

    .thead-color {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        background: linear-gradient(0deg, #A4A7B7, #A4A7B7),
            linear-gradient(0deg, #303B54, #303B54);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    .tbody-color {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        background: linear-gradient(0deg, #434854, #434854),
            linear-gradient(0deg, #303B54, #303B54);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    td {
        padding: 18px 8px;
    }
    tbody,tr:hover {
        // background: #FFFFFF;
        box-shadow: 0px 0px 30px rgba(13, 47, 161, 0.07);
        border-radius: 4px;
        cursor: pointer;
    }

    th {
        padding: 18px 8px;
    }



    @media (max-width: 1035px) {
        .thead-color {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
        }
    
        .tbody-color {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
        }
    }

    @media (max-width: 766px) {
        .table-body{
            display: none;
        }
        .table-body-2 {
                display: block;
                margin: 31px 0 0 0;
                width: 310px;
            }
    }
    @media (min-width: 767px) {
        .table-body-2 {
            display: none !important;
        }
    }
}
</style>