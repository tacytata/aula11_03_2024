import fs from 'fs';

import chalk from 'chalk';

const regex='\[[^[\]]*?\]\(https?:\/\/[^\s?#.]*[^\s]*\)';

const textoTeste= 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extraiLinks(texto){
    const regex= /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.]*[^\s]*)\)/gm;

    //const capturas=texto.match(regex);
    //const capturas=texto.exec(regex);
    const capturas=[...texto.matchAll(regex)];

    const resultados=capturas.map(captura=>({[captura[1]]:captura[2]}));

    console.log(resultados);
    
}

extraiLinks(textoTeste);

// console.log(chalk.blue('Olá mundo'));

// console.log(chalk.blue.bgWhite.bold("SENAI"));

// console.log(chalk.blue('Curso',' de',' Node.JS'));

// console.log(chalk.red('vermelho',chalk.underline.bgBlue('azul')));

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);


  function trataErro(erro){
     throw new Error(chalk.red(erro.code,"não há arquivo no diretório"));
 }
//--------------aula sobre promessas----
//1 parte - reescrevendo (refatorando)
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = "utf-8";
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//         .then((texto)=>console.log(chalk
//         .yellow(texto)))
//         .catch((erro)=>trataErro(erro));
//         }

//pegaArquivo('./arquivos/');
//pegaArquivo('./arquivos/texto.md');

//2 parte - outra forma de solucionar as promessas

// async function pegaArquivo(caminhoDoArquivo){
//     try{
//         const encoding="utf-8";
//         const texto=await fs.promises.readFile(caminhoDoArquivo, encoding);
//         console.log(chalk.cyan(texto));
        
//     } catch (erro){
//         trataErro(erro);
//     } finally{
//         console.log(chalk.magenta('Operação concluída'));
//     }
    

// }

//pegaArquivo('./arquivos/');
//pegaArquivo('./arquivos/texto.md');
