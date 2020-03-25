
// based on https://github.com/ipld/specs/blob/master/.vuepress/highlight.js

export default {
  record: {
    pattern: /\b(advanced|type)\b/,
    alias: 'keyword'
  },
  schemaKinds: {
    pattern: /\b(struct|union|enum)\b/,
    alias: 'keyword'
  },
  schemaKindCopy: {
    pattern: /=/,
    alias: 'operator'
  },
  dataModelKinds: {
    pattern: /\b(Null|null|Bool|bool|Int|int|Float|float|String|string|Bytes|bytes|Link)\b/,
    alias: 'keyword'
  },
  fieldParameters: {
    pattern: /\b(rename|implicit)\b/,
    alias: 'keyword'
  },
  number: /\b-?\d+\.?\d*(?:e[+-]?\d+)?\b/i,
  punctuation: /[(){}:[\]|&]/,
  string: {
    pattern: /(")(?:\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true
  },
  comment: {
    pattern: /(^|[^"])#.*/,
    lookbehind: true,
    greedy: true
  },
  valueTypeModifiers: {
    pattern: /\b(nullable|optional|implicit)\b/,
    alias: 'keyword'
  },
  typeRepresentation: {
    pattern: /\b(representation)\b/,
    alias: 'keyword'
  },
  structRepresentations: {
    pattern: /\b(map|tuple|stringpairs|stringjoin|listpairs)\b/,
    alias: 'keyword'
  },
  mapRepresentations: {
    pattern: /\b(map|stringpairs|listpairs|keyed|envelope|inline|byteprefix)\b/,
    alias: 'keyword'
  },  
  unionRepresentations: {
    pattern: /\b(keyed|kinded|envelope|inline|byteprefix)\b/,
    alias: 'keyword'
  },
  enumRepresentations: {
    pattern: /\b(string|int)\b/,
    alias: 'keyword'
  },
  typeName: {
    pattern: /\b[A-Z][a-zA-Z0-9_]*\b/,
    alias: 'class-name'
  },
  property: {
    pattern: /\b[a-z][a-zA-Z0-9_]*\b/,
    alias: 'property'
  }
}
