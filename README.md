# turbopack-shiki-issue

A reproduction repo for an issue of Turbopack and shiki.

## Reproduction Steps

1. `npm install`
2. `npm run dev` (it works as expected WITHOUT `--turbo` flag)
3. `npm run dev-turbo` (it DOESN'T work WITH `--turbo` flag. It shows the following error.)

```
Package shiki (serverExternalPackages or default list) can't be external
The request shiki matches serverExternalPackages (or the default list), but it can't be external:
The package seems invalid. require() resolves to a EcmaScript module, which would result in an error in Node.js.
```