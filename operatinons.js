let pizzasayi = +prompt('Nece eded Pizza isteyirsiniz?') 
let doners  = +prompt('Nece eded Doner isteyirsiniz?') 
let kolas = +prompt('Nece eded Kola isteyirsiniz?') 
let donerq = 3
let pizzaq = 8
let kolaq = 2

let netice =  pizzaq * pizzasayi + donerq * doners + kolaq * kolas 

document.getElementById('netice').innerHTML = 'Siz '+ pizzasayi+ ' Pizza sifaris etmisiniz ' + doners + ' Doner sifaris etmisiniz '+ kolas+ ' Kola  sifaris etmiziniz '+  ' Toplam Mebleğ ' + netice +'AZN-Dir ' 

