import { FormEvent, useState } from 'react';
import { baseUrl } from '../utils/baseUrl';
import { Button } from './Button';

import styles from './ContactForm.module.scss';
import { Input } from './forms/Input';
import { Textarea } from './forms/Textarea';

type ContactStatus = 'INITIAL' | 'LOADING' | 'SUCCESS' | 'EMPTY' | 'ERROR';

export const ContactForm = () => {
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
      <Input
        name="name"
        label="Nome"
        value={fields.name}
        onChange={value => setFields({ ...fields, name: value })}
      />
      <Input
        name="subject"
        label="Assunto"
        value={fields.subject}
        onChange={value => setFields({ ...fields, subject: value })}
      />
      <Textarea
        name="body"
        label="Mensagem"
        cols={30}
        value={fields.message}
        onChange={value => setFields({ ...fields, message: value })}
      />

      <Button type="submit" className="w-full mt-4">
        ENVIAR
      </Button>

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
