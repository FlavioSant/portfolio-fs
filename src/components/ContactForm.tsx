import styles from './ContactForm.module.scss';

export const ContactForm: React.FC = () => {
  return (
    <form className={styles['contact-form-container']}>
      <label htmlFor="name">
        Nome
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="email">
        E-mail
        <input type="email" id="email" name="email" />
      </label>
      <label htmlFor="message">
        Mensagem
        <textarea name="message" id="message" cols={30} rows={10} />
      </label>
      <button type="submit">ENVIAR</button>
    </form>
  );
};
