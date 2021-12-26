let order =[];
let clickedOrder = [0];
let score = 0;

//- 0verde
//-1 vermelho
//2-amarelo
//3 azul

const blue =document.querySelector('.blue');
const red =document.querySelector('.red');
const yellow =document.querySelector('.yellow');
const green =document.querySelector('.green');
//cria ordem aleatoria de cores
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() *4);
    order[order.length] =colorOrder;
    clickedOrder = [];

    for( let i in order){
        let elementColor =createColorElement(order[i]);
        lightColor(elementColor,Number(i)+ 1);
    }
}
//ascende a proxima cor
lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    },number -250);
    setTimeout(()=>{
        element.classList.remove('selected');
    });
}
//checa se os botoes clicados são os mesmos da ordem
let checkOrder = () =>{
    for (let i in clickedOrder){
        if(clickedOrder[i] !=order[i]){
            lose();
            break;
        }
    }
    if( clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando Próximo nivel`);
        nextLevel();
    }
}

//função   para o clique do usuario
let click =(color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)
}

//criar a função que retorna a cor
let createColorElement =(color) =>{
     if(color== 0){
         return green;
     }else if(color ==1){
         return red;
     }else if(color== 2){
         return yellow;
     }else if(color==3){
         return blue;
     }
}

//função para o proximo  nivel do jogo
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//função para loser

let gameover = () =>{
    alert(`pontuação ${score}\n Você Perdeu o jogo\n Clique em okay para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame =() =>{
    alert(`Bem vindo ao Genius! Lets bora!`);
    score = 0;
    nextLevel();

}
green.addEventListener('click',click(0));
red.addEventListener('click',click(1));
yellow.addEventListener('click',click(2));
blue.addEventListener('click',click(3));

green.onclick =()=> click(0);
red.onclick =()=> click(1);
yellow.onclick =()=> click(2);
blue.onclick =()=> click(3);

playGame();