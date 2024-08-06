import PageHeader from '../../components/PageHeader';

import { Container } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <Container>
      <PageHeader title="Novo contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="321">Facebook</option>
      </Select>
      <Button type="button">Salvar alterações</Button>
      <Button type="button" disabled>Salvar alterações</Button>
    </Container>
  );
}
