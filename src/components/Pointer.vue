<template>
    <div class="updownpointer" :class="classObj" v-show="classObj.up || classObj.down" @click="onPointerClick()">
        <i class="far " 
            :class="{
                'fa-arrow-alt-circle-up': classObj.up,
                'fa-arrow-alt-circle-down': classObj.down
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
            console.log('pageYCoords: ' + pageYCoords + ', innerHeight: ' + innerHeight)
            
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
    bottom: 30px;
    right: 30px;
    border-radius: 100%;   
    //background: $gray-color;
    color: $gray-color;;
    cursor: pointer;
    z-index: 9999;
    line-height: 1;
}
.updownpointer i {
    font-size: 46px;
}
</style>
