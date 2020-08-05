import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FunctionComponent = () => {
  return (
    <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/51798742?s=400&u=0c1590f2bcf53f9b4ed410ed2a0ee7e8cd6f22a4&v=4" alt="Vinicius Finger"/>
                        <div>
                            <strong>Vinicius Finger</strong>
                            <span>Algoritmos e programacao</span>
                        </div>
                    </header>
                   
                    <p>
                        Estudante de ciencia da computacao. <br/>
                        Programador Java na PUCRS.
                    </p>
                    
                    <footer>
                        <p>
                            Preco/hora
                            <strong>R$40,00</strong>
                        </p>

                        <button type="button">
                                <img src={whatsappIcon} alt="Whatsapp"/>
                                Entrar em contato
                        </button>
                    </footer>

        </article>
  );
}

export default TeacherItem;