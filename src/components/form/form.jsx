import styles from './form.module.css'
export default function Formulario(){
  const handleSubmit = () => {
    alert('Dados enviados');
    }
    return (
        <div className={styles.main}>
            <form onSubmit={handleSubmit}>
                <label>
                Nome:
                </label>
                <input type="text" required autoFocus placeholder="Digite seu nome completo" />
                <br />
                <label>
                Data de Nascimento:   
                </label>
                <input type='date'  required />
                <br />
                <label>Telefone Celular</label> 
                <input type="text" required placeholder="(99)9999-9999" />
                <br/>
                <label>
                E-mail:
                </label>
                <input type="email" required placeholder="Digite seu email"/>
                <br />
                <label>
                Senha:
                </label>
                <input type="password" required placeholder="Digite sua senha" />
                <br />
                <a  href="#">Leia o termos</a>
                <div className={styles.termos}>
                <input type="checkbox" required id="checkbox" /> Li e estou de acordo com os termos
                </div>
                <br />

                <button type="submit">Enviar</button>
            </form>
            <div className={styles.footer}>
                <p>©2023 - CV&AR</p>
            </div>
        </div>
        
    );
}