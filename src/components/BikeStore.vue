<template>
    <div>
        <div class="storeList">
            <b-container>
                <div v-if="stores.length">
                    <b-row>
                        <div v-bind:key="data.index" v-for="data in stores">
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
                                    <b-button v-b-toggle :href="'#store' + data.index" @click.prevent variant="success">详情</b-button>
                                </b-card>
                            </b-col>
                        </div>
                    </b-row>
                </div>
                <div v-else>
                    <h5>暂无合作商铺 😢</h5>
                </div>
            </b-container>
        </div>
        <div class="sidebar" v-bind:key="data.index" v-for="data in stores">
            <b-sidebar :id="'store' + data.index" :title="data.name" right shadow width="500px">
                <div class="px-3 py-2">
                    <p>
                        {{data.detDescription}}
                    </p>
                    <b-img :src="data.imgSrc" fluid thumbnail></b-img>
                    <baidu-map class="bm-view" :center="data.lookAtLocation" :zoom="zoom">
                        <bm-marker :position="data.location" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
                            <bm-label :content="data.name" :labelStyle="{color: 'green', fontSize : '12px'}" :offset="{width: -35, height: 30}"/>
                            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                        </bm-marker>
                    </baidu-map>
                </div>
            </b-sidebar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BikeStore",
        data() {
            return{
                stores: [
                    {index: 1, name: '开心每一天自行车行', imgSrc: './img/store1-front.png', description: '这是第一家商铺的简要介绍', detDescription: '这是第一家商铺的详细介绍，目前为占位符',
                    location: {lng: 114.039395, lat: 22.647352},
                    lookAtLocation: {lng: 114.032488, lat: 22.651653}},
                    {index: 2, name: '开心每两天自行车行', imgSrc: 'https://picsum.photos/500/500/?image=54', description: '这是第二家商铺的简要介绍', detDescription: '这是第二家商铺的详细介绍，目前为占位符'},
                ],
                center: {lng: 0, lat: 0},
                zoom: 15,
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .storeList{
        margin-top: 2%;
    }

    .bm-view{
        width: 100%;
        height: 350px;
    }
</style>