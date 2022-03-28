import { FormEvent, useState } from 'react';
import { baseUrl } from '../utils/baseUrl';

import styles from './ContactForm.module.scss';

type ContactStatus = 'INITIAL' | 'LOADING' | 'SUCCESS' | 'EMPTY' | 'ERROR';

export const ContactForm: React.FC = () => {
  const [fields, setFields] = useState({ name: '', subject: '', message: '' });
  const [contactStatus, setContactStatus] = useState<ContactStatus>('INITIAL');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setContactStatus('LOADING');

    if (fields.name === '' || fields.subject === '' || fields.message === '') {
      setContactStatus('EMPTY');
      return;
    }

    try {
      await baseUrl.post('/api/contato', {
        name: fields.name,
        subject: fields.subject,
        message: fields.message,
      });

      setContactStatus('SUCCESS');

      setFields({ name: '', subject: '', message: '' });
    } catch (error) {
      setContactStatus('ERROR');
    }
  };

  return (
    <form className={styles['contact-form-container']} onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          name="name"
          value={fields.name}
          onChange={e => setFields({ ...fields, name: e.target.value })}
        />
      </label>
      <label htmlFor="subject">
        Assunto
        <input
          type="text"
          id="subject"
          name="subject"
          value={fields.subject}
          onChange={e => setFields({ ...fields, subject: e.target.value })}
        />
      </label>
      <label htmlFor="body">
        Mensagem
        <textarea
          name="body"
          id="body"
          cols={30}
          rows={10}
          value={fields.message}
          onChange={e => setFields({ ...fields, message: e.target.value })}
        />
      </label>
      <button type="submit">ENVIAR</button>

      {contactStatus === 'LOADING' && (
        <span className={styles['loading']}>Enviando e-mail...</span>
      )}
      {contactStatus === 'SUCCESS' && (
        <span className={styles['success']}>E-mail enviado com sucesso!</span>
      )}
      {contactStatus === 'EMPTY' && (
        <span className={styles['empty']}>
          Preencha os campos para enviar e-mail.
        </span>
      )}
      {contactStatus === 'ERROR' && (
        <span className={styles['error']}>Erro ao enviar e-mail.</span>
      )}
    </form>
  );
};
