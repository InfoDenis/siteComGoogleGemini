// Função para realizar uma pesquisa e exibir os resultados na página.
function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos.
  let section       = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;  

  // Retira espaços em branco do inicio e do fim da string.
  campoPesquisa = campoPesquisa.trim();

  // Se campoPesquisa for uma srting sem nada
  if (campoPesquisa == "") {
    section.innerHTML = "Não foi encontrado. Você precisa digitar o nome de um atleta ou esporte.";
    return;
  }
  
  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = ""; // String que armazenará os resultados formatados em HTML.
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da pesquisa e constrói o HTML para cada resultado.
  for (let dado of dados) {
    // Se titulo includes campoPesquisa
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLocaleLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria novo elemento
      resultados += `
      <div class="item-resultado">
        <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "Nada foi encontrado.";
  }
  // Atribui o HTML gerado à seção de resultados.
  section.innerHTML = resultados;
}
