<!-- Template -->
<template>
  <div class="row candle-builder">
    <div class="col-sm-7 col-lg-7">
      <svg id="chart" width="100%" v-bind:height="55 + ((cbdata.cdata.prices.length - 1) * 50)">
        <CandleChart :ch="cbdata.cdata"></CandleChart>
        <CandleStick :cs="cbdata.csdata"></CandleStick>
      </svg>
    </div>
    <div class="col-sm-5 col-lg-5">
      <div class="candle-controls">
        <div class="slidecontainer">
          <label>Candle Position</label>
          <input type="range" v-model="cbdata.csdata.bodyTop" min="0" max="250" step="5" class="slide">
        </div>
        <div class="slidecontainer">
          <label>Candle Body Size</label>
          <input type="range" v-model="cbdata.csdata.bodyHeight" min="5" max="200" step="5" class="slide">
        </div>
        <div class="slidecontainer">
          <label>Top Wick Length</label>
          <input type="range" v-model="cbdata.csdata.wickTop" min="0" max="200" step="5" class="slide">
        </div>
        <div class="slidecontainer">
          <label>Bottom Wick Length</label>
          <input type="range" v-model="cbdata.csdata.wickBottom" min="0" max="200" step="5" class="slide">
        </div>
        <p class="candle-color">Candle Color</p>
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
  }
}

</script>

<!-- CSS with 'builder' attribute for this component -->
<style lang="scss" builder>

  .row.candle-builder {
    background: #242a41;
    padding: 20px 0 25px;
    border-radius: 0;
    margin-bottom: 15px;
  }

  .candle-controls {
    margin: 40px 0 0 5px;

    .slidecontainer {
      margin-bottom: 10px;
      width: 100%;

      label {
        display: block;
        color: #eee;
        margin-bottom: 5px;
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
        background: #62C848;
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
        background-color: #62C848;
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
        background-color: #E23B2B;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #E23B2B;
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

  @media(min-width: 576px) {
    .row.candle-builder {
      border-radius: 10px;
    }
  }


</style>
