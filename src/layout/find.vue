<template>
    <div id="box">
        <FindHeader />
        <findfooter />
    </div>

</template>

<script>
import FindHeader from '../components/FindHeader';
import findfooter from '../components/findfooter';

export default {
    name:"find",
    components:{
        FindHeader,findfooter

    },

}
</script>

<style scoped>

</style>