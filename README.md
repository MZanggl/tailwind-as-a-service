# Tailwind as a service

Wrap your favorite routing library, deploy and off you go.

## Purging

To `purge` raw content and not files, pass it into the function like in the following example. This will override the purge setting on tailwindConfig (for things like live code editors).

```javascript
const purge = [
  { raw: '<div class="bg-green-400">...</div>', extension: 'html' }
]

compile({ inputCSS: '...', tailwindConfig: '...', purge })
```