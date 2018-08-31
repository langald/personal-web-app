<template>
    <div class="updownpointer" :class="classObj" v-show="classObj.up || classObj.down" @click="onPointerClick()">
        <i class="fas " 
            :class="{
                'fa-angle-up': classObj.up,
                'fa-angle-down': classObj.down
            }"
            ></i>
    </div>
</template>

<script>
export default {
    name: 'Pointer',   
    data() {
        return {
          pageYCoordsLabel: 0,
          classObj: {
              up: false,
              down: false
          }
        }        
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },   
    methods: {
        handleScroll(){  
            //текущий скролл страницы
            var pageYCoords = window.pageYOffset || document.documentElement.scrollTop;
            //видимый экран страницы
            var innerHeight = document.documentElement.clientHeight;
            //console.log('pageYCoords: ' + pageYCoords + ', innerHeight: ' + innerHeight)
            
            if(!this.classObj.up && !this.classObj.down) {
                if (pageYCoords > innerHeight) {                    
                    this.classObj = {
                        up: true,
                        down: false
                    }
                }
            } else if (this.classObj.up) {
                if (pageYCoords < innerHeight) {
                    this.classObj = {
                        up: false,
                        down: false
                    }
                }
            } else if(this.classObj.down) {
                if (pageYCoords > innerHeight) {
                     this.classObj = {
                        up: true,
                        down: false
                    }
                }
            }

            var scrollHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            )
            if (scrollHeight - innerHeight - pageYCoords < 100) {
                 this.classObj = {
                        ...this.classObj,
                        bottom: true
                    }
            } else {
                 this.classObj = {
                        ...this.classObj,
                        bottom: false
                    }
            }
        }, 
        onPointerClick() {
            var pageYCoords = window.pageYOffset || document.documentElement.scrollTop;

            if(this.classObj.up) {
                this.pageYCoordsLabel = pageYCoords;
                window.scrollTo(0, 0);
                this.classObj = {                    
                    up: false,
                    down: true
                }                
            } else {
                window.scrollTo(0, this.pageYCoordsLabel);
                 this.classObj = {                    
                    up: true,
                    down: false
                }
            }            
        }
    } 
}

</script>

<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.updownpointer {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #fff;
    color: $gray-color;
    opacity: 0.4;
    cursor: pointer;
    z-index: 9999;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.updownpointer i {
    font-size: 36px;
}

@media only screen and (max-width: 540px) {
    .updownpointer.bottom{
        bottom: 110px;
    }
}
</style>
