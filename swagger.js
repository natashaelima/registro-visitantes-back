const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js'];
const doc = {
    info: {
        title: 'Domucmentação API Museu',
        description: "Descrição de como utilizar as endpoints da API."
    },
    host: 'http://localhost:8000',
    tags: [
        {
            name: "Visitantes",
            description: "Rotas do visitante",
        }
    ],
    definition: {
        Visitante: {
            $visitante_nome: 'Natasha',
            $visitante_cpf: '000.000.000-00',
            $visitante_profissao: 'designer',
            $visitante_cidade: 'fortaleza',
            $visitante_bairro: 'jose de alencar',
            $visitante_genero: 'feminino',
            $visitante_data: '2024-03-02 11:47:00',
            $visitante_status: false,
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc); 