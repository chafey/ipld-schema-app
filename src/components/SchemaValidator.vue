<template>
  <div>
    <prism-editor 
      :code="schema" 
      :emitEvents=true 
      :lineNumbers=true
      @change="onChange" 
      language="ipldsch">
    </prism-editor>
    <span>{{parseResult}}</span>
  </div>
</template>

<script>

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // tomorrow theme from prismjs

import PrismEditor from 'vue-prism-editor'
import "vue-prism-editor/dist/VuePrismEditor.css"; // import the styles

import defaultSchema from '../utils/schema'
import ipldsch from '../utils/prism.ipld'
import Schema from 'ipld-schema'

Prism.languages.ipldsch = ipldsch

export default {
  name: 'SchemaValidator',
  components: {
    PrismEditor
  },
  data: () => {
    return {
      schema: defaultSchema,
      parseResult:'parse success'
    }
  },
  methods: {
    onChange(code) {
      // attempt to reparse the schema everytime it changes so we can display any errors to the user
      try {
        new Schema(code)
        this.parseResult = 'parse success'
      } catch(e) {
        this.parseResult = e.message
        console.log('LOG:', e.message)
      }
    }
  },
  computed: {
  }
}
</script>

<style>
</style>