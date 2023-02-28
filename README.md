# LERNA Monorepo Config
## Links
1. https://javascript.plainenglish.io/managing-javascript-monorepos-with-lerna-building-a-react-icon-library-publishing-to-npm-70855bfb31d9

# PLOP for creating basic package template
## Links
1. https://github.com/plopjs/plop
2. https://stackoverflow.com/questions/73281366/plop-js-template-files-adding-a-root-directory-in-the-destination-folder
3. https://www.npmjs.com/package/plop#addmany

# storybook config 
## Links
1.https://medium.com/@pongsatt/how-to-setup-storybook-in-react-typescript-project-ad2516515919

## Issues
### ERR_OSSL_EVP_UNSUPPORTED
1. enter `export NODE_OPTIONS=--openssl-legacy-provider`


# Scripts
## Build all js folder for all packages
`yarn build`
## Bootstrap all common dependencies for all packages 
`yarn bootstrap`
## Remove all js folders for all packages
`yarn clean:js`
## Publish core package with all the inner packages
`yarn publish`