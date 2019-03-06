<!-- Template -->
<template>
  <div class="row candle-builder">
    <div class="col-sm-8 col-md-9 col-lg-9">
      <svg id="chart" width="100%" v-bind:height="51 + ((cbdata.cdata.prices.length - 1) * 40)">
        <CandleChart :ch="cbdata.cdata"></CandleChart>
        <CandleStick :cs="cbdata.csdata"></CandleStick>
      </svg>
    </div>
    <div class="col-sm-4 col-md-3 col-lg-3">
      <div class="candle-controls">
        <div class="slidecontainer">
          <label>Up/Down</label>
          <input type="range" v-model="cbdata.csdata.bodyTop" min="50" max="200" step="10" class="slide">
        </div>
        <div class="slidecontainer">
          <label>Open/Close</label>
          <input type="range" v-model="cbdata.csdata.bodyHeight" min="10" max="200" step="10" class="slide">
        </div>
        <div class="slidecontainer">
          <label>High</label>
          <input type="range" v-model="cbdata.csdata.wickTop" min="0" max="200" step="10" class="slide">
        </div>
        <div class="slidecontainer">
          <label>Low</label>
          <input type="range" v-model="cbdata.csdata.wickBottom" min="0" max="200" step="10" class="slide">
        </div>
        <p class="candle-color">Color</p>
        <label class="switch">
          <input type="checkbox" v-model="cbdata.csdata.candleRed">
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<!-- Javascript -->
<script>

import CandleChart from './CandleChart.vue'
import CandleStick from './CandleStick.vue'

export default {
  name: 'CandleBuilder',
  props: ['cbdata'],
  components: {
    CandleChart,
    CandleStick
  },
  methods: {
    returnData() {
      return this.$data
    }
  }
}

</script>

<!-- CSS with 'builder' attribute for this component -->
<style lang="scss" builder>

  @import '../../Variables.scss';

  .candle-builder {
    padding: 20px 0 25px;
    margin-bottom: 15px;

    .candle-controls {
      margin: 40px 0 0 5px;
      padding: 10px 7px 5px;
      border-radius: 8px;

      .slidecontainer {
        margin-bottom: 5px;
        width: 100%;

        label {
          display: block;
          color: #eee;
          margin-bottom: 0px;
          font-size: 14px;
        }

        .slide {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          background: #777;
          border-radius: 10px;
          outline: none;
        }

        .slide::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 10px;
          background: #fff;
          cursor: pointer;
        }

        .slide::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          background: #fff;
          cursor: pointer;
        }
      }

      .candle-color {
        display: block;
        color: #eee;
        margin-bottom: 5px;
        font-size: 14px;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 45px;
        height: 25px;

        input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: $green;
          -webkit-transition: .4s;
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 17px;
          width: 17px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: $red;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px $red;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(19px);
          -ms-transform: translateX(19px);
          transform: translateX(19px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      }

      @media(min-width: 576px) {
        margin: 10px 0 0 0;

        .slide {
          width: 150px;
        }
      }

    }
  }

  .dark {
    .candle-builder {

      .candle-controls {
        background: $controls-dark-bg;
        border-size: 1px;
        border: 1px solid $controls-dark-border;

        .slidecontainer {
          label {
            color: #eee;
          }

          .slide {
            background: $slide-dark-bg;
          }

          .slide::-webkit-slider-thumb {
            background: $slide-dark-handle;
          }

          .slide::-moz-range-thumb {
            background: $slide-dark-handle;
          }

        }

        .candle-color {
          color: #eee;
        }
      }
    }
  }


  .light {
    .candle-builder {

      .candle-controls {
        background: $controls-light-bg;
        border: 1px solid $controls-light-border;

        .slidecontainer {
          label {
            color: #333;
          }

          .slide {
            background: $slide-light-bg;
          }

          .slide::-webkit-slider-thumb {
            background: $slide-light-handle;
          }

          .slide::-moz-range-thumb {
            background: $slide-light-handle;
          }
        }

        .candle-color {
          color: #333;
        }
      }
    }
  }


</style>
