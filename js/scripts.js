'use sctrict';

// Zadanie 1

var tab = ['Start', 'Firma', 'Produkty', 'Galeria', 'Kontakt']
var navHTML = '<ul>\n';
    for(var i = 0; i < tab.length; i++) {
        navHTML += '<li><a href = "#">'+ tab[i] +'</a></li>';    
    }
navHTML += '</ul>';
    
document.write(navHTML);

// Zadanie 2

var star_even = '**********';
var star_odd = '*****'

for (var i = 0 ; i < 10 ; i++) {
        
    i % 2 === 0 ? document.write(star_even) : document.write(star_odd) ;
    document.write('<br>') ;
    
    }
//        for (var j = 0 ; j < 10 ; j++) {
//            document.write(star);
//        }
//    }
//    
//    else {
//        for (var j = 0 ; j < 5 ; j++) {
//            document.write(star);
//        }
//    }                
            


document.write('<br>')

// Zadanie 3

var suma = 0;

function plus_infinity() {
    for(var i = 0; i < arguments.length; i++) {
        suma = suma + arguments[i];   
    }
    
    return suma;
}

document.write(plus_infinity(40, 50, 60, 80, 140));