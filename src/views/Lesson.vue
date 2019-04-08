<template>
<section class="view">
  <!-- Lesson Content-->
  <b-container>
    <b-row class="intro">
      <!-- Lesson Info -->
      <b-col md="12" lg="6">
        <h1 class="intro-title">{{data.title}}</h1>
        <div class="intro-instructor">
          <h5>Instructor<span>:</span></h5>
          <p>{{data.instructor}}</p>
        </div>
        <div class="intro-objectives">
          <i v-on:click="toggleObjectives" v-bind:class="{'open':objShow}"></i>
          <h5>Objectives</h5>
          <ul v-show="objShow">
            <li v-for="(obj, ix) in data.objectives" :key="`${ix}-objective`">{{obj}}</li>
          </ul>
        </div>
      </b-col>
      <!-- Lesson Video -->
      <b-col md="12" lg="6">
          <video-player
            source="./videos/life_of_candle.mp4"
            poster="../assets/images/video_posters/life_of_candle.png"
          />
      </b-col>
    </b-row>
    <!-- Lesson Activities -->
    <activity-group
      v-for="(activity, index) in data.activities"
      v-bind:key="`act-group-${index}`"
      v-bind:activity-id="`${activity.id}`"
      v-bind:activity="activity"
      v-bind:theme="data.theme"
    />
  </b-container>
</section>
</template>


<script>
import ActivityGroup from '../components/ActivityGroup'
import VideoPlayer from '../components/VideoPlayer'
import AppData from '../AppData.js'
import xAPI from '../xAPI.js'

xAPI.setEvents(['activity-completed', 'activity-attempted'])

// Create candle data from prices
AppData.activities.forEach(activity => activity.candles.forEach(candle => {
  const prices = candle.candlechart.cdata.pricePoints;
  const close = prices.slice(-1)[0] // Get last item in array
  const open = prices[0]; // First item in array
  candle.candlechart.csdata = {
    open: open,
    close: close,
    high: Math.max(...prices),
    low: Math.min(...prices),
    candleRed: open > close // If open > close then it means the price is falling
  }
}));


export default {
  name: 'lesson',
  data() {
    return {
      data: AppData,
      objShow: false
    }
  },
  components: {
    ActivityGroup,
    VideoPlayer
  },
  watch: {
    user(auth) {
      if (!auth) this.$router.replace('/login')
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    toggleObjectives() {
      this.objShow = !this.objShow;
    }
  }
}
</script>


<style lang="scss" scoped>
// -----------------------------------------------------
// Import Variables
// -----------------------------------------------------

@import '../Variables.scss';

// -----------------------------------------------------
// Lesson Introduction
// -----------------------------------------------------

.intro {
    margin-bottom: 60px;

    .intro-title {
        margin-bottom: 4px;
    }

    .intro-instructor,
    .intro-objectives {
        margin-top: 25px;
    }

    .intro-instructor {
        margin-top: 5px;

        h5 {
            display: inline-block;
            margin-right: 6px;
            font-size: 0.9em;

            span {
                display: inline;
            }

            @media(min-width: 768px) {
                span {
                    display: none;
                }
            }
        }

        p {
            display: inline-block;
            font-weight: 600;
            font-size: 0.9em;
        }

    }

    .intro-objectives {
        margin-bottom: 20px;

        i {
            display: inline-block;
            margin-right: 6px;

            &:before {
                content: "";
                display: inline-block;
                position: relative;
                top: 7px;
                width: 30px;
                height: 30px;
            }
        }

        h5 {
            display: inline-block;
            font-size: 1.18em;
        }

        ul {
            margin: 6px 0 40px;
        }
    }

    video {
        width: 100%;
    }

}

// Desktop Styles --------------------------------------

@media(min-width: 768px) {
    .intro {

        .intro-title {
            margin-bottom: 25px;
        }

        .intro-instructor {
            h5 {
                display: block;
                font-size: 1.1em;
            }
            p {
                display: block;
                font-weight: 400;
                font-size: 1em;
            }
        }

        .intro-objectives {
            h5 {
                font-size: 1.1em;
            }
            i {
                display: none;
            }

            ul {
                display: block !important;
            }
        }
    }
}

// Dark/Light Theme Styles -----------------------------

.dark {
    .intro {
        .intro-instructor {
            p {
                color: $purple;
            }

            @media(min-width: 768px) {
                p {
                    color: #fff;
                }
            }
        }
        .intro-objectives {
            i {
                &:before {
                    background: url("../assets/images/icons/circle_plus.svg") no-repeat;
                    background-size: 30px 30px;
                }

                &.open {
                    &:before {
                        background: url("../assets/images/icons/circle_minus.svg") no-repeat;
                        background-size: 30px 30px;
                    }
                }
            }

            h5 {
                color: #fff;
            }

            @media(min-width: 768px) {
                h5 {
                    color: $purple;
                }
            }
        }
    }
}

.light {
    .intro {
        .intro-instructor {
            h5 {
                color: $light-text-color;
            }
            p {
                color: $light-text-color;
            }

            @media(min-width: 768px) {
                h5 {
                    color: $light-header-color;
                }
                p {
                    color: $light-text-color;
                }
            }
        }
        .intro-objectives {
            i {
                &:before {
                    background: url("../assets/images/icons/circle_plus_light.svg") no-repeat;
                    background-size: 30px 30px;
                }

                &.open {
                    &:before {
                        background: url("../assets/images/icons/circle_minus_light.svg") no-repeat;
                        background-size: 30px 30px;
                    }
                }
            }

            h5 {
                color: $light-header-color;
            }
        }
    }
}
</style>
