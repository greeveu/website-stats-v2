![Greev.eu Banner](https://raw.githubusercontent.com/greeveu/website-stats-v2/master/banner.png)

Greev.eu is a Minecraft minigame server, owned and operated by MrKavatch. It boasts a unique player count of over 600,000 players. Both minigame and player statistics are continually tracked and can be accessed via a comprehensive [REST API](https://api.greev.eu/v2/swagger-ui/index.html).

The introduction of [Stats V2](https://greev.eu/stats/) is intended to supersede an existing front end, offering a smoother and more polished user experience for players who want to explore and benchmark their statistics.

[Feel free to explore your statistics here](https://greev.eu/stats/)

# Developing

Stats V2 uses `Typescript` with `React 18` as the frontend framework, `AntD` as the design library, with `SASS` as the CSS preprocessor, and MobX to enhance React state management. Dev server and bundling are done by VITE.

- Run `yarn install` in the package root to install all NPM dependencies
- Navigate to the `/packages/stats` workspace
- Run `yarn dev` to start a local development server

# Building & Deployment

- Navigate to the `/packages/stats` workspace
- Run `yarn build` to build the project
- Deploy the `dist` folder to a web server of your choice
- Make sure to add rewrites to `index.html` for proper routing

# Technical Concept

Since all the 34 minigame statistics have nearly the same structure, a generative approach is used. Each minigame is defined in a schema file which is then used to generate tiles, routing, pages, input options, and the resulting data display.

All schema files for minigames are in the `resources/minigames` folder.

## Add a Minigame

Minigames can be added in the `**.schema.ts` files, respective of their category (featured, minigame, or misc). A shortened example schema might look as follows:

```
{
    type: MinigameType.Minigame,
    link: 'mlgrush',
    title: 'MLG Rush',
    image: mlgrush,
    api: {
        type: ApiType.Normal,
        data: {
            name: {
                display: 'Player',
                renderMethod: RenderMethod.Player,
            },
            wins: {
                display: 'Wins',
                renderMethod: RenderMethod.Raw,
            },
        },
        endpoint: '/stats/mlgrush/top',
    },
}
```

The data object defines how the received data is formatted and displayed in the UI. Here we display a player name and a number of wins.

```
data: {
    name: {
        display: 'Player',
        renderMethod: RenderMethod.Player,
    },
    wins: {
        display: 'Wins',
        renderMethod: RenderMethod.Raw,
    },
}   
```

You can also define input options that the user can select. Here is a quick example of Fastbridge to select different maps.

```
options: {
    map: {
        type: OptionType.Select,
        display: 'Map',
        default: 'CUBES',
        options: {
            CUBES: 'Cubes',
            RAILS: 'Rails',
            STREET: 'Street',
            CORAL: 'Coral',
            ATHEN: 'Athen',
        },
    },
},
```

The key of the option (prefixed with a colon) will be used to replace the value in the endpoint.

```
type: ApiType.Normal,
endpoint: '/stats/fastbridge_islands/top/:map',
```

## Add a Minigame Group

Minigame groups are basically just single tiles that contain multiple minigames. They are used if there are small variations of a minigame (e.g. different modes).

They contain an array with all variations of the minigame in the above format, with the addition of a subtitle to better differentiate between them.

```
{
    type: MinigameType.Gamegroup,
    link: 'spleef',
    title: 'Spleef',
    subTitle: '2 Modes',
    minigames: [
        {
           // Complete Minigame Definition of Normal Spleef
           subtitle: 'Normal',
        },
        {
            // Complete Minigame Definition of Bow Spleef
            subtitle: 'Bow Spleef',
        },
    ],
}
```

## Add a Player Statistic

Specific player statistics (player performance, tokens, login streak, and online time) are hardcoded into the player page.

Minigame statistics are generated from a schema file you can find at `resources/players/players.schema.ts`.

They follow the same manner as minigame schemas regarding data display but have more suited rendering methods tailored to them.

```
{
    bowspleef: {
        type: StatType.Single,
        title: 'Bowspleef',
        stats: {
            wl: {
                display: '',
                renderMethod: RenderMethod.WinsLosesRow,
            },
        },
    },
}
```

## Add a Badge

You find the schema for badges in `resources/badges/badges.schema.ts`. Since badges are basically just Minecraft items, with text already provided by the API, you just have to provide an image and a background glow for readability.

```
{
    [Item.SIGN]: {
        image: oak_sign,
        glow: Glow.Brown,
    },
}
```
