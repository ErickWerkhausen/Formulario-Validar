const form = document.getElementById('form-validar');



form.addEventListener('submit', function (e) {

    e.preventDefault();

    const numueroA = document.getElementById('num-a');
    const numueroB = document.getElementById('num-b');
    const backGroundColorMensagem = document.getElementById('campo-mensagem');

    if (numueroA.value > numueroB.value) {
        const valorAmaior = `<b>Formulário valido </b> <br> Número A(<b>${numueroA.value})  </b> é maior que número B(<b>${numueroB.value})  `;
        document.querySelector('.menssagem').innerHTML = valorAmaior;
        backGroundColorMensagem.style.backgroundColor = "green";


    } else {

        if (numueroA.value == numueroB.value) {
            const valorBmaior = `<b>Formulário invalido </b> <br> Número B(<b>${numueroB.value} </b>) é igual ao número A(<b>${numueroA.value}</b>)`;
            document.querySelector('.menssagem').innerHTML = valorBmaior;
            backGroundColorMensagem.style.backgroundColor = "red";
        } else {
            const valorBmaior = `<b>Formulário invalido </b> <br> Número B(<b>${numueroB.value} </b>) é maior que número A(<b>${numueroA.value}</b>)`;
            document.querySelector('.menssagem').innerHTML = valorBmaior;
            backGroundColorMensagem.style.backgroundColor = "red";
        }

    }
})

console.log(form);