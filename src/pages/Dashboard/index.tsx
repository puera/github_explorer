import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/1524415?s=460&u=e16af1a103dc3f848419d24f2dee94d0b3eeca10&v=4"
            alt="Renann Souza"
          />
          <div>
            <strong>interlegis/sapl</strong>
            <p>Sistema de Apoio ao Processo Legislativo</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/1524415?s=460&u=e16af1a103dc3f848419d24f2dee94d0b3eeca10&v=4"
            alt="Renann Souza"
          />
          <div>
            <strong>interlegis/sapl</strong>
            <p>Sistema de Apoio ao Processo Legislativo</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/1524415?s=460&u=e16af1a103dc3f848419d24f2dee94d0b3eeca10&v=4"
            alt="Renann Souza"
          />
          <div>
            <strong>interlegis/sapl</strong>
            <p>Sistema de Apoio ao Processo Legislativo</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
