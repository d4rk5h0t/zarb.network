---
id: run-docker
title: Using Docker
---

# Using Docker

## 🐳 What is Docker

::: quote

Docker is a tool designed to make it easier to create, deploy, and run applications by using
containers. Containers allow a developer to package up an application with all of the parts it
needs, such as libraries and other dependencies, and deploy it as one package. In a way, Docker is a
bit like a virtual machine, but it isn't!

::: right

From [OpenSource.com](https://opensource.com/resources/what-docker)

:::

## Requirement

The only thing you need is [installing docker](https://docs.docker.com/get-docker/) in your machine.

## Docker images

The Zarb docker images are available at [Docker Hub](https://hub.docker.com/r/zarb/zarb).

You can pull the latest image by this command:

```
docker pull zarb/zarb
```

## Running Zarb using Docker

Let's run the Zarb and join the TestNet. First we need to create a workspace for the TestNet.

:::: tabs type:border-card

::: tab PowerShell Windows ⊞

Creating workspace at `$HOME\zarb\testnet`:

```
docker run -it --rm -v $HOME\zarb\testnet:/zarb zarb/zarb init -w /zarb --testnet
```

:::

::: tab 🐧 Linux and 🍏 Mac

Creating workspace at `~/zarb/testnet`:

```
docker run -it --rm -v ~/zarb/testnet:/zarb zarb/zarb init -w /zarb --testnet
```

:::

::::

Now you can join the TestNet.

:::: tabs type:border-card

::: tab PowerShell Windows ⊞

```
docker run -it -v $HOME\zarb\testnet:/zarb -p 8080:8080 --name zarb-testnet zarb/zarb start -w /zarb
```

:::

::: tab 🐧 Linux and 🍏 Mac

```
docker run -it -v ~/zarb/testnet:/zarb -p 8080:8080 --name zarb-testnet zarb/zarb start -w /zarb
```

:::

::::

Now you can check "[http://localhost:8080](http://localhost:8080)" for the list of APIs.

You can also stop/start the docker container:

```
docker stop zarb-testnet
docker start zarb-testnet
```

## Key generation and inspection

You can use docker to generate new keys or inspect them:

:::: tabs type:border-card

::: tab PowerShell Windows ⊞

```
docker run -i --rm -v $HOME\zarb\:/zarb zarb/zarb key generate -p /zarb/keystore/private_key_1.json
```

:::

::: tab 🐧 Linux and 🍏 Mac

```
docker run -i --rm -v ~/zarb/:/zarb zarb/zarb key generate -p /zarb/keystore/private_key_1.json
```

:::

::::

This command will generate a new key and save it at: `~/zarb/keystore/`

You can also inspect a key:

:::: tabs type:border-card

::: tab PowerShell Windows ⊞

```
docker run -i --rm -v $HOME\zarb\:/zarb zarb/zarb key inspect /zarb/keystore/private_key_1.json
```

:::

::: tab 🐧 Linux and 🍏 Mac

```
docker run -i --rm -v ~/zarb/:/zarb zarb/zarb key inspect /zarb/keystore/private_key_1.json
```

:::

::::

If you want to see the private key, run inspect command with `-e` flag. Run this flag with great
caution.

:::: tabs type:border-card

::: tab PowerShell Windows ⊞

```
docker run -i --rm -v $HOME\zarb\:/zarb zarb/zarb key inspect -e /zarb/keystore/private_key_1.json
```

:::

::: tab 🐧 Linux and 🍏 Mac

```
docker run -i --rm -v ~/zarb/:/zarb zarb/zarb key inspect -e /zarb/keystore/private_key_1.json
```

:::

::::

Discover more 🧐
