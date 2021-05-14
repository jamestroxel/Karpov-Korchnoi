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