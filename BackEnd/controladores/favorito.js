const {
  getTodosFavoritos,
  insereFavorito,
  deletaFavoritoPorId,
} = require("../servicos/favorito");

function getFavoritos(req, res) {
  try {
    const livros = getTodosFavoritos();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorito(req, res) {
  try {
    const id = req.params.id;
    insereFavorito(id);
    res.status(201);
    res.send("Livro inserido");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavorito(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deletaFavoritoPorId(id);
      res.send("Item deletado");
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito,
};
