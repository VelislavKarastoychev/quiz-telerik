# Quiz project.

This project is an interactive questionnaire designed to facilitate and enhance the learning and understanding of fundamental concepts in JavaScript programming. Its primary goal is to support and reinforce students' knowledge and, on a broader scale, serve as a helpful resource for progress reviews and interviews in the field of JavaScript for beginner programmers.


# Implementation:

To implement the project we used the @euriklis/validator package.


1. Създаваме масив от обекти. 

2. Всеки обект от точка 1 ще има следните ключове:

- Question - Стригн, в които се описва съдържанието на въпроса.
- Type - String or code.
- Answers - колекция от стрингове, които могат да бъдат отговор.
- Corect resiult - число 

3. На случаен принцип вземи един от елеменмтите на 1.
4. Иницилиазираи съдържанието на ключа question, разбъркай елементите на answers, като   запзиш променаната стойност на coretc result. 


5. Визуализирай 4 и изчакай за отговора потребителя, като го запазиш в променливата user answer.

6. Сравни получвния резилтат с corect result. 

7. Ако отговора е true отиди на стъпка 3, иначе отиди на стъпка 8.

8. Съобщение за грешен отговор. Отиди на стъпка 4.

