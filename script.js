// Tabuleiro
let body = document.getElementsByTagName('body');
let chess_table = document.createElement('div');
chess_table.setAttribute('class', 'chess_table');
body[0].appendChild(chess_table);

// Colunas e Casas
for (let c = 0; c < 8; c++) {
    let chess_column = document.createElement('div');
    chess_column.setAttribute('class', 'chess_column');
    for (l = 0; l < 8; l++) {
        let chess_house = document.createElement('div');
        chess_house.setAttribute('class', 'chess_house');
        chess_column.appendChild(chess_house);
    }
    chess_table.appendChild(chess_column)
}

// Cor das casas
for (c = 0; c < 8; c++) {
    let column = document.querySelectorAll('.chess_column');
    let house = column[c].getElementsByClassName('chess_house');
    for (let h = 0; h < 8; h++) {
        if (h % 2 == 1 && c % 2 == 0) {
            house[h].style.cssText = "background-color: white;"
        }
        if (h % 2 == 0 && c % 2 == 1) {
            house[h].style.cssText = "background-color: white;"
        }
    }
}