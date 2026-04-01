let valorCompra = prompt ("Digite o valor da sua compra:");

if (valorCompra <= 100) {
    let desconto = valorCompra * 0.1;
    let valorComDesconto = (valorCompra - desconto)
    alert ("Desconto: R$" + valorComDesconto);
    aler ("Total com desconto: R$" + valorcomDesconto);
}else{
    alert ("Valor sem desconto + valorCompra");
}
