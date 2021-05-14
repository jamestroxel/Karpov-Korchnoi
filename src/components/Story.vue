<template>
<div>
    <h1 v-if="this.moveIndex < 4 || this.moveIndex > 54" class="heading1">
        {{copy[this.moveIndex].title}}
    </h1>
    <p v-if="this.moveIndex == 0 || this.moveIndex == 1 || this.moveIndex == 49 || this.moveIndex == 52" class="heading2">
        {{copy[this.moveIndex].heading}}
    </p>
    <p v-if="this.moveIndex == 17 || this.moveIndex == 40" class="subHead">
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
    import story from '../assets/story.json';
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