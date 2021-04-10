<template>
<div>
    <p class="heading2">
        {{copy[this.moveIndex].heading}}
    </p>
        <p class="subHead">
        {{copy[this.moveIndex].subHeading}}
    </p>
    <p class="story">
        {{ copy[this.moveIndex].text }}
    </p>
</div>
    <!-- <el-carousel indicators=outside :autoplay="false" height="465px">
        <el-carousel-item v-for="text in copy" :key="text.key">
            <p :class="text.headingStyle">
                {{text[this.moveIndex].heading}}
            </p>
             <p :class="text.subHeadingStyle">
                {{text[this.moveIndex].subHeading}}
            </p>
            <p :class="text.style">
                {{ text[this.moveIndex].text }}
            </p>
        </el-carousel-item>
    </el-carousel> -->
</template>
<script>
    import story from './story.json';
    export default {
        name: 'Story',
        props: {
            moveIndex: Number
        },
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