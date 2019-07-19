# Dota 2 to League of Legends
## [d2league.fun](https://www.d2league.fun)

Mini app that suggest League champions based on selected Dota 2 heroes.

![alt tag](https://a.radikal.ru/a08/1907/63/5c127a91a2fb.png)

To run locally:

```
bundle install
yarn install
rails db:setup
rails s

# In other terminal
./bin/webpack-dev-server

# See localhost:3000
```

Champion similarities (basically connections between Dota and League champs) are located in *db/similarities.json*. Format:
```
{
  "name": "Earthshaker",     // Dota hero name
  "similarities": [          // An array of objects that describe League champ (similar to that hero)
    {
      "name": "Alistar",
      "role": true,          // Set true when similar by role in game
      "skills": true,        // Set true when similar by skills or mechanics
      "theme": true,         // Set true when similar by theme or visuals
      "description": "Text"  // Explanation about why the champion is similar to hero (besides 3 booleans above)
    }
  ]
}
```