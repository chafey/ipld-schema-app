<template>
  <div>
    <section class="mw7 center ph3" style="height:100px">
      <h1 class="mt4">IPLD Schema Editor</h1>
    </section>
    <SchemaValidator style="height:calc(100% - 100px)"/>
  </div>
</template>

<script>
import SchemaValidator from '../components/SchemaValidator.vue'

export default {
  name: 'home',
  components: {
    SchemaValidator
  },
  data: () => {
    return {
    }
  },
  computed: {
  }
}
</script>
