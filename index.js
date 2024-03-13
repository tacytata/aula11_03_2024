import fs from 'fs';

import chalk from 'chalk';

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

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding="utf-8";
        const texto=await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.cyan(texto));
        
    } catch (erro){
        trataErro(erro);
    } finally{
        console.log(chalk.magenta('Operação concluída'));
    }
    

}

//pegaArquivo('./arquivos/');
pegaArquivo('./arquivos/texto.md');
