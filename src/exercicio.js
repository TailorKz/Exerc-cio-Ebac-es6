const alunos = [
    {nome: "Tailor", nota: 7},
    {nome: "Paulo", nota: 4},
    {nome: "Patrícia", nota: 10},
    {nome: "Maria", nota: 8},
    {nome: "João", nota: 6},
    {nome: "Sabrina", nota: 3},
    {nome: "Guilherme", nota: 2},
    {nome: "Lana", nota: 9},
]

const alunosAprovados = alunos.filter(function(aluno){
    return aluno.nota >= 6;
})

console.log(alunosAprovados)