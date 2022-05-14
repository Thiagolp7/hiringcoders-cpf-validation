 # ✔️ Validador de CPF.
> - 👉 Projeto do treinamento Hiringcoders - Semana 1 - Javascript Básico - Prática.
> - 🔗 Deploy: https://thiagolp7.github.io/hiringcoders-cpf-validation/



https://user-images.githubusercontent.com/92824127/168441784-2163b355-4ef1-41df-a535-ad5a43c16616.mp4



---
## 📌 Implementação

- [x] Recusar cpf com menos de 11 números.
- [x] Recusar cpf que tenha todos números iguais.
- [x] Calculo para validação dos dois ultimos dígitos.
- [x] Permitir que o usuário use pontos e traço, formatação do input do cpf com regex.


---
## 💡 Como funciona o algorítimo de validação CPF.
> Para o cpf ser válido temos que verificar os 2 ultimos dígitos de acordo com os números anteriores.

- Para o nosso exemplo vamos usar o CPF fictício 123.456.789-09.
  
#### ➡️ Validação Primeiro dígito verificador:
> Para validar o primeiro dígito verificador, usaremos os 9 primeiros. 
- Pegamos o primeiro número e multiplicamos por 10.
- Pegamos o segundo número e multiplicamos por 9.
- Vamos fazer isso para todos os números sempre diminuindo o multiplicador para o próximo número. Com a tabela abaixo fica mais visual e mais fácil para o entendimento: 

![image](https://user-images.githubusercontent.com/92824127/168440885-78949296-ef51-46bf-b646-4c3af5276613.png)

- No final somamos o resultado de todas multiplicações: 10 + 18 + 24 + 28 + 30 + 30 + 28 + 24 + 18 = 210
- Pegamos o 210 e multiplicamos por 10 e dividimos por 11: (210 * 10) / 11 = 190, resto = 10.
- Se o resto da operação for igual a 10 ou 11, consideramos que o primeiro digito verificador deve ser igual a 0.
- No nosso exemplo obtemos resto 10, primeiro verificador deve ser igual a 0 e no nosso cpf exemplo temos o numero 0. Então nosso primeiro número verificador é válido! 

#### ➡️ Validação Segundo dígito verificador:
> Para validar o segundo dígito verificador, usaremos a mesma lógica do primeiro, só que agora vamos utilizar os 10 primeiros números. 
- Fazemos a multiplicação de cada número sempre reduzindo o multiplicador para o próximo. Veja a tabela:

![image](https://user-images.githubusercontent.com/92824127/168441134-40d272c7-6a26-4731-b36b-b5994a03cdc6.png)

- Somamos o resultado de todas multiplicações: 11 + 20 + 27 + 32 + 35 + 36 + 35 + 32 + 27 + 0 = 255
- Pegamos o 255 e multiplicamos por 10 e dividimos por 11: (255 * 10) / 11 = 231, resto = 9.
- Mesma regra do primeiro, se o resto da operação for igual a 10 ou 11, consideramos que o primeiro digito verificador deve ser igual a 0.
- No nosso exemplo obtemos resto 9, não é igual a 10 nem 11, então nosso segundo número verificador deve ser igual o resto 9. No nosso exemplo temos o segundo número verificador(ultimo número) igual a 9. Então nosso segundo número também é válido!

> Por fim se os dois ultimos números de verificação são válidos nosso cpf é totalmente válido! 
>
> Obs.: Devemos desvalidar também os cpfs com todos os números iguais, se não eles passam em todos os testes acima.

> Fonte: <a href="https://www.devmedia.com.br/validar-cpf-com-javascript/23916" target="_blank"> Devmedia </a>

--- 
## :hammer_and_wrench: Tecnologias

<div align="left">
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript Badge"/>
  </a>
</div>
