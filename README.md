# About
1. This is a base project based on React Reusable components which supports 
2. typescript
3. styling through styled-components 
4. components isolation build preview with storybook
5. publishing monorepo through lerna and conventional commits
6. New package creation through plop
7. js build support for js projects
8. playground support for os where storybook not supported.



# Issues
### ERR_OSSL_EVP_UNSUPPORTED or any issue with storybook run
1. enter `export NODE_OPTIONS=--openssl-legacy-provider`
### If plop command not working
1. enter  `npm i -g plop` to globally install plop and run plop command
### for package publishing 
1. login to your npm account through `npm login` or `yarn login`.
2. add organisation to your account.
3. change the root `package.json` name to `@<organisation_name>/<package_name>` where `<organisation_name> = your organisation name and <package_name> can be any name you want to give to your package`.
4. for private package publish you need to check npm docs.

# Installation
1. Globally install Yarn with `npm i -g yarn`
2. enter `yarn` to install all dev and direct dependencies

# Scripts
## Build all js folder for all packages
`yarn build`
## Bootstrap all common dependencies for all packages 
`yarn bootstrap`
## Remove all js folders for all packages
`yarn clean:js`
## Publish core package with all the inner packages
`yarn publish`
## Run Storybook with all the components
`yarn storybook`
## Build Storybook components
`yarn build-storybook`
## Create a new Package
`plop`


# Links to Useful Docs

## LERNA Monorepo Config
### Links
1. https://javascript.plainenglish.io/managing-javascript-monorepos-with-lerna-building-a-react-icon-library-publishing-to-npm-70855bfb31d9

## PLOP for creating basic package template
### Links
1. https://github.com/plopjs/plop
2. https://stackoverflow.com/questions/73281366/plop-js-template-files-adding-a-root-directory-in-the-destination-folder
3. https://www.npmjs.com/package/plop#addmany

## storybook config 
### Links
1. https://medium.com/@pongsatt/how-to-setup-storybook-in-react-typescript-project-ad2516515919

### OR
1. enter `npx -p @storybook/cli sb init`


### CLI options
1. https://storybook.js.org/docs/react/api/cli-options


