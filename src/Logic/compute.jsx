import Big from "big.js";

function isNumber(value){
    return /[0-9]+/.test(value);
}

function calculate(value1, value2, operation)
{
    const Value1 = Big(value1 || "0");
    const Value2 = Big(value2 || (operation === "/" || operation === "*" ? "1":"0"));


    if(operation === "+")
        return Value1.plus(Value2).toString();
    if(operation === "*")
        return Value1.times(Value2).toString();
    if(operation === "-")
        return Value1.minus(Value2).toString();
    if(operation === "/")
    {
        if(Value2 === 0){
        alert("Erro : Divisão por 0.");
        return "0";
        }
        else
        return Value1.div(Value2).toString();
    }
        
}

export default function compute(obj, buttonName)
{
    if(buttonName === "AC"){
        return {
            total: 0,
            next: 0,
            operation: null,
        }
    }

    if(buttonName === "Del")
    {
        return{
            total: Math.trunc(obj.total/10),
            next: obj.next,
            operation: obj.operation
        }
    }


    
    if(isNumber(buttonName))
    {
        if(obj.total === 0)
        {
            return{
                total: buttonName,
                next: obj.next,
                operation: obj.operation
            }
        }
        else
        return {
            total: Number(obj.total*10) + Number(buttonName),
            next: obj.next,
            operation: obj.operation
        }
    }


    

    if(buttonName === "+" || buttonName === "-" || buttonName === "*" || buttonName === "/")
    {
        if(!obj.operation)
        return{
            total: 0,
            next: obj.total,
            operation: buttonName
        }
        else
        return{
            total: obj.total,
            next: obj.next,
            operation: buttonName
        }
    }

    if(buttonName === "=")
    {
        if(obj.next && obj.operation)
        return{
            total: calculate(obj.next, obj.total, obj.operation),
            next: null,
            operation: null,
        }
    }

}