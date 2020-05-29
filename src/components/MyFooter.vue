<template>
    <div class='footer'>
        <p>© 2020{{year}} OPENHEART KRIS NIE</p>
    </div>
</template>

<script>
    export default {
        name: 'my-footer',
        data() {
            return {
                year: ''
            }
        },
        mounted() {
            let year = new Date().getFullYear();
            if (year > 2020) {
                this.year = '-' + year;
            }
        }
    }
</script>

<style scoped lang='scss'>
    @import "../style/public";
</style>
