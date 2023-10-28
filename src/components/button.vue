<script setup>
    
    import Button from 'primevue/button';
    import { ref } from 'vue';
    const name= ref('click');
    const handleClick=()=>{
        name.value='dbclick'
    }
</script>
<template>
    
    <!-- <Button class="btn" 
        :label="name"
        @click="handleClick"
        icon="pi pi-check"
     /> -->
    <div class="flex">
        <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
        <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round mx-4">2</div>
        <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
    </div>
</template>
<style scoped>
    /* .p-button{
        background-color: red !important;
    } */
    /* :deep(.p-component){
        background-color: rgb(26, 8, 115) !important;
    } */
    .btn{
        background-color: blue;
    }
</style>
