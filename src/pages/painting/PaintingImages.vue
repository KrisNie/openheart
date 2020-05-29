<template>
    <div class='paintings'>
        <!-- todo: 图片数量大于3增加横向滚动条-->
        <el-image
            :src='url'
            :fit="fit"
            :preview-src-list="srclist"
            lazy
            scroll-container='main'>
            <div slot="placeholder" class="image-slot">
                loading<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
            </div>
        </el-image>
    </div>
</template>

<script>
    export default {
        name: 'PaintingImages',
        props: {
            info: 'info',
            url: 'url'
        },
        data() {
            return {
                fit: 'scale-down',//['fill', 'contain', 'cover', 'none', 'scale-down']
                list: [],
                url: this.url
            }
        },
        computed: {
            srclist: function () {
                this.list.push(this.url);
                return this.list;
            }
        },
        created() {
        }
        ,
        methods: {}
    }
</script>

<style scoped>

</style>
