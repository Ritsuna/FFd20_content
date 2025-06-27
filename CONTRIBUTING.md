# How to Contribute

If you want to contribute changes to the module there are two options:

1. Using the module's contribution server to maintain the changes directly within FoundryVTT (see [Readme](https://gitlab.com/foundryvtt_pathfinder1e/pf1-content/-/blob/main/README.md?ref_type=heads#how-to-contribute))
2. Working locally and submitting a Merge Request (MR) via git

The relevant details for developers working localy are described below.

## Contribute via MR

Contributions via gitlab merge requests follow a standard gitlab workflow. You will fork the repository, add/modify the items with the help of a script (or manual editing, or in Foundry, .etc), and submit your merge request for review. The [Gitlab Docs](https://docs.gitlab.com/ee/user/project/merge_requests/) page has an overview of the workflow if you aren't familiar with it.

### Packing / Building packs

The ffd20-Content module utilizes foundry CLIs standard packing and unpacking functions.

If you want to build your packs locally to make changes directly within FoundryVTT, you can do so by executing one of the following:
`npm run pack "your folder name here"` to build a specific compendium or
`npm run pack` to build all.

This will create the necessary db files in the release/packs folder.
(It is recommended to create a symlink between your release folder and your module folder for seemless integration of git and FoundryVTT)

Afterwards you can directly edit items of the module within Foundry.

### Unpacking / Extracting packs

After your changes have been made within Foundry, you can run the following:

`npm run unpack "your folder name here"` or `npm run unpack` to extract your changes to the YAML source files.

This will extract your edited compendium into the matching folder in `src`, from which git can check for changes.

#### Getting items ready

When you're contributing items to the module they need to be setup appropriately for generic use by others.

- Only use icons provided by Foundry, this module, or PF1E system
- Don't use external links in descriptions or notes
- Take a minute to fill in price, hardness, weight and other values if applicable
- Prefer descriptions from [Archive of Nethys](https://aonprd.com/) when available for consistency

### Item renaming

Every item in the database has a unique id field `_id` at the top level of the YAML structure. When new items are inserted a new `_id` is generated, if you want to keep the original entry's id so that existing games using the item get the updates rather than a new item, you need to preserve this ID.

If you want to change the casing of certain items from lower case to upper case or vice verca you need to run unpacking / extraction with the following parameter:
`npm run unpack "your folder name here" cleanSrc true` or `npm run unpack cleanSrc true`
by default git does not recognise changes in casing of filenames. If you want to adjust the casing of an item, please set `git config core.ignorecase false`
