var nom=prompt("Ingrese su nombre")

var preg1=prompt("¿Cuándo se realizará la inauguración de las Olimpiadas?\nA=Lunes 02 de octubre \nB=Viernes 29 de setiembre \nC=Jueves 28 de setiembre")
if(preg1=="B"){
    preg1=1
}
else{
    preg1=0
}
var preg2=prompt("¿De qué color es la prompoción de 2do de secundaria?\nA=Celeste o Turquesa \nB= Rojo \nC= Morado")
if(preg2=="A"){
    preg2=1
}
else{
    preg2=0
}
var preg3=prompt("Nuevo deporte incluido este año\nA= Futsal femenino \nB= Balonmano \nC= Marcha atletica")
if(preg3=="A"){
    preg3=1
}
else{
    preg3=0
}
var total= preg1+preg2+preg3
if (total>=2){
    document.write("Lo has hecho bien,", nom)
}
else{
    document.write("Vuelve a intentarlo,", nom)
}