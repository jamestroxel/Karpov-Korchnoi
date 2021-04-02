<template>
    <el-carousel interval=0 height="465px">
        <el-carousel-item v-for="text in copy" :key="text.key">
            <p :class="text.headingStyle">
                {{text.heading}}
            </p>
             <p :class="text.subHeadingStyle">
                {{text.subHeading}}
            </p>
            <p :class="text.style">
                {{ text.text }}
            </p>
        </el-carousel-item>
    </el-carousel>
</template>
<script>
    import intro from './introduction.json';
    export default {
        name: 'Intro',
        data(){
            return{
                copy: intro
            }
        },
        mounted: function() {
            console.log("***", intro);
            this.paragraph = intro;
        }
    }
</script>