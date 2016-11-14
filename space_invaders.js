const GameView = require('./lib/game_view');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  canvas.height = 600;
  canvas.width = 900;

  const canvasSize = [canvas.width, canvas.height];
  const ctx = canvas.getContext('2d');
  const gameView = new GameView(ctx, canvasSize);

  gameView.start();
});
