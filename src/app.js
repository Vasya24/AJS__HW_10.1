import GameSavingLoader from './gsloader'

GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
    
  }, (error) => {
      error = new Error('Эррор!')
  });