# **UPDATES**

See updates in the main repo's (README)[https://github.com/puntonim/residenza-antico-mulino-monorepo/blob/main/README.md].

# **residenzaanticomulino.it**

Residenza Antico Mulino frontend for the web app deployed at:

- https://residenzaanticomulino.it
- https://puntonim.github.io/residenzaanticomulino.it

With HTML and vanilla JavaScript.

# IMPORTANT

This source code resides in the private repo: https://github.com/puntonim/residenza-antico-mulino-monorepo.
Do not ever checkout and push code to https://github.com/puntonim/residenzaanticomulino.it/ but instead use
the private repo.

## So why does this repo even exist?

Since GitHub Pages can only exist in free _public_ repos then when deploying the
frontend, the FE code is force-pushed to this public repo.

# Urls

- https://residenzaanticomulino.it
- https://puntonim.github.io/residenzaanticomulino.it

## DNS Record at Aruba

```
@ 1800 IN A 185.199.108.153
@ 1800 IN A 185.199.109.153
@ 1800 IN A 185.199.110.153
@ 1800 IN A 185.199.111.153
www 1800 IN CNAME residenzaanticomulino.it.
```

# FE Deployment

```shell
$ make deploy
```

# Copyright

Copyright Residenza Antico Mulino and puntonim (https://github.com/puntonim). No License.
