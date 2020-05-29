<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <div class='order'>
                <el-switch
                    v-model="reverse"
                    active-color="black"
                    inactive-color="gray"
                    active-text='ASC'
                    inactive-text='DESC'>
                </el-switch>
            </div>
            <div class="timeline">
                <el-timeline :reverse="reverse">
                    <el-timeline-item
                        v-for="(node, index) in timeline"
                        :key="index"
                        :icon="node.icon"
                        :type="node.type"
                        :color="node.color"
                        :size="node.size"
                        :timestamp="node.timestamp"
                        placement="top">
                        <el-card>
                            <h4>{{node.name}}</h4>
                            <div class="painting_images">
                                <PaintingImages
                                    v-for='painting in node.paintings'
                                    :url='"../../static/painting/"+node.timestamp.slice(0,4)+"/"+painting.picName'
                                    :key='painting.picName'>
                                </PaintingImages>
                            </div>
                            <p>
                                {{node.content}}
                            <p/>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <el-backtop target=".el-main"></el-backtop>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script>
    import Header from '../../components/MyHeader';
    import Footer from '../../components/MyFooter';
    import PaintingImages from './PaintingImages';

    export default {
        name: 'Painting',
        components: {
            Header,
            Footer,
            PaintingImages
        },
        data() {
            return {
                reverse: true,
                timeline: [],
            }
        },
        mounted() {
            // 读取画作信息
            this.$http.get('../../../static/json/paintings.json').then(response => {
                let json = response.data;
                this.timeline = json.timeline.sort(this.timelineCompare());
            });
        },
        watch: {
            reverse: function () {
                console.log(this.reverse);
            }
        },
        methods: {
            timelineCompare: function () {
                return function (oa, ob) {
                    let a = new Date(oa['timestamp']);
                    let b = new Date(ob['timestamp']);
                    return a - b;
                }
            }
        }
    }
</script>


<style lang='scss' scoped>
    @import "../../style/public";
    @import "../../style/painting";
</style>
