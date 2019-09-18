![GitHub package.json version](https://img.shields.io/github/package-json/v/vilaboim/vueggernaut)
![David](https://img.shields.io/david/vilaboim/vueggernaut)
![GitHub](https://img.shields.io/github/license/vilaboim/vueggernaut)

# Vueggernaut

## An unstoppable Vue boilerplate

The main goal of **Vueggernaut** is to set patterns to be followed on Vue projects. *Inspired by [Juggernaut](https://github.com/SoftboxLab/juggernaut)*.

<p align="center" style="margin: 0 auto 40px; height: 200px">
	<img src="src/assets/images/vueggernaut.gif" />
  <br />
  Gif by <a href="https://dribbble.com/Reuno" target="_blank">Reuno</a>
</p>

## Startup

Step by step to get this up and running

### Clone repo and go to project folder

> git clone https://github.com/vilaboim/vueggernaut.git && cd vueggernaut

### Install dependencies

```bash
yarn
```

### Start server

```bash
yarn start
```

## Patterns

These are some of patterns definitions to help us to keep a default configuration and front-end arquitecture.

- NPM or Yarn? `npm` has a known issue with hoisted packages ([here](https://npm.community/t/packages-with-peerdependencies-are-incorrectly-hoisted/4794)), that is the reason we use `yarn`.
- UI Kit library? TODO
- Linter: If You don't use [Gandalf Lint Vue](https://github.com/SoftboxLab/gandalf-lint-vue), you shall not pass.
- Do you want a component pattern? [Get here](src/containers/HelloWorld/index.jsx)

### Project structure

- **src/assets**: Static files (images, fonts and icons);
- **src/components**: Components to be shared and reused in the project;
- **src/common**: TODO
- **src/containers**: Page components that apply business knowledge and present themselves as pages;
- **src/routes**: Routes of the app to be used by SPA and user navigation;
- **docs**: TODO

## References

This project was bootstrapped with [Vue CLI](VUE_CLI.md).

## License

MIT License

Copyright (c) 2019 Lucas Vilaboim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
