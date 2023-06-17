function melhoresAlunos(alunos){
    let mAluno = null;
    let mMedia = 0;

    for (const aluno in alunos){
        const notas = alunos[aluno];
        const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;

        if (media > mMedia) {
            mAluno = aluno;
            mMedia = media;
        }
    }

    return { nome: mAluno, media: mMedia };

}

const total = melhoresAlunos({
    Leandro: [9, 8.7, 7.3, 9],
    Gabriel: [6.4, 9.5, 8, 9],
    Nicolas: [7.8, 8, 8.4, 7],
});

console.log(total);




