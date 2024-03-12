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

//2 parte - Tratamento de erros
function trataErro(erro){
    throw new Error(chalk.red(erro.code,"não há arquivo no diretório"));
}

//1 parte - escrever uma function que traga arquivos .md (traz o conteudo do arquivo, lê ele)
function pegaArquivo(caminhoDoArquivo){
    const encoding = "utf-8";
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    });
}
//pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');