import { Project } from '../types/types';

export const projectsData: Project[] = [
    {
        id: '1',
        name: 'Projeto Star Wars',
        image: '/imagens/star-wars.svg',
        description: 'Este projeto consiste em uma aplicação que consome a API pública de Star Wars para exibir informações sobre planetas da saga. A interface permite aos usuários filtrar e pesquisar dados específicos, proporcionando uma experiência interativa e informativa para os fãs da franquia.',
        githubLink: 'https://github.com/Artur2510/starwars-project',
    },
    {
        id: '2',
        name: 'Projeto TrybeWallet',
        image: '/imagens/finance.svg',
        description: 'Este projeto é uma carteira de controle de gastos com conversor de moedas. A aplicação permite que os usuários adicionem, removam e editem despesas, além de visualizar o total de gastos convertidos para uma moeda de referência. Foi desenvolvido utilizando React e Redux para gerenciamento de estado, garantindo uma experiência fluida e organizada.',
        githubLink: 'https://github.com/Artur2510/trybe-carteira',
    },
    {
        id: '3',
        name: 'Projeto Trybe Futebol Clube',
        image: '/imagens/soccer.svg',
        description: 'Este projeto envolve a criação de uma aplicação back-end para gerenciar um campeonato de futebol. A aplicação permite o cadastro de times, registro de partidas e acompanhamento de classificações. Foi desenvolvida utilizando Node.js, Express e Sequelize para interação com o banco de dados, garantindo uma estrutura robusta e escalável.',
        githubLink: 'https://github.com/Artur2510/tfc',
    },
];
