<script setup>
   
   import FooterWorld from '@/components/footer.vue'
   import HeaderWorld from '@/components/header.vue'
   import MainWorld from '@/components/main.vue'
   import SidebarWorld from '@/components/sidebar.vue'
   
</script>

<template>
    
    <div class="container">
        <div class="box-left">
            <SidebarWorld></SidebarWorld>
        </div>
        <div class="box-right">
            <div class="headerbox">
                
                <HeaderWorld></HeaderWorld>
            </div>
            <div class="mainbox">
                <MainWorld></MainWorld>
            </div>
            <div class="footerbox">
                <FooterWorld></FooterWorld>
                
            </div>
        </div>
        
    </div>
</template>

<style scoped>

 .container{
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: red;
 }
 .box-left{
    width: 20%;
    height: 100%;
    background-color: blue;
 }
 .box-right{
    width: 80%;
    height: 100%;
    background-color: palevioletred;
 }
 .headerbox{
    width: 100%;
    height: 25%;
    background-color: aqua;
 }
 .mainbox{
    width: 100%;
    height: 50%;
    /* background-color: green; */
 }
 .footerbox{
    width: 100%;
    height: 25%;
    background-color: orange;
 }
</style>