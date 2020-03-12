function iniciar(){
    let meta_dia = document.querySelector('#iptMeta')

    if (meta_dia.value == 0) {
        alert('Entre com um valor!')
    } else {
        alert(Number(meta_dia.value).toLocaleString('pt-br', {style: 'currency', currency:'BRL'}))
        window.location.href="menu.html"
    }
}

function vender(){

    let valor_produto = document.querySelector('#iptValor')
    let quantidade_produto = document.querySelector('#iptQuantidade')
    let parcial = 0

    if (valor_produto.value == 0 || quantidade_produto.value == 0) {
        alert('Insira o Valor!')
    } else {
        valor_produto = Number(valor_produto.value)
        quantidade_produto = Number(quantidade_produto.value)

        parcial = valor_produto*quantidade_produto
    }

}

function encerrar(){

    alert('foi')

}