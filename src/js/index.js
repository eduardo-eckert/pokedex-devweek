/*
quando clicar no pokemon da listagem, temos que esconder o cartão do pokemon aberto e mostrar o cartão do pokemon correspondente ao que foi selecionado na listagem

para isso, vmaos precisar trabalhar com dois elemento
1-Listagem
2-Cartão do pokemon

precisamos criar 2 variaveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemons

-remover a classe aberto só do cartao que estiver aberto
ao clicar no pokemon da listagem, pegamos o id desse pokemon para saber qual cartão mostrar
-remover a classe ativa que marca o pokemon selecionado
-adicionar a classe ativo no item selecinado
*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        
    })
})
