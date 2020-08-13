<template>
      <div>
          <div class="md-modal modal-msg md-modal-transition" :class="{'md-show':mdShow}">
              <div class="md-modal-inner">
                  <div class="md-top">
                      <button class="md-close" @click="closeModal()">关闭</button>
                  </div>
                  <div class="md-content">
                      <div class="confirm-tips">
                        <slot name="message"></slot>
                      </div>
                      <div class="btn-wrap">
                          <slot name="btnGroup">
                          </slot>
                      </div>
                  </div>
              </div>
          </div>
          <div class="md-overlay" v-if="mdShow" @click="closeModal"></div>
      </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['mdShow'],
  methods:{
      closeModal(){
          // console.log(this.mdShow)
          this.$emit('close');
      },

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
