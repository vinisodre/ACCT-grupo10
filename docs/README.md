# Desafio final Hiring Coders
## Grupo 10 ACCT

Integrantes:
- [Bruno Momose](https://github.com/bmomose)
- [Erycson José](https://github.com/ErycsonJose)
- [Vinicius Sodré](https://github.com/vinisodre)
- [Leonardo Felicidade](https://github.com/Hujaio)
- [Adriana Evangelista](https://github.com/adiefco)
- [Brendon Vieira](https://github.com/brendongvieira)
- [Gabriela Ferreira](https://github.com/gabrielatferreira)
- [Werner Hecht](https://github.com/Junior-Hecht)

## Objetivo
Recriar a página da ACCT e implementar verificações no banco de dados usando as tecnologias desenvolvidas ao longo do curso HiringCoders#2.

### Como instalar o projeto?
É importante ter acesso ao ecossistema VTEX, do contrário, não será possível instalar o projeto.

    $vtex login {sua conta}  
    $vtex unlink --all
    $vtex use {seu workspace}  
    $vtex link  
    $vtex browse

### O que foi usado para o desenvolvimento do Projeto
#### VTEX IO
O Curso Hiring Coders teve como objetivo principal a formação de Desenvolvedores Juniores com foco principal na tecnologia VTEX IO.
Ela é uma aplicação *Low Code* com o objetivo de facilitar o desenvolvimento *frontend* de lojas virtuais.

##### Frontend
Toda a estrutura do site foi desenvolvida usando VTEX. Por trás dela, rodam diversas tecnologias, em especial o React Js.

##### Backend
A estrutura proporcionada pela VTEX facilitou a criação de produtos e serviços. O *Backend* VTEX deve processar toda a compra feita pelo usuário e comunicar-se com a API da AWS.

#### AWS
A AWS proporcionou diversas soluções que ajudaram a completar este desafio. 
Foram usados o Banco de Dados DynamoDB, o  AWS Lambda e API Gateway.
O objetivo era fazer a verificação se o cliente que adquiriu o produto no site já era *prospect*. Sendo positivo, o cadastro deveria ser alterado de *prospect* para *client* 

### O Repositório Backend
O repositório de integração entre VTEX e AWS que executa a verificação do *prospect* no banco de dados e o altera para *client* após a compra está [AQUI](https://github.com/brendongvieira/service-grupo10acct)(Repositório referente ao Backend do grupo).

### ACCT
#### Temática do desafio: ACCT
A ACCT é uma empresa de arquitetura e engenharia de software com 11 anos de história solucionando problemas de negócios com tecnologia que atua em 3 países.

Neste frontend usamos a logo da ACCT, suas cores, missão e valores da ACCT em uma página de **"Sobre"**. Esta página mostra as virtudes do serviço da ACCT.
