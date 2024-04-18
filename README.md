project to test new LOCALLY @wttsolutions/eslint-config(see package.json->resolutions)



# self-creation

```
yarn link ../eslint-config
yarn add @wttsolutions/eslint-config@*

?
yarn remove @yarnpkg/extensions

// to make possible to upgrade all packages:
yarn add --dev yarn-upgrade-all

```

# Notes
- eslint seems like can check jsx files WITHOUT installing React


# how to upgrade all packages
```
yarn yarn-upgrade-all
```

# Install peer deps

npx check-peer-dependencies --findSolutions
