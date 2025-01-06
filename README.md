**translate-numbers**

Translate any number into english or vice-versa.

[![CI](https://github.com/mohitagrawal939/translate-numbers/actions/workflows/ci.yml/badge.svg)](https://github.com/mohitagrawal939/translate-numbers/actions/workflows/ci.yml)
[![MIT license](https://img.shields.io/npm/l/express-http-context2)](./LICENSE)

It helps in translating any locale numbers into english or vice-versa.

## **There are two functions to convert :**

```
convertNumbers

convertNumbers('१२३', 'hindi') // Output an String - 123
convertNumbers('一二三', 'japanese') // Output an String - 123
```

```
convertToLanguage

convertToLanguage('123', 'hindi') // Output an String - १२३
convertToLanguage('123', 'japanese') // Output an String - 一二三
```

Currently supports `English` `Spanish` `Hindi` `Japanese` `Chinese`

NOTE - I will be adding more langauges in next coming updates. For anything please drop an mail at *hey@mohitagrawal.xyz*
