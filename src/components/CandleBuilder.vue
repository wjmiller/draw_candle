<!-- Template -->
<template>
  <div class="row candle-builder">
    <div class="col-sm-8 col-md-8 col-lg-8">
      <svg id="chart" width="100%" v-bind:height="51 + ((cbdata.cdata.prices.length - 1) * 40)">
        <g>
          <rect width="100%" height="100%" class="chart-bg"></rect>
          <text x="0" y="15" class="chart-num">Price</text>
          <text v-for="(price,index) in cbdata.cdata.prices" :key="'price-' + index" x="0" v-bind:y="50 + (40 * index)" class="chart-num">{{price}}</text>
          <line v-for="(price,index) in cbdata.cdata.prices" :key="'line-' + index" x1="50" v-bind:y1="50 + (40 * index)" x2="96%" v-bind:y2="50 + (40 * index)" class="chart-pline" />
        </g>
        <g>
          <line x1="155" v-bind:y1="chartBodyTop" x2="155" v-bind:y2="chartWickTop" class="candle-wick" />
          <rect :x="125" v-bind:y="chartBodyTop" width="60" v-bind:height="chartBodyHeight" v-bind:class="chartBodyColor"/>
          <line x1="155" v-bind:y1="chartBodyHeight + chartBodyTop" x2="155" v-bind:y2="chartWickBottom" class="candle-wick"/>
        </g>
      </svg>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4">
      <div class="candle-controls">
        <div class="slidecontainer">
          <label>Top Wick</label>
          <input type="range" v-model="rangeWickTop" min="0" max="10" step="1" class="slide" @input="changeCandle('WickTop')">
        </div>
        <div class="slidecontainer">
          <label>Top of Body</label>
          <input type="range" v-model="rangeBodyTop" min="0" max="10" step="1" class="slide" @input="changeCandle('BodyTop')">
        </div>
        <div class="slidecontainer">
          <label>Bottom of Body</label>
          <input type="range" v-model="rangeBodyBottom" min="0" max="10" step="1" class="slide" @input="changeCandle('BodyBottom')">
        </div>
        <div class="slidecontainer">
          <label>Bottom Wick</label>
          <input type="range" v-model="rangeWickBottom" min="0" max="10" step="1" class="slide" @input="changeCandle('WickBottom')">
        </div>
        <p class="candle-color">Color</p>
        <label class="switch">
          <input type="checkbox" v-model="candleRed" @change="changeCandle('BodyColor')">
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
</template>



<!-- Javascript -->
<script>

export default {
  name: 'CandleBuilder',
  data () {
    return {
      chartTop: 250,
      sliderMax: 10,
      chartTick: 20,
      bodyBase: 5,
      bodyTop: 0,
      bodyBottom: 0,
      wickTop: 0,
      wickBottom: 0,
      candleRed: false,
      rangeBodyTop: 0,
      rangeBodyBottom: 0,
      rangeWickTop: 0,
      rangeWickBottom: 0
    }
  },
  computed: {
    //chartTop () {55 + ((this.cbdata.cdata.prices.length - 1) * 50)},
    cBodyTop () {return this.bodyTop},
    cBodyBottom () {return Math.max(this.bodyTop - this.bodyBottom, 0)},
    cWickTop () {return Math.max(this.wickTop - this.bodyTop, 0)},
    cWickBottom () {return Math.max(this.bodyBottom - this.wickBottom, 0)},
    chartBodyTop () {return this.chartTop - (this.chartTick * this.bodyTop) - this.bodyBase/2},
    chartBodyHeight () {return this.bodyBase + (this.cBodyBottom * this.chartTick)},
    chartBodyColor () {return this.candleRed ? 'candle-red' : 'candle-green'},
    chartWickTop () {return Math.max(0, this.chartBodyTop - (this.chartTick * this.cWickTop))},
    chartWickBottom () {return Math.max(0, this.chartBodyHeight + this.chartBodyTop + (this.chartTick * this.cWickBottom))}
  },
  props: ['cbdata'],
  methods: {
    makeInteger (str) {return parseInt(str, 10)},
    returnData() {
      return this.$data
    },
    changeCandle (part) {
      this[`modify${part}`]();
      this.$emit('candleChange', {
        open: this.candleRed ? this.bodyTop : this.bodyBottom,
        close: this.candleRed ? this.bodyBottom : this.bodyTop,
        high: this.wickTop,
        low: this.wickBottom
      });
    },
    modifyBodyColor () {},
    modifyBodyTop () {
      this.bodyTop = this.makeInteger(this.rangeBodyTop);
      this.bodyBottom = this.bodyBottom > this.bodyTop ? this.bodyTop : this.bodyBottom;
      this.wickTop = this.wickTop < this.bodyTop ? this.bodyTop : this.wickTop;
      this.rangeBodyBottom = this.bodyBottom;
      this.rangeWickTop = this.wickTop;
    },
    modifyBodyBottom () {
      const bodyBottom = this.makeInteger(this.rangeBodyBottom);
      this.bodyBottom = bodyBottom > this.bodyTop ? this.bodyTop : bodyBottom;
      this.wickBottom = this.bodyBottom < this.wickBottom ? this.bodyBottom : this.wickBottom;
      this.rangeBodyBottom = this.bodyBottom;
      this.rangeWickBottom = this.wickBottom;
    },
    modifyWickTop () {
      const wickTop = this.makeInteger(this.rangeWickTop);
      this.wickTop = wickTop < this.bodyTop ? this.bodyTop : wickTop;
      this.rangeWickTop = this.wickTop;
    },
    modifyWickBottom () {
      const wickBottom = this.makeInteger(this.rangeWickBottom);
      this.wickBottom = this.bodyBottom < wickBottom ? this.bodyBottom : wickBottom;
      this.rangeWickBottom = this.wickBottom;
    }
  }
}

</script>

<!-- CSS with 'builder' attribute for this component -->
<style lang="scss" builder>

  @import '../Variables.scss';

  .candle-builder {
    padding: 20px 0 25px;
    margin-bottom: 15px;

    .chart-num {
      font: 14px 'Roboto';
    }

    .candle-green {
      fill:$green;
    }

    .candle-red {
      fill:$red;
    }

    .candle-wick {
      stroke-width:2;
    }

    .chart-pline {
      stroke-width:1;
      stroke-dasharray: 5;

      &:last-child {
        stroke-dasharray: 0;
      }
    }

    .candle-controls {
      margin: 40px 0 0 5px;
      padding: 7px 10px 2px;
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

        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      }

      @media(min-width: 576px) {
        margin: 0;

        .slide {
          width: 150px;
        }
      }

    }

  }

  .dark {
    .candle-builder {

      .chart-bg {
        fill: $group-dark-bg;
      }
      .chart-num {
        fill: #ddd;
      }
      .chart-pline {
        stroke:#888;
      }

      .candle-wick {
        stroke: $gray;
      }

      .candle-controls {
        background: $pane-dark-bg;
        border: 1px solid $pane-dark-border;

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

      .chart-bg {
        fill: $group-light-bg;
      }
      .chart-num {
        fill: #333;
      }
      .chart-pline {
        stroke:#999;
      }

      .candle-wick {
        stroke: #444;
      }

      .candle-controls {
        background: $pane-light-bg;
        border: 1px solid $pane-light-border;

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
