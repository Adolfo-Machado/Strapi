# Strapi application


To manage your project 🚀, go to the administration panel at:  
http://localhost:1331/admin

To access the server ⚡️, go to:  
http://localhost:1331


user: adolfo@email.com  
pass: Strapi@2023


## Usefull commands

To see a list of Strapi Commands:

type `npx strapi -h` in command line

## Anotações

O Strapi, sendo um framework de desenvolvimento de back-end, possui ciclos de vida (lifecycles) associados aos eventos que ocorrem em diferentes momentos do processo de execução do servidor. Aqui estão alguns dos principais lifecycles do Strapi:

1. **initialize**: Este ciclo de vida é executado quando o servidor Strapi está sendo inicializado. Pode ser utilizado para realizar tarefas de inicialização ou configuração.

2. **afterInitialize**: Este é executado após o ciclo de vida initialize e pode ser usado para realizar tarefas adicionais após a inicialização do servidor.

3. **bootstrap**: Este ciclo de vida ocorre durante a inicialização do aplicativo Strapi, antes de as rotas serem registradas. Pode ser usado para configurar ações específicas antes que o aplicativo esteja totalmente carregado.

4. **afterBootstrap**: Executado após o ciclo de vida bootstrap. Pode ser usado para tarefas adicionais após a inicialização do aplicativo.

5. **load**: Este ciclo de vida é usado para carregar plugins no Strapi. Pode ser usado para personalizar o carregamento de plugins específicos.

6. **afterLoad**: Executado após o ciclo de vida load e pode ser usado para realizar tarefas adicionais após o carregamento de plugins.

7. **validate**: Este ciclo de vida ocorre durante a validação das configurações do aplicativo Strapi. Pode ser usado para validar configurações específicas.

8. **didInitialize**: Este ciclo de vida ocorre quando todas as inicializações estão concluídas. Pode ser usado para tarefas adicionais após a conclusão da inicialização.

Esses são apenas alguns dos lifecycles principais no Strapi. Eles fornecem pontos de extensão que permitem que você execute código personalizado em momentos específicos do ciclo de vida do aplicativo. Para obter informações mais detalhadas ou para se aprofundar em tópicos específicos, é recomendável consultar a documentação oficial do Strapi.

