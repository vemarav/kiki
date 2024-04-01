# Kiki and Tombo courier service

For technical specification please [read here](https://github.com/vemarav/kiki/blob/main/TECH_SPEC.md)

> Note: Currently errors are not handled and expects the valid input from the user. It doesn't give descriptive errors to fix the input

## Background

Kiki, a first-time entrepreneur from the city of Koriko has decided to open a small distance courier service to deliver packages, with her friend Tombo and cat Joji.

Kiki has invested in N no. of vehicles and have driver partners to drive each vehicle & deliver packages.

Before we begin how we can leverage this CLI tool, we need to setup everything needed. Just follow simple steps to install:

## Clone repo

```sh
git clone https://github.com/vemarav/kiki.git
cd kiki
```

## Install `kiki, tombo` commands

```sh
npm install    # install required node_modules/npm packages
npm test       # this will ensure everything is intact and ready to use
npm run build  # generate bundles to install
npm link       # it will install kiki, tombo commands
```

## Problem 01

Delivery Cost Estimation with Offers

```sh
kiki "100 3
PKG1 5 5 OFR001
PKG2 15 5 OFR002
PKG3 10 100 OFR003"
```

## Problem 02

Delivery Time Estimation

```sh
tombo "100 5
PKG1 50 30 OFR001
PKG2 75 125 OFFR0008
PKG3 175 100 OFFR003
PKG4 110 60 OFFR002
PKG5 155 95 NA
2 70 200"
```

If the commands fail to work please create an issue [here](https://github.com/vemarav/kiki/issues/new)

> Author: [@vemarav](https://github.com/vemarav)
