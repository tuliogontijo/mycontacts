import PropTypes from 'prop-types';

import { useState } from 'react';
import { ButtonContainer, Form } from './styles';

import useErrors from '../../hooks/useErrors';

import formatPhone from '../../utils/formatPhone';
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
  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const isFormValid = name && errors.length === 0;

  function handleNameChange(e) {
    setName(e.target.value);

    if (!e.target.value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório',
      });
    } else {
      removeError('name');
    }
  }

  function handelEmailChange(e) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
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

  function handlePhoneChange(e) {
    const formattedPhone = formatPhone(e.target.value);
    setPhone(formattedPhone);

    if (formattedPhone.length < 14) {
      setError({
        field: 'phone',
        message: 'Telefone inválido',
      });
    } else {
      removeError('phone');
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      noValidate
    >
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handelEmailChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          error={getErrorMessageByFieldName('phone')}
          type="tel"
          placeholder="Telefone"
          maxLength={15}
          value={phone}
          onChange={handlePhoneChange}
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
        <Button
          type="submit"
          disabled={!isFormValid}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
