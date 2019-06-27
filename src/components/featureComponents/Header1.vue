<template>
  <div class="header1">
    <div class="header1-section">Logo</div>
    <div class="header1-section">
      <custom-select />
    </div>
    <div class="header1-section">
      <search-input />
    </div>
  </div>
</template>

<script>
import CustomSelect from '@/components/featureExamples/CustomSelect.vue'
import SearchInput from '@/components/featureExamples/SearchInput.vue'

export default {
  name: 'Header1',
  components: { CustomSelect, SearchInput }
}
</script>

<style scoped lang="sass">
@import "@/assets/styles/settings.scss"

.header1
  background: #008eff
  color: #fff
  padding: 10px
  display: flex
  align-items: center
  flex-direction: column
  @media only screen and(min-width: $sm-screen)
    flex-direction: row
    justify-content: space-between
  &-section
    padding: 10px
</style>

