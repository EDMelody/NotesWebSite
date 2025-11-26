<template>
  <div class="rolling-number" :style="{ fontSize: fontSize + 'px' }">
    <ScrollDigit
      v-for="(d, i) in digits"
      :key="i"
      :value="d"
      :font-size="fontSize"
    />
  </div>
</template>

<script>
/* 单个数字滚动组件 */
const ScrollDigit = {
  props: {
    value: { type: Number, required: true },
    fontSize: { type: Number, default: 24 }
  },
  computed: {
    digitStyle() {
      return {
        transform: `translateY(-${this.value * this.fontSize}px)`,
        transition: 'transform 0.3s ease',
      }
    }
  },
  template: `
    <div class="scroll-digit" :style="{ height: fontSize + 'px' }">
      <div class="digit-list" :style="digitStyle">
        <div
          v-for="n in 10"
          :key="n"
          class="digit"
          :style="{
            height: fontSize + 'px',
            lineHeight: fontSize + 'px',
            fontSize: fontSize + 'px'
          }"
        >
          {{ n - 1 }}
        </div>
      </div>
    </div>
  `
}

export default {
  name: "RollingNumber",
  components: { ScrollDigit },

  props: {
    value: { type: [Number, String], required: true },
    fontSize: { type: Number, default: 24 }
  },

  computed: {
    digits() {
      // 强制只保留纯数字串，避免末尾多0的 bug
      return String(this.value)
        .replace(/[^\d]/g, '')
        .split('')
        .map(n => Number(n))
    }
  }
}
</script>

<style scoped>
.rolling-number {
  display: flex;
}

.scroll-digit {
  overflow: hidden;
  display: inline-block;
}

.digit-list {
  display: flex;
  flex-direction: column;
}

.digit {
  text-align: center;
}
</style>