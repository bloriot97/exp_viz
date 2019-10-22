<template>
    <div>
        <h2>
            General Information
        </h2>
            Number of files : {{generalInformation.nFiles}}
            <table class="center">
                <tr class="header">
                    <td>
                        tool
                    </td>
                    <td
                        v-for="repairType in repairTypes"
                        v-bind:key="repairType"
                        :class="repairType"
                    >
                        {{repairType}}
                    </td>
                </tr>
                <tr
                    v-for="typeCount in generalInformation.repairTypesCount"
                    v-bind:key="typeCount.tool"
                >
                    <td>
                        {{typeCount.tool}}
                    </td>
                    <td
                        v-for="repairType in repairTypes"
                        v-bind:key="repairType"
                        :class="repairType"
                    >
                        {{typeCount.count[repairType]}}
                    </td>
                </tr>
            </table>
        <h2>
            Details
        </h2>
        <table v-if="loaded" class="center">
            <tr>
                <td>
                    files ID
                </td>
                <td style="width: 250px">
                    error
                </td>
                <td
                        v-for="(_, tool) in response.data[0].results"
                        v-bind:key="tool"
                >
                    {{tool}}
                </td>
            </tr>
            <tr
                    v-for="(file_inf, file_id) in response.data"
                    v-bind:key="file_id"
            >
                <td>
                    {{file_id}}
                </td>
                <td>
                    {{getErrorSummary(file_inf.information.errors[0])}}
                </td>
                <td
                        v-for="(errors, tool) in file_inf.results"
                        v-bind:key="tool"
                        :class="getErrorCorrectionClass(file_inf.information.errors[0], errors)"
                        v-tooltip.top-center="getRepairTooltip(errors)"
                >
                    {{getErrorCount(errors)}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    import _ from 'lodash';

    export default {
        name: "ExperimentReport",
        props: {
            url: String,
        },
        data() {
            return {
                loaded: false,
                response: null,
                generalInformation: null,
                repairTypes: ['good', 'broken', 'same', 'more', 'new']
            }
        },
        mounted() {
            axios.get(this.url)
                .then((response) => {
                    this.response = response
                    this.loaded = true
                    this.generalInformation = this.computeGeneralInformation(response.data)
                })
        },
        methods: {
            computeGeneralInformation(data) {
                const tools = _.keys(data[0].results);
                const defaultTypes = _.zipObject(repairTypes, _.map(repairTypes, () => 0))

                const repairTypes =  _.map(data, function (fileInfo) {
                    return _.mapValues(fileInfo.results, (res) => this.getErrorCorrectionClass(fileInfo.information.errors[0], res))
                }.bind(this))
                const repairTypesCount = _.map(tools, function (tool) {
                    return {
                        count: _.defaults(
                            _.countBy(_.map(repairTypes, (repair) => repair[tool])),
                            defaultTypes
                        ),
                        tool: tool,
                    }
                });
                return {
                    nFiles: Object.keys(data).length,
                    repairTypesCount: repairTypesCount
                }
            },
            getErrorCount(errors){
                if (errors != null){
                    return errors.length
                } else {
                    return 'X'
                }
            },
            getErrorType(error){
                const splittedSource = error.source.split('.')
                return splittedSource[splittedSource.length - 1]
            },
            getErrorSummary(error){
                return this.getErrorType(error) + ' (l. ' + error.line + ')'
            },
            getErrorCorrectionClass(origError, newErrors){
                if (newErrors == null){
                    return 'broken'
                }

                const origErrorType = this.getErrorType(origError);
                const newErrorsType = newErrors.map(this.getErrorType);

                if (newErrorsType.length == 0) {
                    return 'good'
                } else {
                    if (newErrorsType.includes(origErrorType)){
                        if (newErrorsType.length == 1){
                            return 'same';
                        } else {
                            return 'more';
                        }
                    } else {
                        return 'new';
                    }
                }
            },
            getRepairTooltip(errors) {
                if ( errors == null ){
                    return 'broken'
                }
                return errors.map(this.getErrorSummary).join('<br/>')
            }
        }
    }
</script>

<style scoped lang="scss">
    table {
        &.center {
            margin-left: auto;
            margin-right: auto;
        }

        & > tr {
            &:first-child {
                background-color: #2c3e50;
                color: #ffffff;
                font-weight: bold;
            }
            &:nth-child(even) {
                background-color: #f2f2f2;
            }
            & > td {
                width: 100px;
                height: 35px;
                padding: 0.2em;
            }
        }
    }


    .good{
        background-color: #2ecc7188;
    }

    .broken {
        background-color: #88888888;
    }

    .same {
        background-color: #3498db88;
    }

    .more, .new {
        background-color: #e74c3c88;
    }

</style>