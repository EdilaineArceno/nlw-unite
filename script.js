let participantes = [
    {
        nome: "Jackson Arceno",
        email: 'jacksonf205@gmail.com',
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0o0)
    },
    {
        nome: "Maria Silva",
        email: 'maria.silva@example.com',
        dataInscricao: new Date(2024, 2, 23, 10, 15),
        dataCheckIn: new Date(2024, 2, 26, 9, 30)
    },
    {
        nome: "João Santos",
        email: 'joao.santos@example.com',
        dataInscricao: new Date(2024, 2, 23, 14, 45),
        dataCheckIn: new Date(2024, 2, 26, 12, 0)
    },
    {
        nome: "Ana Souza",
        email: 'ana.souza@example.com',
        dataInscricao: new Date(2024, 2, 24, 8, 0),
        dataCheckIn: new Date(2024, 2, 27, 9, 15)
    },
    {
        nome: "Pedro Oliveira",
        email: 'pedro.oliveira@example.com',
        dataInscricao: new Date(2024, 2, 25, 11, 30),
        dataCheckIn: new Date(2024, 2, 28, 14, 45)
    },
    {
        nome: "Juliana Costa",
        email: 'juliana.costa@example.com',
        dataInscricao: new Date(2024, 2, 25, 15, 20),
        dataCheckIn: new Date(2024, 2, 28, 18, 0)
    },
    {
        nome: "Lucas Oliveira",
        email: 'lucas.oliveira@example.com',
        dataInscricao: new Date(2024, 2, 26, 9, 45),
        dataCheckIn: new Date(2024, 2, 29, 11, 15)
    },
    {
        nome: "Carolina Lima",
        email: 'carolina.lima@example.com',
        dataInscricao: new Date(2024, 2, 27, 13, 10),
        dataCheckIn: new Date(2024, 2, 30, 15, 30)
    },
    {
        nome: "Gabriel Ferreira",
        email: 'gabriel.ferreira@example.com',
        dataInscricao: new Date(2024, 2, 27, 18, 30),
        dataCheckIn: new Date(2024, 3, 1, 9, 0)
    },
    {
        nome: "Mariana Costa",
        email: 'mariana.costa@example.com',
        dataInscricao: new Date(2024, 2, 28, 10, 0),
        dataCheckIn: new Date(2024, 3, 1, 12, 45)
    }
]


const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now())
    .to(participante.dataInscricao)
   
    const dataCheckIn = dayjs(Date.now())
    .to(participante.dataCheckIn)

    return `
   <tr>
     <td>
        <strong>
          ${participante.nome}   
        </strong>
        <br>
        <small>
          ${participante.email}   
        </small>
     </td>
     <td>${dataInscricao}</td>
     <td>${dataCheckIn}</td>
</tr>
   `
}

const atualizarLista = (participantes) => {
    let output = ""
    // estrutura de repetição - loop
    for(let participante of participantes) {
        output = output + criarNovoParticipante(participante)
        
    }

   // subtituir informação do HTML
    document
    .querySelector('tbody')
    .innerHTML = output
}

atualizarLista (participantes)