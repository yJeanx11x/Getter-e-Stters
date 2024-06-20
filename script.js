//Getters e Setters
function criarProduto(nome){
        return {
                get nome(){
                        return nome
                },
                set nome(valor){
                        nome= valor
                }
        }
}
const p2=criarProduto('Camiseta')
console.log(p2.nome)