import PropTypes from 'prop-types';

import { ButtonContainer, Form } from './styles';

import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup error="O formato do e-mail é inválido">
        <Input type="email" placeholder="E-mail" error />
      </FormGroup>
      <FormGroup>
        <Input type="tel" placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
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
