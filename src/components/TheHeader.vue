<template>
  <div class="app-header">
      <b-container fluid>
          <b-row>
              <b-col cols="12">
                  <div class="grid">

                  </div>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-header
.grid{
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
}
</style>