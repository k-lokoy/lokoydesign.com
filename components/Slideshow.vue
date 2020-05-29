<template>
  <div class="slideshow">
    <div class="slideshow-inner" :style="`left: -${index * 100}%;`">
      <slot></slot>
    </div>
    <div class="controls">
      <i class="fa fa-chevron-left"  @click="previous" :style="`opacity: ${index > 0 ? '1' : '0'};`"></i>
      <i class="fa fa-chevron-right" @click="next"     :style="`opacity: ${index < count - 1 ? '1' : '0'};`"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["count"],

    data: function() {
      return {
        index: 0
      }
    },

    methods: {
      previous: function() {
        if (this.index > 0) this.index-- 
      },

      next: function() {
        if (this.index < this.count - 1) this.index++
      }  
    }
  }
</script>

<style scoped>
  .slideshow {
    background-color: var(--color-blue);
    position: relative;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
  
  .slideshow::before {
    content: '';
    display: block;
    padding-bottom: calc(9/16 * 100%);
  }

  .slideshow-inner {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
    transition: left .3s ease-in-out;
  }

  .slideshow-inner > * {
    width: 100%;
    min-width: 100%;
    height: auto;
    display: block;
  }

  .controls {
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    width: calc(100% - 40px);
    height: 1em;
    margin: auto 20px;
    color: var(--color-gray);
    display: flex;
    justify-content: space-between;
    opacity: 0.8;
    transition: opacity .3s ease-in-out;
  }
    
  .controls > * {
    cursor: pointer;
  }

  .controls > *:hover,
  .controls > *:focus {
    opacity: 1;
  }
  
  .controls >:nth-child(2) {
    text-align: right;
  }

  @media (min-width: 768px) {
    .controls {
      font-size: 2rem;
    }
  }
</style>