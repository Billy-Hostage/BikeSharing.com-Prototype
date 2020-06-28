<template>
    <div class="row" id="hp_container">
        <div class="col-md-2">
        </div>
        <div class="col-md-8">
            <div class="jumbotron">
                <h2>
                    欢迎来到BikeSharing
                </h2>
                <p>
                    本网站提供骑行路线信息，和雇员在组织内推广骑行的相关建议
                </p>
                <hr>
                <p>
                    <router-link class="btn btn-success btn-large" to="/CycleRoute" style="margin-right: 10px">查看骑行路线</router-link>
                    <router-link class="btn btn-primary btn-large" to="/EmployerInfo" style="margin-left: 10px">我是雇主</router-link>
                </p>
            </div>
        </div>
        <div class="col-md-2">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Homepage"
    }
</script>

<style scoped>
  #hp_container{
      margin-top: 5%;
  }
</style>