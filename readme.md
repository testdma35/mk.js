# mk.js

This project has been converted to a **Next.js 15** application. The game assets
are now located under the `public/` directory and can be served by running the
Next.js development server.

This is simple fighting game created with HTML5 canvas and JavaScript. It has three game modes:
* `Basic` - with one active and on inactive player.
* `Multiplayer` - with two active players on one computer.

Each mode can be easily chosen by picking a `gameType` when specifying the game options.

The `multiplayer` mode can be tested [here](http://mk.mgechev.com/).



For local development of the Next.js application run:

    npm install
    npm run dev

The game will be available at `http://localhost:3000`.

# Configuration

In this section I'll describe in short how you can configure mk.js.

* `arena` - object which contains different properties for the arena.
    * `arena` - type of the arena. The different arenas are listed at: `mk.arenas.types`
    * `container` - parent container of the canvas which is the actual arena.
* `fighters` - array of two objects which are the two players.
    * `name` - player's name. It's case insensitive string without any special characters and white space.
* ` callbacks` - callbacks which will be invoked when some events happens.
    * `attack`- callback which will be invoked on successful attack
    * `game-end` - callback which will be invoked on game end
    * `player-connected` - callback used when the second player connects in network mode (not supported in this setup).
* `game-type` - specifies the game controller which will be used. Possible values are: `basic` and `multiplayer`.
* `reset` - a method which reset the game. It clean some references and call the reset methods of lower level components. Calling it will lead to removal of the game canvas.

# License

This software is distributed under the terms of the MIT license.
