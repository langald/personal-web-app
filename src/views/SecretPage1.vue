<template>
  <div class="container">    
    <h1>This is SecretPage1</h1>  
    <p>{{moduleA_item1}}</p> 
    <p>{{$t("greeting")}} {{$t("name")}}</p> 
    <ButtonSlider :msg="buttonMsg" @btnClick="onButtonSliderClick" />
    <br>
    <br>
    <br>
    <v-select v-model="selected" :options="options"></v-select>
    <br>
    <br>
    <br>
    <p>more of usage vue-smooth-picker in vpluse project</p>
    <smooth-picker ref="smoothPicker" :data="data" :change="dataChange" />
    <button class="button" type="button" @click="confirm">Confirm</button>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import ButtonSlider from "@/components/ButtonSlider";
import vSelect from "vue-select";

import "vue-smooth-picker/dist/css/style.css";
import { SmoothPicker } from "vue-smooth-picker";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "SecretPage1",
  components: {
    ButtonSlider,
    "v-select": vSelect,
    "smooth-picker": SmoothPicker,
  },
  data() {
    const nowYear = new Date().getFullYear();
    const years = [];
    for (let i = 1960; i <= nowYear; i++) {
      years.push(i);
    }

    return {
      buttonMsg: "Button",
      selected: "",
      options: [{ label: "foo", value: "Foo" }],
      data: [
        {
          currentIndex: parseInt((nowYear - 1991) / 2),
          flex: 3,
          list: years,
          textAlign: "center",
          className: "row-group",
        },
        {
          currentIndex: 8,
          flex: 3,
          list: [...Array(12)].map((m, i) => i + 1),
          textAlign: "center",
          className: "row-group",
        },
        {
          currentIndex: 1,
          flex: 3,
          list: [...Array(30)].map((d, i) => i + 1),
          onClick: this.clickOnDay,
          textAlign: "center",
          className: "item-group",
        },
      ],
    };
  },
  watch: {
    selected: function() {
      console.log(this.selected.value);
    },
  },
  created() {
    console.log(1);
    console.log(
      'Доступ к текущему переводу из скрипта this.$t("greeting") ' +
        this.$t("greeting")
    );

    console.log("\n------- Getters arguments ----- ");
    console.log("getters moduleA_item1 " + this.moduleA_item1);
    console.log("getters moduleA_item2 " + this.moduleA_item2);
    console.log("getters moduleB_item3 " + this.moduleB_item3);
    console.log("getters moduleB_item4 " + this.moduleB_item4);

    console.log(
      "getters moduleB_moduleBGetter " +
        JSON.stringify(this.moduleB_moduleBGetter)
    );

    this.moduleBAction("My payload");
    this.rootAction("New payload");
  },
  computed: {
    ...mapGetters("moduleA", {
      moduleA_item1: "item1",
      moduleA_item2: "item2",
    }),
    ...mapGetters("moduleB", {
      moduleB_item3: "item3",
      moduleB_item4: "item4",
      moduleB_moduleBGetter: "moduleBGetter",
    }),
    translatedItem() {
      return this.$t("greeting");
    },
  },
  methods: {
    ...mapActions("moduleB", {
      moduleBAction: "moduleBAction",
    }),
    ...mapActions({
      rootAction: "rootActionY",
    }),
    onButtonSliderClick() {
      this.buttonMsg = "You clicked!";
    },
    isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    },
    dataChange(gIndex, iIndex) {
      console.info("list", gIndex, iIndex);
      const ciList = this.$refs.smoothPicker.getCurrentIndexList();
      if (gIndex === 0 || gIndex === 1) {
        // year or month changed
        let currentIndex = 15;
        let monthCount = 30;
        let month = iIndex + 1; // month
        if (gIndex === 0) {
          // year
          month = this.data[1].list[ciList[1]];
        }
        switch (month) {
          case 2:
            let selectedYear = this.data[0].list[ciList[0]]; // month
            if (gIndex === 0) {
              // year
              selectedYear = this.data[0].list[iIndex];
            }
            let isLeapYear = false;
            if (this.isLeapYear(selectedYear)) {
              isLeapYear = true;
            }
            monthCount = 28;
            currentIndex = 14;
            if (isLeapYear) {
              monthCount = 29;
              currentIndex = 15;
            }
            break;
          case 4:
          case 6:
          case 9:
          case 11:
            monthCount = 30;
            currentIndex = 15;
            break;
          default:
            monthCount = 31;
            currentIndex = 16;
        }
        const list = [...Array(monthCount)].map((d, i) => i + 1);
        this.$refs.smoothPicker.setGroupData(2, {
          ...this.data[2],
          ...{ currentIndex, list },
        });
      }
    },
    clickOnDay(gIndex, iIndex) {
      window.alert("Clicked day: " + this.data[gIndex].list[iIndex]);
    },
    confirm() {
      const ciList = this.$refs.smoothPicker.getCurrentIndexList();
      const year = this.data[0].list[ciList[0]];
      const month = this.data[1].list[ciList[1]];
      const day = this.data[2].list[ciList[2]];
      window.alert(year + " / " + month + " / " + day);
    },
  },
};
</script>
<style>
.v-select .dropdown-menu {
  height: 100px;
}
.v-select .dropdown-toggle .clear {
  display: none;
}
</style>
