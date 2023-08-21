
(
    ()=>{

        const criarTarefa = (evento)=>{ // ?? o q sigifica esse evento ???

            evento.preventDefault()

            const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
            
            const input = document.querySelector("[data-form-input]")
            const valor = input.value

            const calendario = document.querySelector("[data-form-date]")
            const data = moment(calendario.value)
            const dataFormatada = data.format("DD/MM/YYYY")

            const tarefa = document.createElement("li") 
            tarefa.classList.add("task")

            const lista = document.querySelector("[data-list]") // ul

            lista.appendChild(tarefa)

            const conteudo = `<p class="content">${dataFormatada} - ${valor}</p>`

            tarefa.innerHTML = conteudo

            tarefa.appendChild(BotaoConclui()) // coloquei em cima do lista.appendChild(tarefa) e não funcionou, troquei pra aqui e funcionou.
            tarefa.appendChild(BotaoDeleta())

            const dados = {
                valor,
                dataFormatada
            }

            const tarefasAtualizadas = [...tarefas, dados]

            localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

            input.value = " "

            imprime()
        }

        const novaTarefa = document.querySelector("[data-form-button]")

        novaTarefa.addEventListener("click", criarTarefa)

        

        const BotaoConclui = () => {
            
            const botaoConclui = document.createElement("button")

            botaoConclui.addEventListener("click", concluirTarefa)

            botaoConclui.classList.add("check-button")

            botaoConclui.innerText = "concluir"

            return botaoConclui  // ?? pra que serve isso????
        }



        const concluirTarefa = (evento) => {  // ?? o q sigifica esse evento???
            const botaoConclui = evento.target  // botaoConclui = botao
            // Isso está me falando qual o alvo do evento, ou seja, quando eu clicar, eu quero saber em quem eu cliquei.
                                                
            const tarefaCompleta = botaoConclui.parentElement  // li

            tarefaCompleta.classList.toggle("done")  // o toggle me devolve um Booleano verdadeiro ou falso. No nosso caso, vai ser se eu tiver clicado ou não.
        }


        const BotaoDeleta = () => {
            const botaoDeleta = document.createElement("button")

            botaoDeleta.innerText = "deletar"

            botaoDeleta.classList.add("delete-button")

            botaoDeleta.addEventListener("click", deletarTarefa)

            return botaoDeleta
        }


        const deletarTarefa = (evento)=> {
            const botaoDeleta = evento.target

            const tarefaCompleta = botaoDeleta.parentElement
 
            tarefaCompleta.remove()  // NÃO ESQUECER OS PARENTESES !!!

            return botaoDeleta

        }

        // não consegui implementar Armazenado dados Aula 3.2 (PEGAR A TAREFA DO LOCALSTORAGE E IMPRIMIR)

        

    }

) ()

