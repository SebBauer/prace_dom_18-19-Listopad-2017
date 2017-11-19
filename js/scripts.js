'use sctrict';

// Zadanie 1

var tab = ['Start', 'Firma', 'Produkty', 'Galeria', 'Kontakt']
var navHTML = '<ul>\n';
    for(i = 0; i < 5; i++) {
        navHTML += '<li><a href = "#">'+ tab[i] +'</a></li>';    
    }
navHTML += '</ul>';
    
document.write(navHTML);

// Zadanie 2

var star = '*';

for (var i = 0 ; i < 10 ; i++) {
        
    if(i % 2 === 0) {
        for (var j = 0 ; j < 10 ; j++) {
            document.write(star);
        }
    }
    
    else {
        for (var j = 0 ; j < 5 ; j++) {
            document.write(star);
        }
    }                
            document.write('<br>')
}

document.write('<br>')

// Zadanie 3

var suma = 0;

function plus_infinity() {
    for(i = 0; i < arguments.length; i++) {
        suma = suma + arguments[i];   
    }
    
    return suma;
}

document.write(plus_infinity(40, 50, 60, 80, 140));