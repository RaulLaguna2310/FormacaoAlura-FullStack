const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletarLivro,
} = require("../servicos/livros");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    if (req.body.nome) {
      insereLivro(livroNovo);
      res.status(201);
      res.send("Livro inserido");
    } else {
      res.status(422);
      res.send('O campo "Nome" é obrigatório!');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const body = req.body;
      modificaLivro(body, id);
      res.send("Item modificado");
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteLivro(res, req) {
  try {
    if (id && Number(id)) {
      const id = req.params.id;
      deletarLivro(id);
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
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
