# Endpoints

## Membro (- DELETE - POST - GET by id - PUT - GET pag)

### Exemplo:

    router.post('/membro');  // Permite criar membros

    router.delete('/membro/:id'); // Deleta por id

    router.get('/membro/id/:id'); // Busca no banco qualquer id

    router.get('/membro/'); // Permite fazer busca paginada

    router.put('/membro/:id'); // Permite atualizar pelo id, os campos a atualizarem e seus valores devem ser passados no body

### Modelo para criar no formato JSON POST

    {
        "nome": "string",
        "url_foto": "string",             
        "token_contribuicao": "string",  
        "rg_numero": "string",
        "rg_emissor": "string",
        "cpf": "string", 
        "gmail": "string",
        "telefone_pais": "string",
        "telefone_ddd": "string",
        "telefone_numero": "string",
        "bairro_endereco": "string",
        "cidade_endereco": "string",
        "rua_endereco": "string",
        "cep_endereco": "string",
        "numero_endereco": "string",
        "data_nascimento": "Date",
        "active": "boolean",  
        "senha": "string",
        "rule": "number"
        "uf_endereco": "String"
    }

#### Nível de permissão

    {
        "Root": 1,
        "Management": 2,
        "Treasury": 4,
        "User": 8
    }

### Exemplo de requisições

#### GET by id

    URL: x:4000/membro/145
    Status: 200 OK
    Return:
    {
        "id": 145,
        "nome": "Ana Pimellllllllnta",
        "url_foto": null,
        "token_contribuicao": "0H3J6",
        "rg_numero": "571162010",
        "rg_emissor": "spp",
        "cpf": null,
        "gmail": "ser6@mail.com",
        "telefone_pais": null,
        "telefone_ddd": null,
        "telefone_numero": null,
        "bairro_endereco": "bairro de Deus msm",
        "cidade_endereco": "teraca da serra",
        "rua_endereco": "rua de deus",
        "cep_endereco": "068537482342",
        "numero_endereco": "456",
        "data_nascimento": "2005-09-16T03:00:00.000Z",
        "active": true
    }

#### DELETE by id

    URL: x:4000/membro/145
    Status: 204 No Content
    Return: No body

#### POST

    URL: localhost:4000/membro
    Body:
    {
        "nome": "Serg ioPimenta",
        "rg_numero": "********",
        "gmail": "bahda6@maial.com",
        "rg_emissor": "***",
        "bairro_endereco": "bairro de Deus msm",
        "cidade_endereco": "teraca da serra",
        "rua_endereco": "rua de deus",
        "cep_endereco": "068537482342",
        "numero_endereco": "456",
        "data_nascimento": "2005-09-16",
        "active": "true"
    }
    Return: ID: x
    Status: 201 Created

#### PUT

    URL: x:4000/membro/145
    Body:
    {
        "nome": "Sergio Pimenta",
        "active": "false"
    }
    Status: 204 No Content

#### Paginação

    URL: x:localhost:4000/membro/page=3&limit=3 // Ambos obrigatórios
    Body:
    {
        "arraydata": [],
        "numberPages": 7
    }

#

## Evento (- DELETE - POST - GET all - PUT)

### Exemplo:

    router.post('/evento');  // Permite criar eventos

    router.delete('/evento/:id'); // Deleta por id

    /* Futuramente páginas por datas */
    router.getall('/evento/'); // Pega todos os eventos 

    router.put('/evento/:id'); // Permite atualizar pelo id, os campos a atualizarem e seus valores devem ser passados no body

### Modelo para criar no formato JSON POST

    {
         "nome": "string",
	     "descricao": "string",
         "data_evento": "Date"
    }

### Exemplo de requisições

#### GET all

    URL: x:/evento/145
    Status: 200 OK
    Return:
    {
        {
            "id": 12,
            "nome": "asdasdasd",
            "descricao": null,
            "data_evento": "2005-09-16T03:00:00.000Z"
        },

        {
            "id": 13,
            "nome": "asdasdasd",
            "descricao": null,
            "data_evento": "2005-09-16T03:00:00.000Z"
        }
    }

#### DELETE by id

    URL: x:4000/evento/145
    Status: 204 No Content
    Return: No body

#### POST

    URL: localhost:4000/evento
    Body:

    {
         "nome": "string",
	     "descricao": "string",
         "data_evento": "Date"
     }

    Return: ID: x
    Status: 201 Created

#### PUT

    URL: x:4000/evento/145
    Body:
    {
         "nome": "string",
	     "descricao": "string",
         "data_evento": "Date"
     }

    Status: 204 No Content

#

## Membro_ministerio (- DELETE - POST)

### Exemplo:

    router.post('/membro_ministerio');  // Permite criar membros

    router.delete('/membro_ministerio/:id'); // Deleta por id

### Modelo para criar no formato JSON POST

    {
        "id_membro": "number",
        "id_ministerio": "number",
        "lider": "boolean",
        "funcao": "string"
    }

### Exemplo de requisições

#### DELETE by id

    URL: x:4000/membro_ministerio/145
    Status: 204 No Content

    Body:
    {
		"id_membro": "163",
		"id_ministerio": "126"
    }

    Return: No body

#### POST

    URL: localhost:4000/membro_ministerio
    Body:

    {
		"id_membro": "163",
		"id_ministerio": "126"
    }

    Return: ID: compost
    Status: 201 Created

#

## Evento_ministerio (- DELETE - POST)

### Exemplo:

    router.post('/evento_ministerio');  // Permite vincular ministerio a evento

    router.delete('/evento_ministerio/:id'); // Deleta por id

### Modelo para criar no formato JSON POST

    {
        "id_ministerio": "number",
        "id_evento": "number"
    }

### Exemplo de requisições

#### DELETE by id

    URL: x:4000/evento_ministerio/145
    Status: 204 No Content

    Body:
    {
		"id_ministerio": "number",
        "id_evento": "number"
    }

    Return: No body

#### POST

    URL: localhost:4000/evento
    Body:

    {select * from membro
		"id_ministerio": "number",
        "id_evento": "number"
    }

    Return: ID: compostselect * from membroby id - PUT - GET all)

### Exemplo:

    router.post('/Caixa');  // Permite criar membros

    router.delete('/Caixa/:id'); // Deleta por id

    router.getall('/Caixa/'); // Pega todos os eventos 

    router.put('/Caixa/:id'); // Permite atualizar pelo id, os campos a atualizarem e seus valores devem ser passados no body

### Modelo para criar no formato JSON POST

    {
        "nome": "string",
        "valor_total": "number"
    }

### Exemplo de requisições

#### GET all

    URL: x:/caixa/145
    Status: 200 OK
    Return:
    {
        "nome": "dizimso",
        "id": 26
    },
    {
        "nome": "dizo",
        "id": 27
    }

#### DELETE by id

    URL: x:4000/caixa/145
    Status: 204 No Content
    Return: No body

#### GET by id

    URL: x:/caixa/145
    Status: 200 OK
    Return:
    {
        "nome": "offsssasds",
        "valor_total": null,
        "id": 48
    }

#### POST

    URL: localhost:4000/caixa
    Body:

    {
        "nome": "string",
        "valor_total": "number"
    }

    Return: ID:x
    Status: 201 Created

#### PUT

    URL: x:4000/caixa/145
    Body:
    {
        "nome": "string",
        "valor_total": "number"
    }

    Status: 204 No Content

#

## Gasto (- DELETE - POST - GET pag - PUT)

### Exemplo:

    router.post('gasto');  // Permite criar gastos

    router.delete('gasto/:id'); // Deleta por id

    router.getpag('gasto/'); // Pega por data os gastos

    router.put('gasto/:id'); // Permite atualizar pelo id, os campos a atualizarem e seus valores devem ser passados no body

### Modelo para criar no formato JSON POST

    {
        "valor": "number",
        "descricao": "string",
        "numero_fiscal": "string",
        "url_comprovante": "string",
        "id_caixa": "number",
        "data_gastogasto": "Date"
    }

### Exemplo de requisições

#### GET pag

    URL: x:gasto?id_caixa=26&data_inicio=2005-11-01&data_fim=2005-11-30

    Status: 200 OK

    Return:
    {
        "valor": "number",
        "descricao": "string",
        "nome": "string",
        "numero_fiscal": "string",
        "url_comprovante": "string",
        "id_caixa": "number",
        "data_gasto": "Date"
    }

    {
        "valor": "number",
        "descricao": "string",
        "nome": "string",
        "numero_fiscal": "string",
        "url_comprovante": "string",
        "id_caixa": "number",
        "data_gasto": "Date"
    }

#### DELETE by id

    URL: x:4000/gasto/145
    Status: 204 No Content
    Return: No body

#### POST

    URL: x/gasto
    Body:

    {
        "valor": "number",
        "descricao": "string",
        "numero_fiscal": "string",
        "url_comprovante": "string",
        "id_caixa": "number",
        "data_gasto": "Date"
    }

    Return: ID:x
    Status: 201 Created

#### PUT

    URL: x:4000/gasto/145
    Body:
    {
        "valor": "number",
        "descricao": "string",
        "nome": "string",
        "numero_fiscal": "string",
        "url_comprovante": "string",
        "id_caixa": "number",
        "data_gastogasto": "Date"
    }

    Status: 204 No Content

#

## Contribuicao (- DELETE - POST - GET pag - PUT)

### Exemplo:

    router.post('contribuicao');  // Permite criar contribuicao

    router.delete('contribuicao/:id'); // Deleta por id

    router.getpag('contribuicao/'); // Pega por data as contribuicoes

    router.put('contribuicao/:id'); // Permite atualizar pelo id, os campos a atualizarem e seus valores devem ser passados no body

### Modelo para criar no formato JSON POST

    {
        "valor": "number",
        "descricao": "string",
        "data_contribuicao": "Date",
        "id_membro": "number",
        "id_caixa": "number",
        "url_envelope": "string"
    }

### Exemplo de requisições

#### GET pag

    URL: x:/contribuicao?id_caixa=26&data_inicio=2005-11-01&data_fim=2005-11-30

    Status: 200 OK

    Return:
    {
        "valor": "number",
        "tipo": "string",
        "data_contribuicao": "Date",
        "id_membro": "number",
        "id_caixa": "number",
        "url_envelope": "string"
    }

    {
        "valor": "number",
        "tipo": "string",
        "data_contribuicao": "Date",
        "id_membro": "number",
        "id_caixa": "number",
        "url_envelope": "string"
    }

#### DELETE by id

    URL: x:4000/contribuicao/145
    Status: 204 No Content
    Return: No body

#### POST

    URL: x/contribuicao
    Body:

    {
        "valor": "number",
        "tipo": "string",
        "data_contribuicao": "Date",
        "id_membro": "number",
        "id_caixa": "number",
        "url_envelope": "string"
    }

    Return: ID:x
    Status: 201 Created

#### PUT

    URL: x:4000/contribuicao/145
    Body:
    {
        "valor": "number",
        "tipo": "string",
        "data_contribuicao": "Date",
        "id_membro": "number",
        "id_caixa": "number",
        "url_envelope": "string"
    }

    Status: 204 No Content

#

## Ministerio (- DELETE - POST - GET all - PUT)

### Exemplo:

    router.post('/ministerio');  // Permite criar Ministerio

    router.delete('/ministerio/:id'); // Deleta por id

    router.getall('/ministerio/'); // Pega todos os minisministerio

    router.put('/ministerio/:id'); // Permite atualizar pelo id, os campos a atualizarem e seus valores devem ser passados no body

### Modelo para criar no formato JSON POST

    {
        "nome": "string",
        "descricao": "string"
    }

### Exemplo de requisições

#### GET all

    URL: x:/ministerio/145
    Status: 200 OK
    Return:
    
    {
        "id": 104,
        "nome": "mulheres",
        "descricao": null
    },

    {
        "id": 105,
        "nome": "mulheres",
        "descricao": null
    },
        

#### DELETE by id

    URL: x:4000/ministerio/145
    Status: 204 No Content
    Return: No body

#### POST

    URL: localhost:4000/ministerio
    Body:

    {
        "nome": "string",
        "descricao": "string"
    }

    Return: ID:x
    Status: 201 Created

#### PUT

    URL: x:4000/ministerio
    Body:
    {
        "nome": "string",
        "descricao": "string"
    }

    Status: 204 No Content

#

## Singin (- POST)

### Exemplo:

    router.post('/ibpv/singin');  // Permite fazer login

### Modelo para criar no formato JSON POST

    {
		"gmail": "string",
		"senha": "string"
    }

### Exemplo de requisições

#### Singin

    URL: x:/ibpv/singin
    Status: 200 OK
    Return:
    {
  	    "acessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJ1aWQiOjMyOSwicnVsZSI6MS"
    }

#

# Validações

Para validação é usado a biblioteca yup em conjunto com métodos internos *(em breve será feita novas melhorias nas validações).

#

# Arquitetura e caminhos

- Database estão as models, configurações do banco e as querys
- Em server estão server index estão todas a configurações.
- Em routes as rotas.
- Em controllers as configurações dos endpoints como schema de validação.
- Em shared/middlewares temos função para validar entrada.
- Em shared/services temos uma tradução do yup, um algoritmo para gerar tokens únicos para o banco, validação para ver se os campos da requisição existem, construção de algumas querys, a função que filtra e retorna erros personalizados, e por fim criptografias.

#

### Erros frequentes

* Em breve

#

# Observações

- gasto/contribuicao e caixa a logica nao esta pronta
- fazer a parte de dowload
- Membros put ta aceitando umas datas meio wtf, e cpf tambem?????????
- Estudar o CORS
- Escrever testes basais de funcionamento
- Integrar as tabelas associativas e suas edições.
- Limitação de taxa (Rate Limiting): Isso envolve limitar o número de solicitações que um único cliente pode fazer em um determinado período de tempo.
- Firewalls de aplicativos web (WAFs): Eles podem ajudar a filtrar o tráfego malicioso e proteger contra ataques DDoS.
CDNs e serviços de mitigação de DDoS: Redes de distribuição de conteúdo (CDNs) e serviços especializados de mitigação de DDoS podem ajudar a absorver o tráfego de ataque e garantir que seu aplicativo permaneça disponível durante um ataque.
- Monitoramento e alertas: Ter um sistema de monitoramento e alerta robusto pode ajudar a detectar um aumento anormal no tráfego ou no uso de recursos e alertar você para possíveis ataques.


