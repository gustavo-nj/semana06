fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  .then(response => response.json())
  .then(data => {
    data.forEach(imgs => {
      const imagemApi = imgs.url;
      document.write(`<img src='${imagemApi}' width='200' /> <br />`);
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro na conexão com a API:', error);
  });