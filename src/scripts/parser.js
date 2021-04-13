const parser = require('@mliebelt/pgn-parser');
const fs = require('fs');
let gameTwo = '../data/game2.pgn';
let parsedTwo = [];
let game = parser.parse('1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 Nc6 8. Qd2  O-O 9. Bc4 Bd7 10. h4 Rc8 11. Bb3 Ne5 12. O-O-O Nc4 13. Bxc4 Rxc4 14. h5 Nxh5  15. g4 Nf6 16. Nde2 Qa5 17. Bh6 Bxh6 18. Qxh6 Rfc8 19. Rd3 R4c5 20. g5 Rxg5 21.  Rd5 Rxd5 22. Nxd5 Re8 23. Nef4 Bc6 24. e5 Bxd5 25. exf6 exf6 26. Qxh7+ Kf8 27.  Qh8+', {startRule: "game"})
parsedTwo.push(JSON.stringify(game));
fs.writeFileSync('../data/game2.json', parsedTwo); 

function rankFile(){
    parsedTwo.reduce()
}