var idX = [];
var dataY = [];
var dataColor = [];
var total;
var dadosY;
var linha;
var cultura;
var AS;
var AI;
var pAI;
var DAL;
var MTA;
var MAI;
var NAD;
var legenda = 'Número de Amostras por Cultura';
start();
async function start() {
    dataY.splice(0, dataY.length);
    idX.splice(0, idX.length);
    await catchData();
    linhas.forEach(elt => {
        linha = elt.split(',');
        cultura = linha[0];
        idX.push(cultura);
        total = linha[4];
        dataY.push(total);
              
    });
    criarGrafico();
}

function plotpAI(){
    dataY.splice(0, dataY.length);
    idX.splice(0, idX.length);
    catchData();
    linhas.forEach(elt => {
        linha = elt.split(',');
        cultura = linha[0];
        idX.push(cultura);
        pAI = linha[3];
        dataY.push(pAI); 
        legenda = '% de plantas contaminadas por Agrotóxicos';            
    });
    criarGrafico();
}
function plotMTA(){
    dataY.splice(0, dataY.length);
    idX.splice(0, idX.length);
    catchData();
    linhas.forEach(elt => {
        linha = elt.split(',');
        cultura = linha[0];
        idX.push(cultura);
        MTA = linha[6];
        dataY.push(MTA); 
        legenda = 'Média de agrotóxicos por amostras totais';          
    });
    criarGrafico();
}

function plotMAI(){
    dataY.splice(0, dataY.length);
    idX.splice(0, idX.length);
    catchData();
    linhas.forEach(elt => {
        linha = elt.split(',');
        cultura = linha[0];
        idX.push(cultura);
        MAI = linha[7];
        dataY.push(MAI); 
        legenda = 'Média de agrotóxicos por amostras contaminadas';          
    });
    criarGrafico();
}

function plotNAD(){
    dataY.splice(0, dataY.length);
    idX.splice(0, idX.length);
    catchData();
    linhas.forEach(elt => {
        linha = elt.split(',');
        cultura = linha[0];
        idX.push(cultura);
        NAD = linha[8];
        dataY.push(NAD); 
        legenda = 'Número de Agrotóxicos Detectados';          
    });
    criarGrafico();
}
function criarGrafico() {

    var ctx = document.getElementById('grafico').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: idX,
            datasets: [{
                label: legenda,
                data: dataY,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 164, 0.4)',
                    'rgba(55, 59, 164, 0.4)',
                    'rgba(155, 199, 232, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 106, 186, 0.4)',
                    'rgba(75, 192, 32, 0.4)',
                    'rgba(153, 102, 15, 0.4)',
                    'rgba(155, 229, 64, 0.4)',
                    'rgba(155, 159, 64, 0.4)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 164, 1)',
                    'rgba(55, 59, 164, 1)',
                    'rgba(155, 199, 232, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 106, 186, 1)',
                    'rgba(75, 192, 32, 1)',
                    'rgba(153, 102, 15, 1)',
                    'rgba(155, 229, 64, 1)',
                    'rgba(155, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}


catchData().catch(error => {
    console.log("fudeu");
    console.error(error);
});

var linhas;
async function catchData() {
    const response = await fetch('dados.csv');
    const data = await response.text();

    linhas = data.split('\n').slice(1);
   // myCock();

}



