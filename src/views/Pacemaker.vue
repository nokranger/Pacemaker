<template>
  <div>
    <!-- <b-container> -->
    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1,minimal-ui" name="viewport" />
    <audio id="fivemin">
      <source src="@/assets/audio/5min.mp3" type="audio/mpeg" />
    </audio>
    <audio id="threemin">
      <source src="@/assets/audio/3min.mp3" type="audio/mpeg" />
    </audio>
    <audio id="delaysound">
      <source src="@/assets/audio/delay.mp3" type="audio/mpeg" />
    </audio>
    <br/>
    <div class="layoutP">
      <div style="text-align:center">
        <b-row class="text-center">
          <!-- <b-col cols="1"></b-col> -->
          <b-col class="layoutVO" cols="6">
            <br />
            <div class="fontVO">VIN : {{ VIN }}</div>
            <br />
          </b-col>
          <b-col class="layoutVO" cols="6">
            <br />
            <div class="fontVO">OPTION GROUP : {{OPTION_GROUP}}</div >
            <br />
          </b-col>
          <!-- <b-col cols="1"></b-col> -->
          <br />
        </b-row>
      </div>
    </div>
    <br/>
    <div class="layoutP">
      <div>
        <!-- <div> -->
          <b-row class="text-center">
            <!-- <b-col> -->
              <!-- <div class="layoutPA">
                <div class="m5 fontPA">
                  PLAN :
                </div>
                <div id="s_plan" class=" m5 fontPA">{{S_plan}}</div>
              </div> -->
            <!-- </b-col> -->
            <b-col cols="12">
              <div>
                <div class="layoutPA">
                  <div class="m5 fontPA">
                    PLAN :
                  </div>
                  <div id="s_plan" class=" m5 fontPA">{{S_plan}}</div>
                </div>
              </div>
              <b-progress
                class="mt-2"
                :max="S_plan"
                height="8rem"
                show-value
                show-progress
                animated
              >
                <b-progress-bar
                  v-for="(plan_times, index) in plan_time"
                  :key="index"
                  :value="plan_times"
                  :variant="index % 5 === 0 ? 'warning' : index % 4 === 0 ? 'success' : index % 3 === 0 ? 'danger' : index % 2 === 0 ? 'primary' : index % 1 === 0 ? 'secondary' : 'dark'"
                >
                  <strong>{{plan_times}}</strong>
                </b-progress-bar>
              </b-progress>
              <br />
            </b-col>
            <!-- <b-col cols="1"></b-col> -->
          </b-row>
        <!-- </div> -->
      </div>
      <div>
        <!-- <div> -->
          <!-- <b-row class="text-center"> -->
            <!-- <b-col></b-col> -->
            <!-- <b-col cols="8">
              <br />
              <b-progress
                class="mt-2"
                :max="S_plan"
                height="4rem"
                show-value
                show-progress
                animated
              >
                <b-progress-bar
                  v-for="(plan_times, index) in plan_time"
                  :key="index"
                  :value="plan_times"
                  :variant="index % 5 === 0 ? 'warning' : index % 4 === 0 ? 'success' : index % 3 === 0 ? 'danger' : index % 2 === 0 ? 'primary' : index % 1 === 0 ? 'secondary' : 'dark'"
                >
                  <strong>{{plan_times}}</strong>
                </b-progress-bar>
              </b-progress>
              <br />
            </b-col> -->
            <!-- <b-col></b-col> -->
          <!-- </b-row> -->
        <!-- </div> -->
        <!-- <div> -->
          <b-row class="text-center">
            <!-- <b-col cols="1"> -->
              <br />
              <!-- <div class="layoutPA">
                <div class="m5 fontPA">
                  ACTUAL :
                </div>
                <div id="s_actual" class="m5 fontPA">{{S_actual}}</div>
              </div> -->
            <!-- </b-col> -->
            <b-col cols="12">
              <br />
              <div>
                <div class="layoutPA">
                <div class="m5 fontPA">
                  ACTUAL :
                </div>
                <div id="s_actual" class="m5 fontPA">{{S_actual}}</div>
              </div>
              </div>
              <b-progress
                class="mt-2"
                :max="S_plan"
                height="8rem"
                show-value
                show-progress
                animated
              >
                <!-- <b-progress-bar
                  v-for="(actual_times, index) in actual_time"
                  :key="index"
                  :value="actual_times"
                  :variant="index % 5 === 0 ? 'warning' : index % 4 === 0 ? 'success' : index % 3 === 0 ? 'danger' : index % 2 === 0 ? 'primary' : index % 1 === 0 ? 'secondary' : 'dark'"
                > -->
                <b-progress-bar
                  v-for="(actual_times, index) in actual_time"
                  :key="index"
                  :value="actual_times"
                  :variant="progress_color"
                >
                  <strong>{{actual_times}}</strong>
                </b-progress-bar>
              </b-progress>
              <br />
            </b-col>
            <!-- <b-col cols="1"> -->
              <!-- <div id="traffic-light">
                  <input type="radio" name="traffic-light-color" id="color1" value="color1" />
                  <input type="radio" name="traffic-light-color" id="color2" value="color2"/>
                  <input type="radio" name="traffic-light-color" id="color3" value="color3" />
              </div>-->
            <!-- </b-col> -->
          </b-row>
        <!-- </div> -->
        <!-- <div class="layoutButton">
          <b-row class="text-center">
            <b-col class="start" cols="3.5">
              <br />
              <label class="m5">Start : {{start_time}}</label>
              <br />
              <br />
            </b-col>
            <b-col class="finish" cols="3.5">
              <br />
              <label class="m5">Finish : {{finish_time}}</label>
              <br />
              <br />
            </b-col>
            <b-col class="diff" cols="3.5">
              <br />
              <label class="m5">Diff : {{S_plan - S_actual}}</label>
              <br />
              <br />
            </b-col>
            <br />
          </b-row>
        </div> -->
        <br />
        <!-- <button v-on:click="Audio5Min ()">Play</button>
        <button v-on:click="Audio3Min ()">Play</button> -->
        <div class="layoutButton">
          <b-row class="text-center">
            <b-col cols="6">
              <b-button
                id="btnConfirmHelp"
                class="buttonConfirmHelp"
                v-on:click="sendConfirmHelp ()">คอนเฟิร์มการช่วยเเหลือ</b-button>
            </b-col>
            <!-- <b-col cols="1"></b-col> -->
            <b-col cols="6">
              <b-button
                id="btnNeedHelp"
                class="buttonNeedHelp"
                v-on:click="sendNeedHelp ()">ต้องการความช่วยเหลือ</b-button>
            </b-col>
            <br />
          </b-row>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- </b-container> -->
  </div>
</template>
<script>
import { connection } from './connection'
export default {
  data () {
    return {
      VIN: '',
      URN: '',
      OPTION_GROUP: '',
      value: [],
      plan_time: [],
      actual_time: [],
      max_plan_time: 0,
      max_actual_time: 0,
      start_time: '',
      finish_time: '',
      diff: '',
      status: '',
      progress_color: '',
      max: 0,
      S_plan: 0,
      S_actual: 0,
      warning_5_mins: false,
      warning_3_mins: false,
      warning_delay: false
    }
  },
  created () {
    let vm = this
    vm.S_plan = 0
    vm.S_actual = 0
    const waitConnect = setInterval(() => {
      if (connection.readyState === 1) {
        connection.send(
          JSON.stringify({ protocol: 'change_page', data: { page: 'C1' } })
        )
        clearInterval(waitConnect)
      }
    }, 100)
    connection.onmessage = function (e) {
      let res = JSON.parse(e.data)
      if (res.protocol === 'pace_maker_info') {
        vm.getData(res)
      }
    }
  },
  updated () {},
  methods: {
    getData (res) {
      let data = res.data
      this.VIN = data.info.vin_no
      this.OPTION_GROUP = data.info.option_group
      this.start_time = data.info.start
      this.finish_time = data.info.finish
      this.diff = data.info.diff
      this.plan_time = data.info.option_std_time_
      this.actual_time = data.info.option_time_
      this.status = data.info.status
      console.log(this.status)
      var sp = 0
      var sa = 0
      for (var i = 0; i < data.info.option_std_time_.length; i++) {
        sp = sp + data.info.option_std_time_[i]
      }
      for (var j = 0; j < data.info.option_time_.length; j++) {
        sa = sa + data.info.option_time_[j]
      }
      this.S_plan = sp
      this.S_actual = sa

      if (this.status !== 'NO_WORKING') {
        if (!this.warning_5_mins && this.S_plan - this.S_actual <= 5) {
          this.Audio5Min()
          this.warning_5_mins = true
        } else if (!this.warning_3_mins && this.S_plan - this.S_actual <= 3) {
          this.Audio3Min()
          this.warning_3_mins = true
        } else if (!this.warning_delay && this.S_plan <= this.S_actual) {
          this.AudioDelay()
          this.warning_delay = true
        }
      }

      document.getElementById('btnConfirmHelp').disabled = true
      document.getElementById('btnNeedHelp').disabled = false

      if (this.status === 'NO_WORKING') {
        // no light
        // this.setNolight()
        this.progress_color = ''
        this.warning_5_mins = false
        this.warning_3_mins = false
        this.warning_delay = false
      } else if (this.status === 'WORKING') {
        //  green
        // this.setGreen()
        this.progress_color = 'success'
      } else if (this.status === 'WARNING') {
        //  yellow
        // this.setYellow()
        this.progress_color = 'warning'
      } else if (this.status === 'DELAY') {
        //  red
        // setRed()
        this.progress_color = 'danger'
      } else if (this.status === 'NEED_HELP') {
        //  yellow
        // this.setYellow()
        this.progress_color = 'warning'
        document.getElementById('btnConfirmHelp').disabled = false
        document.getElementById('btnNeedHelp').disabled = true
      } else if (this.status === 'CONFIRM_HELP') {
        //  green
        // this.setGreen()
        this.progress_color = 'success'
      }
    },
    sendConfirmHelp () {
      console.log('confirm help')
      // connection.onopen = function () {
      // จะทำงานเมื่อเชื่อมต่อสำเร็จ
      // console.log('error connect webSocket')
      connection.send(
        JSON.stringify({
          protocol: 'pace_maker_status',
          data: { bay: 'C1', status: 'CONFIRM_HELP' }
        })
      ) // ส่ง Data ไปที่ Server
    },
    sendNeedHelp () {
      console.log('need help')
      // จะทำงานเมื่อเชื่อมต่อสำเร็จ
      // console.log('connect webSocket')
      connection.send(
        JSON.stringify({
          protocol: 'pace_maker_status',
          data: { bay: 'C1', status: 'NEED_HELP' }
        })
      ) // ส่ง Data ไปที่ Server
    },
    Audio5Min () {
      let fivemin = document.getElementById('fivemin')
      fivemin.play()
      console.log('fivemin')
    },
    Audio3Min () {
      let threemin = document.getElementById('threemin')
      threemin.play()
      console.log('threemin')
    },
    AudioDelay () {
      let delaysound = document.getElementById('delaysound')
      delaysound.play()
      console.log('delaysound')
    },
    setRed () {
      console.log('red')
      document.getElementById('div_main').style.backgroundColor = '#FF0000'
      // document.getElementById('color1').style.animation = '1s step-end infinite'
      // document.getElementById('color1').style.backgroundColor = '#FF0000'
      // document.getElementById('color1').style.boxShadow = '0 0 6em #ff3333'

      // document.getElementById('color2').style.animation = '1s step-end infinite'
      // document.getElementById('color2').style.backgroundColor = '#5e5e00'
      // document.getElementById('color2').style.boxShadow = '0 0 0em transparent'
      // document.getElementById('color3').style.animation = '1s step-end infinite'
      // document.getElementById('color3').style.backgroundColor = '#005f00'
      // document.getElementById('color3').style.boxShadow = '0 0 0em transparent'
    },
    setGreen () {
      console.log('green')
      document.getElementById('div_main').style.backgroundColor = '#00ff00'
      // document.getElementById('color3').style.animation = '1s step-end infinite'
      // document.getElementById('color3').style.backgroundColor = '#00FF00'
      // document.getElementById('color3').style.boxShadow = '0 0 6em #33ff33'

      // document.getElementById('color2').style.animation = '1s step-end infinite'
      // document.getElementById('color2').style.backgroundColor = '#5e5e00'
      // document.getElementById('color2').style.boxShadow = '0 0 0em transparent'

      // document.getElementById('color1').style.animation = '1s step-end infinite'
      // document.getElementById('color1').style.backgroundColor = '#570000'
      // document.getElementById('color1').style.boxShadow = '0 0 0em transparent'
    },
    setYellow () {
      console.log('yellow')
      document.getElementById('div_main').style.backgroundColor = '#FFFF00'
      // document.getElementById('color2').style.animation = '1s step-end infinite'
      // document.getElementById('color2').style.backgroundColor = '#FFFF00'
      // document.getElementById('color2').style.boxShadow = '0 0 6em #ffff33'

      // document.getElementById('color1').style.animation = '1s step-end infinite'
      // document.getElementById('color1').style.backgroundColor = '#570000'
      // document.getElementById('color1').style.boxShadow = '0 0 0em transparent'

      // document.getElementById('color3').style.animation = '1s step-end infinite'
      // document.getElementById('color3').style.backgroundColor = '#005f00'
      // document.getElementById('color3').style.boxShadow = '0 0 0em transparent'
    },
    setNolight () {
      console.log('nolight')
      document.getElementById('div_main').style.backgroundColor = '#FFFFFF'
      // document.getElementById('color2').style.animation = '1s step-end infinite'
      // document.getElementById('color2').style.backgroundColor = '#5e5e00'
      // document.getElementById('color2').style.boxShadow = '0 0 0em transparent'

      // document.getElementById('color1').style.animation = '1s step-end infinite'
      // document.getElementById('color1').style.backgroundColor = '#570000'
      // document.getElementById('color1').style.boxShadow = '0 0 0em transparent'

      // document.getElementById('color3').style.animation = '1s step-end infinite'
      // document.getElementById('color3').style.backgroundColor = '#005f00'
      // document.getElementById('color3').style.boxShadow = '0 0 0em transparent'
    }
  },
  directives: {
    rainbow: {
      bind (el, bind, vnode) {
        if (bind.value % 5 === 0) {
          el.style.background = '#ffc107'
        } else if (bind.value % 4 === 0) {
          el.style.background = '#28a745'
        } else if (bind.value % 3 === 0) {
          el.style.background = '#dc3545'
        } else if (bind.value % 2 === 0) {
          el.style.background = '#007bff'
        } else if (bind.value % 1 === 0) {
          el.style.background = '#6c757d'
        } else {
          el.style.background = '#343a40'
        }
        el.style.color = 'white'
      }
    }
  }
}
</script>
<style scoped src="@/assets/css/pacemaker.css">
/* @import './assets/css/pacemaker.css'; */
</style>
