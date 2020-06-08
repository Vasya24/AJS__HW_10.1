GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
JSON.parse(saving.json)
  }, (error) => {
        error = new Error('Эррор!')
  });