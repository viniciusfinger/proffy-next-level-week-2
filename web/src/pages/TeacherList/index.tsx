import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
        <Select
              name="subject"
              label="Matéria"
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Geografia", label: "Geografia" },
                { value: "Matemática", label: "Matemática" },
                { value: "Inglês", label: "Inglês" },
                { value: "História", label: "História" },
                { value: "Física", label: "Física" },
                { value: "Português", label: "Português" },
                { value: "Química", label: "Química" },
              ]}
            />
          <Select
              name="week_day"
              label="Dia da semana"
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda-feira" },
                { value: "2", label: "Terca-feira" },
                { value: "3", label: "Quarta-feira" },
                { value: "4", label: "Quinta-feira" },
                { value: "5", label: "Sexta-feira" },
                { value: "6", label: "Sabado" },
              ]}
            />
          <Input name="time" type="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;