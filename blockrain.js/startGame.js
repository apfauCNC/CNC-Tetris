<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Blockrain Tetris</title>

  <!-- Blockrain styles -->
  <link rel="stylesheet" href="blockrain.css">

  <style>
    .game {
      width: 250px;
      height: 500px;
    }
  </style>
</head>
<body>

  <div class="game"></div>

  <!-- jQuery first, then blockrain -->
  <script src="jquery.js"></script>
  <script src="blockrain.js"></script>

  <script>
    // IMPORTANT: init after DOM is ready
    $(function () {
      $('.game').blockrain();
      // optional: start immediately instead of waiting for Play button
      // $('.game').blockrain('start');
    });
  </script>

</body>
</html>
