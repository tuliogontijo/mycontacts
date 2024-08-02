import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: Proptypes.string.isRequired,
};
