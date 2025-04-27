function tabuada() {
    let num = window.document.getElementById("txtn")
    let tab = window.document.getElementById('seltab')

    if (num.value.lenght == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            c++
            
        }
    }


    

}




/*btn.innerHTML("O resultado")
for (var tabuada = 0; tabuada <= 11; tabuada++) {
    document.write(tabuada)

}
*/