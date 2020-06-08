class Calculator{
    constructor(prevOperandTextElement, curOperandTextElement){
        this.prevOperandTextElement = prevOperandTextElement
        this.curOperandTextElement = curOperandTextElement
        this.clear()
    }

    clear(){
        this.curOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        this.curOperand = this.curOperand.toString() + number.toString()
    }

    chooseOperation(operation){


    }

    compute(){

    }

    updateDisplay(){
        this.curOperandTextElement.innerText = this.getDisplayNumber(this.curOperand)
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-del]')
const allClearButton = document.querySelector('data-all-clear]')
const prevOperandTextElement = document.querySelector('[data-prev-operand]')
const curOperandTextElement = document.querySelector('[data-cur-operand]')

const calculator = new Calculator(prevOperandTextElement, curOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})