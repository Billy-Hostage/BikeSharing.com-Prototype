<template>
    <div style="margin-top: 1%">
        <div class="row">
            <div class="col-md-2">
                <b-btn variant="danger" to="/CycleRoute">
                    返回
                </b-btn>
            </div>
            <div class="col-md-8" style="margin-top: 20px">
                <h2 align="center" style="margin-bottom: 15px">{{viewingRoute.name}}</h2>
                <table class="table" id="detailTable">
                    <tbody>
                    <tr>
                        <td>
                            介绍
                        </td>
                        <td>
                            {{viewingRoute.description}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            地图
                        </td>
                        <td>
                            <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
                                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                            </baidu-map>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr>
                <div id="comments">
                    <div class="media">
                        <img class="mr-3" alt="Bootstrap Media Preview" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg" />
                        <div class="media-body">
                            <h6 class="" align="left">
                                用户A
                            </h6> <p class="comment">骑自行车有益身体健康</p>
                        </div>
                    </div>
                    <br>
                    <div class="media">
                        <a class="pr-3" href="#"><img alt="Bootstrap Media Another Preview" src="https://www.layoutit.com/img/sports-q-c-64-64-2.jpg" /></a>
                        <div class="media-body">
                            <h6 class="" align="left">
                                用户B
                            </h6> <p class="comment">低碳生活，从我做起</p>
                        </div>
                    </div>
                </div>
                <h4 style="margin-top: 3%">评价</h4>
                <form method="get">
                    <input type="text" class="form-control" placeholder="请输入用户名"><br>
                    <div class="input-group">
                        <textarea id="commentInput" class="form-control" placeholder="请输入评价"></textarea>
                    </div>
                    <div id="commentButtons">
                        <button type="reset" class="btn btn-danger">
                            清空
                        </button>&nbsp;
                        <button type="submit" class="btn btn-success">
                            提交
                        </button>
                    </div>
                </form>
            </div>
            <div class="col-md-2">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RouteDetails",
        data() {
            return {
                routes: [
                    {index: 1, name: '第一条路线', description: '这是第一条路线的介绍内容，可以简要描述路径特色和注意点', start: {name: '深圳大学', lng: 113.942624,lat: 22.538981}, end: {name: '科兴科学园', lng: 113.950099, lat: 22.553799}},
                    {index: 2, name: '第二条路线', description: '这是第二条路线'},
                ],
                viewingRoute: undefined,
                center: {lng: 0, lat: 0},
                zoom: 3
            }
        },
        beforeMount() {
            const queryingID = parseInt(this.$route.params.rid);
            this.viewingRoute = this.routes[0];
            for(let index in this.routes) {
                if(this.routes[index].index == queryingID)
                    this.viewingRoute = this.routes[index];
            }
        },
        mounted() {

        },
        methods: {
            handler ({BMap, map}) {
                this.center.lng = this.viewingRoute.start.lng;
                this.center.lat = this.viewingRoute.start.lat;
                this.zoom = 15
                map.centerAndZoom(new BMap.Point(this.center.lng, this.center.lat), this.zoom);
                let riding = new BMap.RidingRoute(map, {
                    renderOptions: {
                        map: map,
                        autoViewport: true
                    }
                });
                let start = new BMap.Point(this.viewingRoute.start.lng, this.viewingRoute.start.lat);
                let end = new BMap.Point(this.viewingRoute.end.lng, this.viewingRoute.end.lat);
                riding.search(start, end);
            }
        }
    }
</script>

<style scoped>
    #detailTable{

    }

    #commentInput{
        width: 80%;
        min-height: 100px;
    }

    .bm-view{
        width: 100%;
        height: 350px;
    }

    .comment{
        font-size: 18px;
        text-align: left;
        text-indent: 2%;
    }

    #commentButtons{
        margin-top: 1%;
    }
</style>