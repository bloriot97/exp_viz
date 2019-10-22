<template>
    <div>
        <h2>
            Result list
        </h2>
        <div v-if="loaded">
            <div
                    v-for="(resList, expName) in response.data"
                    v-bind:key="expName"
            >
                <h3>
                    {{expName}}
                </h3>
                <ul>
                    <li
                        v-for="(_, name) in resList"
                        v-bind:key="name"
                    >
                        <a :href="getResultUrl(expName, name)">
                            {{name}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ResultList",
        data() {
            return {
                loaded: false,
                response: null,
            }
        },
        mounted() {
            axios.get('results/res_list.json')
                .then((response) => {
                    this.response = response;
                    this.loaded = true;
                })
        },
        methods: {
            getResultUrl(expName, id){
                return '#/exp/' + expName + '/' + id;
            }
        }
    }
</script>

<style scoped>

</style>