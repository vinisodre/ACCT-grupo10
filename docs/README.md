# Desafio final Hiring Coders
## Grupo 10 ACCT

Integrantes
Bruno Momose
Erycson José
Vinicius Sodré
Leonardo Felicidade
Adriana Evangelista
Brendon Vieira
Gabriela Ferreira
Werner Hecht

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
Foram usados o Banco de Dados Dynamo, o  AWS Lambda e...
O objetivo era fazer a verificação se o cliente que adquiriu o produto no site já era *prospect*. Sendo positivo, o cadastro deveria ser alterado de *prospect* para *client* 

### ACCT
