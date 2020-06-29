<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
            <b-container>
                <b-navbar-brand to="/">BikeSharing</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/CycleRoute">骑行路线</b-nav-item>
                        <b-nav-item to="/BikeStore">合作商家</b-nav-item>
                        <b-nav-item to="/EmployerInfo">雇主信息</b-nav-item>
                        <b-nav-item to="/HowTo">如何使用</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
          return{

          }
        },
    }
</script>

<style scoped>

</style>