import React from 'react'

// Reatividade: para criarmos campos de formúlarios reativos, devemos definir o estado para o value e a funçã atualizadora para o onChange.

/*const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault() // previne o comportamento padrão do form, que é enviar uma requisição e atualizar a página.
    console.log(event);
  }

  // Form: no form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em action="".
  // resumindo, form é enviado quando faz o submit.
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  ) // não precisa colocar um evento no botão, pois o form já está ouvindo o evento de submit, e o botão é do tipo submit por padrão.
} // Múltiplos campos: podemos definir um estado para cada campo.

export default App;*/

// Objeto: podemos definir um obejto que irá conter todos os campos do formulario.
// exemplo:
/*const App = () => {
  const [form, setForm] = React.useState({
    nome: '', // objeto com os campos do formulário
    email: '',
  })

  function handleSubmit(event) {
    event.preventDefault() // previne o comportamento padrão do form, que é enviar uma requisição e atualizar a página.
    console.log(event);
  }

  function handleChange({ target }) { // poderia passar o event, mas desestrurei e passei o target
    const { id, value } = target // desestruturando o target para pegar o id e o value
    setForm({ ...form, [id]: value }) // atualizando o estado do form com o id e o value
  }

  // Form: no form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em action="".
  // resumindo, form é enviado quando faz o submit.
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      {form.nome} {/* Verifico se o campo é retivo ou não }  

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {form.email}

      <button>Enviar</button>
    </form>
  ) // não precisa colocar um evento no botão, pois o form já está ouvindo o evento de submit, e o botão é do tipo submit por padrão.
}*/


// Exercicios Formulário:

/*const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const App = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado</p>}
    </form>
  );
};

export default App;
// ou

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">Cep</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange} />
      <label htmlFor="senha">Rua</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange} />
      <label htmlFor="numero">Número</label>
      <input
        type="text"
        id="numero"
        value={form.numero}
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        id="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        value={form.estado}
        onChange={handleChange}
      />
      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado</p>}
    </form>
  );
};

export default App; */


// Textarea

/*const App = () => {
  const [mensagem, setMensagem] = React.useState('');

  return (
    <form>
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>
    </form>
  );
};*/

// Select
// O value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState.
/*const App = () => {
  const [select, setSelect] = React.useState('');
  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)} id='produtos' >
      <option disabled value="">Selecione um produto</option>
      <option value="notebook">Notebook</option>
      <option value="smartphone">Smartphone</option>
      <option value="tablet">Tablet</option>
    </select>
    <p>{select}</p>

    </form >
  );
}*/

// Radio (input type="radio")
// No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão.

/*const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <h2>Dispositivo</h2>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto === 'notebook'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === 'smartphone'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Smartphone
      </label>

      <h2>Cor</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === 'azul'}
          onChange={({ target }) => setCor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          checked={cor === 'vermelho'}
          onChange={({ target }) => setCor(target.value)}
        />
        Vermelho
      </label>
    </form>
  );
};*/

//no lugar name=produto podemos usar o checked={produto === 'smartphone'} 

// Checkbox 
// O estado do checkbox está relacionado ao checked, que é um booleano. O onChange deve atualizar o estado do checkbox, que pode ser true ou false.
/*const App = () => {
  const [termos, setTermos] = React.useState(false);

  return (
    <form > 
      {termos && <p>Você aceitou os termos de uso</p>} 
      <label>
        <input type="checkbox" value={termos} checked={termos} onChange={({ target } 
        ) => setTermos(target.checked) }/>
         Aceito os termos de uso
        </label>
    </form>
  )
}*/

// checkbox com múltiplos
/*const App = () => {
  const [cores, setCores] = React.useState(['azul']); // estado inicial com uma cor selecionada

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(
        cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <form >
      <label>
        <input type="checkbox"
          value="azul"
          checked={cores.includes('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input type="checkbox"
          value="vermelho"
          checked={cores.includes('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  )
}*/

// Checkbox exercicio
/*const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            checked={handleChecked(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};
*/

// Componentes inputs


export default App;