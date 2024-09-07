// Função para realizar uma pesquisa e exibir os resultados na página.
function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos.
  let section = document.getElementById("resultados-pesquisa");
  let resultados = ""; // String que armazenará os resultados formatados em HTML.

  // Itera sobre cada dado da pesquisa e constrói o HTML para cada resultado.
  for (let dado of dados) {
    resultados += `
      <div class="item-resultado">
        <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
      </div>
    `;
  }

  // Atribui o HTML gerado à seção de resultados.
  section.innerHTML = resultados;
}
