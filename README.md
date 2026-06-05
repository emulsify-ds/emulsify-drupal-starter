![Emulsify Design System](https://github.com/emulsify-ds/.github/blob/6bd435be881bd820bddfa05d88905efe29176a0a/assets/images/header.png)

# Emulsify Drupal Starter

**Emulsify Drupal Starter** is the Drupal theme scaffold installed by the Emulsify CLI. It lets teams create an installable Emulsify child theme in a separate Git repository and build the theme outside of a Drupal installation.

This starter is aligned with the current Whisk starter from the Emulsify Drupal base theme. Generated themes target Drupal `^11.3 || ^12`, use Emulsify Core 4, and run Storybook plus theme asset builds through Vite.

## Documentation

[Emulsify CLI Usage](https://www.emulsify.info/docs/supporting-projects/emulsify-cli/emulsify-cli-usage)

## Requirements

- Node.js `>=24`
- Drupal `^11.3 || ^12`
- [Emulsify Drupal base theme](https://www.drupal.org/project/emulsify)
- `drupal/emulsify_tools:^2.0`

### Installation

`emulsify init --platform drupal <name>`

The generated theme is configured as a child theme of the Emulsify Drupal base theme and includes the matching favicon settings schema, Storybook configuration, and Vite-based build scripts.

### Local Development

- `npm run build` builds the theme assets with Vite.
- `npm run develop` runs Vite in watch mode alongside Storybook.
- `npm run storybook-build` builds static Storybook output.


## Demo

1. [Storybook](http://storybook.emulsify.info/)

## Contributing

### [Code of Conduct](https://github.com/emulsify-ds/emulsify-drupal/blob/master/CODE_OF_CONDUCT.md)

The project maintainers have adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

### Contribution Guide

Please also follow the issue template and pull request templates provided. See below for the correct places to post issues:

1. [Emulsify Starter](https://github.com/emulsify-ds/emulsify-drupal-starter/issues)

## Author

Emulsify&reg; is a product of [Four Kitchens &mdash; We make BIG websites](https://fourkitchens.com).

### Contributors

<table>
  <tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/amazingrando>
            <img src=https://avatars.githubusercontent.com/u/409903?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Randy Oest/>
            <br />
            <sub style="font-size:14px"><b>Randy Oest</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/callinmullaney>
            <img src=https://avatars.githubusercontent.com/u/369018?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Callin Mullaney/>
            <br />
            <sub style="font-size:14px"><b>Callin Mullaney</b></sub>
        </a>
    </td>
  </tr>
</table>
