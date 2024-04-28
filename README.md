# Iris Docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)


To test dev build fork, pull, and run this in the root (needs pnpm):
```
pnpm i
pnpm dev
```

## Contributing:

### File Structure

```
.
├── public/
│   ├── favicon.svg
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Content belongs in either `/guides`, `/reference`, `/how_to` within docs, and in its relative subcategory.
Unfinished/Outdated docs are marked with the `Outdated` tag in the warning style.

### How to write:

Write in your own way, and try to use existing pages or ask before adding new ones. For how to write content, follow the guides on [https://diataxis.fr/](https://diataxis.fr/).

### Dictionary:

- Please use full terms, no shortening. EX no `complementary -> comp`.
- Refer to shader packs as `pack` and/ or `packs`.
- If referring to worlds (`world0` and the like), use this syntax: Overworld(`world0`)
- Make headings as succinct as possible to help the reader quickly find the content they need
- Use simple present tense for verbs

### Guides:
Guides walk the user through completing a task (EX creating their first shader). A guide should lead from one outcome to another, and is a multi lesson system of teaching (defined by their folder with multiple pages). They are to be written in a style similar to [tutorials on Diataxis](https://diataxis.fr/tutorials/). Guides are open ended.

A guide should leave the reader feeling comfortable with the topic, and it should leave them in a way that they are able to experiment by themselves.

### How To:
A how to is a singular short article that walks a user through a small problem in their way (EX transforming shadows to screen space or tonemapping). A how to is made to walk a user through a short section of code and does not need to lead from one outcome to another. It is made to increase/create the understanding on a small section of code, and is rarely open ended. The how to should be written similar to [how to guides on Diataxis](https://diataxis.fr/how-to-guides/).

### Reference:
A reference is a docs page. It give objective information on a subject, without moving towards individual use cases. These are often short pages, which are written to provide information about syntax surrounding a line or two of code. These need to be written in a succinct way so that the user can quickly find information. Best practices are located at [references in Diataxis](https://diataxis.fr/reference/)

For uniform references please look at `alphaTestRef` for formatting. The aside found there can be used for any version specific stuff.

### PR's and Commits

PR's May take a while to be added, as they need to be fully verified, and someone needs to add them when there on. 

#### PR/Commit Format (Please Use it in both your commits on your branch and any pr's, makes our lives easy)
(type): (area): description

**Type** is one of these:

- `feat` - new feature
- `fix` - a bug fix
- `chore` - stuff like dependencies
- `mod` - modifies data while being neither a `feat` or a `fix`
- `refactor` - make changes without changing content
- `revert` - revert to a previous commit

**Area** is the affected area(s), either the docs sub area (Uniforms...), the guides category (Beginner...), or the how to (How To).

**Description** is a detailed description of changes. If multiple were made make a multi line list.

## Translations (i18n)
Translations are not yet supported, but once the english version is complete we will begin building out the languages.

## Contributors
- [Iris Docs](https://github.com/IrisShaders/ShaderDoc/tree/master) - Most of the early documentation
- WhyFencePost / WhyFenceCode - The page and a lot of the data transfer