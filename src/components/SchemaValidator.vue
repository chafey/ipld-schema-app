<template>
  <div>
    Status: <span>{{parseResult}}</span>
    <prism-editor 
      class="schema-validator"
      v-model="schema" 
      :emitEvents=true 
      :lineNumbers=true
      @change="onChange" 
      language="ipldsch">
    </prism-editor>
  </div>
</template>

<script>

import Prism from "prismjs";
//import "prismjs/themes/prism-tomorrow.css"; // tomorrow theme from prismjs
//import "prismjs/themes/prism.css"; // tomorrow theme from prismjs
//import "prismjs/themes/prism-twilight.css"; // twilight theme from prismjs
import "prismjs/themes/prism-okaidia.css"; // twilight theme from prismjs

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
        // e.location.start.line
        // e.location.start.column
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
