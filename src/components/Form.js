import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action='https://formspree.io/xlegrqgk'
        method='POST'
      >
        <input type="text" name="_gotcha" style={{ display: 'none'}} />
        <div className="field half first">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="_replyto" id="email" />
        </div>
        <div className="field">
            <label htmlFor="message">Mensagem</label>
            <textarea name="message" id="message" rows="4"></textarea>
        </div>
        
        {status === "SUCCESS" ? <p>Obrigado!</p> : 
        <div className="actions">
            <input type="submit" value="Enviar" className="special" />
        </div>}
        {status === "ERROR" && <p>Ocorreu um erro.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}


export default Form