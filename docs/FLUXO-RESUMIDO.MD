## **Fluxo Completo no Google Tag Manager (GTM)**


### **1. Definir as Variáveis**

#### **1.1. Variáveis Incorporadas**
O **GTM** já oferece várias variáveis automáticas, conhecidas como **variáveis incorporadas**. Elas ajudam a capturar informações como cliques em botões, URL da página, IDs de elementos, classes CSS, entre outros. Usar essas variáveis é uma boa prática sempre que possível, pois elas reduzem a necessidade de escrever código manual.

- Exemplos de variáveis incorporadas mais usadas:
  - **Click Element**: Captura o elemento HTML clicado (ex.: `<button>`, `<a>`, etc.).
  - **Click ID**: Captura o `id` do elemento clicado.
  - **Click Classes**: Captura as classes CSS do elemento clicado.
  - **Page URL**: Captura a URL da página em que o evento ocorreu.
  
Essas variáveis são úteis para capturar dados automaticamente em eventos como cliques, carregamento de página e submissões de formulários.

#### **1.2. Variáveis Personalizadas**
Quando as variáveis incorporadas não atendem às suas necessidades (como capturar o valor de um campo de formulário ou manipular elementos dinâmicos da página), você pode criar **variáveis personalizadas**.

- Exemplos de variáveis personalizadas:
  - **Variável JavaScript Personalizado**: Use para capturar valores de um campo de formulário, como o valor de um `<input>`, ou para manipulações complexas em JavaScript.
  - **Variável de Camada de Dados (Data Layer)**: Use para capturar dados específicos enviados para a `dataLayer` do GTM, como IDs de produtos, valores de transação ou eventos personalizados.

**Como definir variáveis:**
1. Vá para a aba **Variáveis** no GTM.
2. Selecione variáveis incorporadas ou clique em **Nova** para criar uma variável personalizada.
3. Escolha o tipo de variável de acordo com sua necessidade (ex.: JavaScript Personalizado, Data Layer, etc.).
4. Nomeie e configure a variável com a lógica necessária.


### **2. Configurar o Acionador**

O **acionador** define **quando** a tag deve ser ativada. Ele monitora eventos no seu site (ex.: cliques, carregamento de página, tempo gasto na página) e dispara a tag quando determinadas condições são atendidas.

#### **Tipos Comuns de Acionadores:**
1. **Acionador de Clique**: Ativado quando um usuário clica em um elemento da página.
2. **Acionador de Página Visualizada**: Ativado quando a página carrega ou quando ocorre um evento de histórico (como mudanças de URL no caso de SPAs).
3. **Acionador de Envio de Formulário**: Ativado quando um formulário é enviado.
4. **Acionador de Tempo**: Ativado após o usuário passar um determinado tempo na página.

#### **Passos para Criar um Acionador:**
1. No menu do GTM, clique em **Acionadores**.
2. Clique em **Novo** para criar um novo acionador.
3. Escolha o tipo de acionador (ex.: clique, envio de formulário, tempo na página).
4. Defina as condições sob as quais o acionador será disparado (ex.: quando o `Click ID` for igual a `Acessar-click`).
5. Salve o acionador com um nome descritivo.

#### **Exemplo de Acionador de Clique no Botão:**
- Tipo: **Clique - Todos os Elementos**
- Condição: `Click ID` é igual a `Acessar-click`.


### **3. Criar a Tag**

A **tag** é o código que será executado quando o acionador for ativado. A tag pode enviar dados para uma API, disparar um evento de analytics, registrar uma conversão ou qualquer outra ação necessária.

#### **Tipos de Tags Comuns:**
1. **Tag HTML Personalizado**: Insira código JavaScript ou HTML para manipular dados, como enviar uma requisição para uma API.
2. **Tag de Google Analytics**: Envia eventos ou visualizações de página para o Google Analytics.
3. **Tag de Remakerting do Google Ads**: Envia informações de remarketing para o Google Ads.
4. **Tag de Conversão**: Registra uma conversão para uma campanha de anúncios.

#### **Passos para Criar uma Tag:**
1. No menu do GTM, vá para **Tags**.
2. Clique em **Nova** para criar uma nova tag.
3. Escolha o tipo de tag (ex.: HTML Personalizado, Tag de Analytics).
4. No caso de **HTML Personalizado**, insira o código que será executado, como uma requisição POST para uma API ou o envio de dados para o **Data Layer**.
5. Vincule o acionador criado anteriormente à tag.
6. Salve a tag com um nome descritivo.

### **Fluxo Geral Resumido:**

1. **Criar Variáveis**:
   - Habilite variáveis incorporadas como `Click Element`, `Click ID`, `Page URL` ou crie variáveis personalizadas, como a que captura o valor de um input.
   
2. **Criar o Acionador**:
   - Defina quando a tag deve ser disparada (ex.: clique no botão).
   - Condicione o acionador para garantir que ele só dispare em situações específicas (ex.: `Click ID` igual a `Acessar-click`).

3. **Criar a Tag**:
   - Insira o código HTML ou JavaScript que será executado (ex.: enviar dados para uma API).
   - Vincule o acionador à tag.
   - Teste o funcionamento da tag e do acionador usando o modo de **pré-visualização** do GTM.


