async function buscarUsuario() {
  let username = document.getElementById("username").value;
  let url = `https://api.github.com/users/${username}`;

  try {
    let resposta = await fetch(url);
    if (!resposta.ok) throw new Error("Usuário não encontrado!");

    let usuario = await resposta.json();
    mostrarUsuario(usuario);
  } catch (erro) {
    document.getElementById("resultado").innerText = erro.message;
  }
}

function mostrarUsuario(usuario) {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `
          <h2>${usuario.name}</h2>
          <img src="${usuario.avatar_url}" alt="Avatar" width="150">
          <p>Repositórios: ${usuario.public_repos}</p>
          <p>Seguidores: ${usuario.followers}</p>
          <a href="${usuario.html_url}" target="_blank">Perfil no GitHub</a>
      `;
}
