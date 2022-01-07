import styles from './ContactForm.module.scss';

export const ContactForm: React.FC = () => {
  return (
    <form
      action="mailto:flaviohenrique_santos@hotmail.com"
      className={styles['contact-form-container']}
    >
      <label htmlFor="name">
        Nome
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="subject">
        Assunto
        <input type="text" id="subject" name="subject" />
      </label>
      <label htmlFor="body">
        Mensagem
        <textarea name="body" id="body" cols={30} rows={10} />
      </label>
      <button type="submit">ENVIAR</button>
    </form>
  );
};
