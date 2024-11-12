import React, { useState } from 'react';
import "./ContactForm.css"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    email: '',
    oggetto: '',
    messaggio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Form data submission logic goes here
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Inserire qui Nome Cognome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Numero telefono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Inserire recapito telefonico"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Inserire l'indirizzo e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="oggetto">Oggetto</label>
          <select
            id="oggetto"
            name="oggetto"
            value={formData.oggetto}
            onChange={handleChange}
            required
          >
            <option value="">Selezionare oggetto</option>
            <option value="Richiesta di prezzo">Richiesta di prezzo</option>
            <option value="Offerta di collaborazione">Offerta di collaborazione</option>
            <option value="Richiesta di informazioni generali">Richiesta di informazioni generali</option>
          </select>
        </div>
      </div>
      <div className='textarea-div'>
        <label htmlFor="messaggio">Messaggio</label>
        <textarea
          id="messaggio"
          name="messaggio"
          placeholder="Inserire qui il messaggio"
          rows={4}
          value={formData.messaggio}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Invia</button>
    </form>
  );
};

export default ContactForm;