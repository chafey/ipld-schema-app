<template>
  <div>
    <section class="mw7 center ph3">
      <h1 class="mt4">IPLD Schema Validator</h1>
      <p class="f4 fw5 lh-copy ma0 pb3">
      Paste IPLD schema below
      </p>
    </section>
    <SchemaValidator/>
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
