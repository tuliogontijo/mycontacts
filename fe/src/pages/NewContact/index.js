import PageHeader from '../../components/PageHeader';

import { Container } from './styles';

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
    </Container>
  );
}
