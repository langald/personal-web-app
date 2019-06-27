<template>
  <!-- Example from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_custom_select -->
  <!--surround the select box with a "custom-select" DIV element. Remember to set the width:-->
  <div class="custom-select">
    <select v-model="selectValue" @change="onSelect()">
      <option value="0">Select car:</option>
      <option value="1">Audi</option>
      <option value="2">BMW</option>
      <option value="3">Citroen</option>
      <option value="4">Ford</option>
      <option value="5">Honda</option>
      <option value="6">Jaguar</option>
      <option value="7">Land Rover</option>
      <option value="8">Mercedes</option>
      <option value="9">Mini</option>
      <option value="10">Nissan</option>
      <option value="11">Toyota</option>
      <option value="12">Volvo</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  data() {
    return {
      selectValue: '11'
    }
  },
  mounted() {
    require('@/utils/custom-select.js')
  },
  methods: {
    onSelect() {
      console.log(this.selectValue)
    }
  }
}
</script>

<style>
/*the container must be positioned relative:*/
.custom-select {
  position: relative;
  font-family: Arial;
  min-width: 150px;
  width: 100%;
}

.custom-select select {
  display: none; /*hide original SELECT element:*/
}

.select-selected {
  background-color: #064683;
}

/*style the arrow inside the select element:*/
.select-selected:after {
  position: absolute;
  content: "";
  top: 50%;
  transform: translateY(-30%);
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
  transition: 0.3s;
}

/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  /* border-color: transparent transparent #fff transparent; */
  transform: translateY(-80%) rotate(-180deg);
}

/*style the items (options), including the selected item:*/
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  position: absolute;
  background-color: #064683;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  max-height: 500px;
  overflow: hidden;
  transition: 0.5s;
}

/*hide the items when the select box is closed:*/
.select-hide {
  max-height: 0;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>


