import PropTypes from 'prop-types';

import { useState } from 'react';
import { ButtonContainer, Form } from './styles';

import isEmailValid from '../../utils/isEmailValid';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handleNameChange(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setErrors((prevState) => [
        ...prevState,
        {
          field: 'name',
          message: 'Nome é obrigatório',
        },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'name'),
      );
    }
  }

  function handelEmailChange(e) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      const errorAlreadyExists = errors.find(
        (error) => error.field === 'email',
      );

      if (errorAlreadyExists) return;

      setErrors((prevState) => [
        ...prevState,
        {
          field: 'email',
          message: 'E-mail inválido',
        },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== 'email'),
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handelEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
