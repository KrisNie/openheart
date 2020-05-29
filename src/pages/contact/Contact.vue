<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <el-collapse accordion class='contact'>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-phone-outline"></i><p class='title'>联系电话 Number</p>
                    </template>
                    <div>+86-18562099661</div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-message"></i><p class='title'>电子邮箱 E-mail</p>
                    </template>
                    <div>ourownglory@Gmail.com</div>
                    <div>x912102246@163.com</div>
                </el-collapse-item>
                <el-collapse-item class='wechat'>
                    <template slot="title">
                        <i class="header-icon el-icon-chat-dot-round"></i><p class='title'>微信 WeChat</p>
                    </template>
                    <img src='static/contact/IMG_6747.JPG' alt='WeChat' class='wechat_img'/>
                </el-collapse-item>
                <el-collapse-item class='address'>
                    <template slot="title">
                        <i class="header-icon el-icon-map-location"></i><p class='title'>联系地址 Address</p>
                    </template>
                    <div>ur ❤</div>
                </el-collapse-item>
            </el-collapse>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>

<script>
    import Header from '../../components/MyHeader';
    import Footer from '../../components/MyFooter';

    export default {
        name: 'contact',
        components: {
            Header,
            Footer
        },
    }
</script>

<style lang='scss' scoped>
    @import "../../style/public";
    @import "../../style/contact";
</style>
