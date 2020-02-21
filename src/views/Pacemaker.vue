<template>
  <div>
    <b-container style="padding: 0;">
    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1,minimal-ui" name="viewport" />
    <audio id="fivemin">
      <source src="@/assets/audio/5min.mp3" type="audio/mpeg" muted />
    </audio>
    <audio id="threemin">
      <source src="@/assets/audio/3min.mp3" type="audio/mpeg" muted />
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
            <div class="fontVO">VIN : {{ vin_no }}</div>
            <br />
          </b-col>
          <b-col class="layoutVO" cols="6">
            <br />
            <div class="fontVO">OPTION GROUP : {{option_group}}</div >
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
                <div id="sum_plan" class=" m5 fontPA">{{sum_plan}}</div>
              </div> -->
            <!-- </b-col> -->
            <b-col cols="12">
              <div>
                <div class="layoutPA">
                  <div class="m5 fontPA">
                    PLAN :
                  </div>
                  <div id="sum_plan" class=" m5 fontPA">{{str_sum_plan}}</div>
                </div>
              </div>
              <br />
              <b-progress
                class="mb-3"
                :max="sum_plan"
                height="6rem"
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
                  <!-- <strong>{{actual_times}}</strong> -->
                </b-progress-bar>
              </b-progress>
              <br />
              <div>
                <div class="layoutPA">
                <div class="m5 fontPA">
                  ACTUAL :
                </div>
                <div id="sum_actual" class="m5 fontPA">{{str_sum_actual}}</div>
              </div>
              </div>
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
                :max="sum_plan"
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
                <div id="sum_actual" class="m5 fontPA">{{sum_actual}}</div>
              </div> -->
            <!-- </b-col> -->
            <b-col cols="12">
              <!-- <br /> -->
              <!-- <div>
                <div class="layoutPA">
                <div class="m5 fontPA">
                  ACTUAL :
                </div>
                <div id="sum_actual" class="m5 fontPA">{{str_sum_actual}}</div>
              </div>
              </div> -->
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
              <label class="m5">Diff : {{sum_plan - sum_actual}}</label>
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
          <br>
        </div>
      </div>
    </div>
    </b-container>
  </div>
</template>
<script>
// import { connection } from './connection'
export default {
  data () {
    return {
      bay: '',
      vin_no: '',
      urn: '',
      option_group: '',
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
      sum_plan: 0,
      str_sum_plan: '',
      sum_actual: 0,
      str_sum_actual: '',
      warning_5_mins: false,
      warning_3_mins: false,
      warning_delay: false,
      connection: null
    }
  },
  created () {
    this.bay = this.$route.query.bay
    this.connect()
    // setInterval(() => {
    //   if (this.connection.readyState === 1) {
    //     this.connection.send(
    //       JSON.stringify({ protocol: 'change_page', data: { page: 'C1' } })
    //     )
    //   }
    // }, 1000)
  },
  updated () {},
  methods: {
    connect () {
      let vm = this

      this.connection = new WebSocket('ws://localhost:1308')
      this.connection.onopen = function () {
        // subscribe to some channels
        vm.connection.send(
          JSON.stringify({ protocol: 'change_page', data: { page: vm.bay } })
        )
      }

      this.connection.onmessage = function (e) {
        // console.log('Message:', e.data)
        let res = JSON.parse(e.data)
        if (res.protocol === 'pace_maker_info') {
          vm.getData(res)
        }
      }

      this.connection.onclose = function (e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason)
        setTimeout(function () {
          vm.connect()
        }, 1000)
      }

      this.connection.onerror = function (err) {
        console.error('Socket encountered error: ', err.message, 'Closing socket')
        vm.connection.close()
      }
    },
    getData (res) {
      let data = res.data
      this.vin_no = data.info.vin_no
      this.option_group = data.info.option_group
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
      this.sum_plan = sp
      this.sum_actual = sa
      this.str_sum_plan = this.toHmmss(sp)
      this.str_sum_actual = this.toHmmss(sa)
      if (this.status !== 'NO_WORKING') {
        if (!this.warning_delay && this.sum_plan <= this.sum_actual) {
          this.AudioDelay()
          this.warning_delay = true
          this.warning_3_mins = true
          this.warning_5_mins = true
        } else if (!this.warning_3_mins && this.sum_plan - this.sum_actual <= 180) {
          this.Audio3Min()
          this.warning_3_mins = true
          this.warning_5_mins = true
        } else if (!this.warning_5_mins && this.sum_plan - this.sum_actual <= 300) {
          this.Audio5Min()
          this.warning_5_mins = true
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
      this.connection.send(
        JSON.stringify({
          protocol: 'pace_maker_status',
          data: { bay: this.bay, status: 'CONFIRM_HELP' }
        })
      ) // ส่ง Data ไปที่ Server
    },
    sendNeedHelp () {
      console.log('need help')
      // จะทำงานเมื่อเชื่อมต่อสำเร็จ
      // console.log('connect webSocket')
      this.connection.send(
        JSON.stringify({
          protocol: 'pace_maker_status',
          data: { bay: this.bay, status: 'NEED_HELP' }
        })
      ) // ส่ง Data ไปที่ Server
    },
    Audio5Min () {
      let fivemin = document.getElementById('fivemin')
      fivemin.muted = false
      fivemin.play()
      console.log('fivemin')
    },
    Audio3Min () {
      let threemin = document.getElementById('threemin')
      threemin.muted = false
      threemin.play()
      console.log('threemin')
    },
    AudioDelay () {
      let delaysound = document.getElementById('delaysound')
      delaysound.muted = false
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
    },
    toHmmss (sec) {
      var hours = Math.floor(sec / 3600)
      var minutes = Math.floor((sec - (hours * 3600)) / 60)
      var seconds = sec - (hours * 3600) - (minutes * 60)
      if (minutes < 10) { minutes = '0' + minutes }
      if (seconds < 10) { seconds = '0' + seconds }
      return hours + ':' + minutes + ':' + seconds
    }
  }
}
</script>
<style scoped src="@/assets/css/pacemaker.css">
/* @import './assets/css/pacemaker.css'; */
</style>
