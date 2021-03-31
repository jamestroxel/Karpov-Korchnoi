<template>
<!-- <div v-for="text in copy" :key="text.key">
    <p :class="text.headingStyle">
        {{text.heading}}
    </p>
</div> -->
    <el-carousel interval=0 height="750px">
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
    import story from './story.json';
    export default {
        name: 'Story',
        data(){
            return{
                copy: story
            }
        },
        mounted: function() {
            console.log("***", story);
            this.paragraph = story;
        }
    }
</script>