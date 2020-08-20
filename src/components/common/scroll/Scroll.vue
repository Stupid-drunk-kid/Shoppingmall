<template>
    <div ref="wrapper" class="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'

    export default {
        name: 'Scroll',
        props: {
            probeType: {
                type: Number,
                default(){
                    return 0
                }
            },
            pullUpLoad: {
                type: Boolean,
                default(){
                    return false
                }
            }
        },
        data(){
            return {
                scroll: null,
            }
        },
        methods: {
            scrollBackTop(x,y,time=400) {
                this.scroll.scrollTo(x,y,time)
            },
            finishPullUp() {
                this.scroll && this.scroll.finishPullUp()
            },
            refresh() {
                this.scroll && this.scroll.refresh()
                // console.log('----')
            }
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.wrapper,{
                click:true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })
            this.scroll.on('scroll', position => {
                this.$emit('scrolls',position)
            })
            this.scroll.on('pullingUp',() =>{
                this.$emit('pullingUp')
            })
        }
    }
</script>


<style scoped>

</style>