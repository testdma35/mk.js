import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    function $(id) {
      return document.getElementById(id);
    }
    function setLife(el, life) {
      el.style.width = life + '%';
    }
    document.onkeydown = function (e) {
      if (e.keyCode === 32) {
        window.location.reload();
      }
    };
    const startGame = () => {
      $('loading').style.visibility = 'hidden';
      $('arena').style.visibility = 'visible';
      $('utils').style.visibility = 'visible';
    };
    const options = {
      arena: {
        container: document.getElementById('arena'),
        arena: mk.arenas.types.THRONE_ROOM
      },
      fighters: [{ name: 'Subzero' }, { name: 'Kano' }],
      callbacks: {
        attack: function (f, o, l) {
          if (o.getName() === 'kano') {
            setLife($('player2Life'), o.getLife());
          } else {
            setLife($('player1Life'), o.getLife());
          }
        }
      },
      gameType: 'basic'
    };
    mk.start(options).ready(function () {
      startGame();
    });
  }, []);
  return (
    <>
      <Head>
        <title>mk.js</title>
        <link rel="stylesheet" href="/game/styles/styles.css" />
        <script src="/game/src/mk.js"></script>
      </Head>
      <div id="parent">
        <div id="utils">
          <div id="player1Name" className="playerName">Sub-Zero</div>
          <div id="player1LifeBar" className="lifebar"><div className="life" id="player1Life"></div></div>
          <div id="player2Name" className="playerName">Kano</div>
          <div id="player2LifeBar" className="lifebar"><div className="life" id="player2Life"></div></div>
        </div>
        <div id="arena"></div>
        <div id="loading">
          <span className="loadingLabel">Loading...</span>
        </div>
      </div>
    </>
  );
}
