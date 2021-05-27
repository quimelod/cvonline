var cont = 0
var primero = 0
var tim

accion()

function accion() {
    tim = setInterval(() => {
        cont++
        icono = document.createElement("link")
        icono.rel="icon"
        icono.href=`${cont%2}.ico`
        document.head.replaceChild(icono, document.head.querySelector("head > link:nth-child(5)") )
     }, 500)
}