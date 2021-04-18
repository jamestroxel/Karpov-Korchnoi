<template>
<h1 class="heading1">Introduction</h1>
<p class="story">
    The contrast between the 1974 Candidates Final and the 1978 World Chess Championship could hardly be sharper. Game two of the 1974 match in Moscow has come to be regarded as a modern classic in tactics, strategy, and chess brilliance between two of the game’s best.
</p>
<p class="story">
    The absurdist theatre witnessed throughout the entire 1978 Championship quickly earned notoriety as an example of the type of superstition, paranoia, and scandal commonly observed in chess lore throughout the game’s rich history.
</p>
 <p class="teaserAttribute">Anatoly Karpov stares down Korchnoi<br>
</p>
</template>
<script>
    import intro from './introduction.json';
    export default {
        name: 'Intro',
        props: {
            moveIndex: Number,
        },
        data(){
            return{
                copy: intro,
                index: this.moveIndex
            }
        },
        mounted: function() {
            console.log("***", intro);
            this.paragraph = intro;
        }
    }
</script>