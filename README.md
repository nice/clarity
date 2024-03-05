# Clarity: Minimal blog theme for Astro!

Demo: https://clarity-astro-theme.netlify.app/

![screenshot-clarity-astro-theme netlify app-2024 03 05-19_13_15](https://github.com/nice/clarity/assets/2760100/c1289b35-73ed-46bb-b4ef-1754484e70fe)

# Features
- ✅ Masonry layout (lightweight version)
- ✅ 3 card types (default, text only, image only)
- ✅ 3 card sizes (small, medium, large)
- ✅ Customizable accent colors (see configuration)
- ✅ Image fade in animation (with. noscript fallback)
- ✅ Good Lighthouse performance
- ✅ SEO-friendly
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ View transitions support (see configuration)

Lighthouse performance

![Screenshot from 2024-03-05 19-12-54](https://github.com/nice/clarity/assets/2760100/69916c37-0575-4457-9a84-b248a2855683)

# Usage
### 1. Clone this repo.
```
git clone git@github.com:nice/clarity.git
```

### 2. Switch to the cloned folder
```
cd clarity/
```

### 3. Install dependencies
```
npm install
```

### 4. Starting development server
```
npm run dev
```

## Building for production
```
npm run build
```

## Configuration

Theme configuration can be found inside `src/consts.ts`

**!!! Important !!!** Please make sure to update the default email ids, site title and descriptions.

You can also change the theme accent colors, menu items and posts per page from the `src/consts.ts` file.

### View transitions

Enable view transitions for Clarity theme with the below few steps

1. Import `ViewTransitions` in `src/layouts/Layout.astro`

```
---
import { ViewTransitions } from 'astro:transitions';
---
```

2. Add the `<ViewTransitions />` tag inside `<head>` of the same file

```
<head>
  <ViewTransitions />
</head>
```

3. Add `transition:animate` attribute to opening `<html>` tag in the same file.

```
<html transition:animate="fade">
</html>
```

4. Add the below Clarity theme specific script just before the closing `</html>` tag in the same file.

```

<!-- other scripts -->

<script>
  document.addEventListener("astro:after-swap", initGrid);
  document.addEventListener("astro:after-swap", initAppear);
</script>
```


# Support
If you need any further help:

Please raise an issue or reach out to `jayaram@gmx.com`

If you want to support development of this and newer themes, you can buy me a coffee.

<a href="https://www.buymeacoffee.com/JayaramPai" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
