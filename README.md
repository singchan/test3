[This repository](https://github.com/lexoyo/11ty-boilerplate) is a template you can use to create a site with [11ty](https://11ty.dev) and [Silex website builder](https://www.silex.me)

It conains an action to deploy on github pages automatically

Here is how to start:

1. Fork [this repository](https://github.com/lexoyo/11ty-boilerplate) or click "use this template" (/!\ be sure to select "Include all branches")
1. \[If you host on github pages\] Create a [deploy token here](https://github.com/settings/tokens) with the access write `public_repo`. [Then go to the settings of the website, in the "secret" section create a new secret](../../settings/secrets/actions/new), call it `DEPLOY_TOKEN` and paste the token as its value 
1. \[Or if you deploy to Netlify\] Add the repo to Netlify as a new website
1. \[If you host on github pages\] [In the settings of the website, "secret" section, create a new secret](../../settings/secrets/actions/new), call it `BASE_URL` and set its value to the name of your repository (e.g. `11ty-boilerplate`)
1. Create a website with [Stastic designer](https://design.stastic.net/) based on any template
1. Publish your site from Stastic designer to github as 11ty layout
1. Edit the file [index.md](./index.md), add `layout: YOUR_PAGE_NAME_IN_STASTIC` in the front matter like this:

```md
---
permalink: /
layout: home
---

any content here

don't forget to replace `home` with the page name in Stastic
```

