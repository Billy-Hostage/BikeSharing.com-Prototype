<template>
    <div class="routeList">
        <b-container>
            <div v-if="routes.length">
                <b-row>
                    <div v-bind:key="data.index" v-for="data in routes">
                        <b-col l="4">
                            <b-card
                                    v-bind:title="data.name"
                                    v-bind:img-src="data.imgSrc"
                                    img-alt="Image"
                                    img-top
                                    tag="article"
                                    style="max-width: 20rem;"
                                    class="mb-2">
                                <b-card-text>{{ `${data.description.slice(0,100)}` }}</b-card-text>
                                <b-button :to="'Route/' + data.index" variant="success">详情</b-button>
                            </b-card>
                        </b-col>
                    </div>
                </b-row>
            </div>
            <div v-else>
                <h5>暂无路线推荐 😢</h5>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "CycleRoute",
        data() {
            return{
                routes: [
                    {index: 1, name: '第一条路线', description: '这是第一条路线的介绍内容，可以简要描述路径特色和注意点',
                        start: {name: '深圳大学', lng: 113.942624,lat: 22.538981},
                        end: {name: '科兴科学园', lng: 113.950099, lat: 22.553799},
                        imgSrc: './img/szu-front.png'},
                    {index: 2, name: '第二条路线', description: '这是第二条路线'},
                ]
            };
        }
    }
</script>

<style scoped>
    .routeList{
        margin-top: 2%;
    }
</style>