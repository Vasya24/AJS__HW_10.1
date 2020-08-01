import GameSavingLoader from './gsloader'

GameSavingLoader.load().then(() => {
    // saving объект класса GameSaving
  console.log(GameSavingLoader)

  }, (error) => {
    console.error(error)
  });

