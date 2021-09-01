function sum(number) {
    let sum = 1;
    
    for (let i = 0; i < number; i++) {
        sum = sum + i;
    }
}

1 + 2 + 3
sum(4);
/* 
    number = 4;
    sum = 0;

    1st interaction: 
    i = 0;
    0 < 4 => true;
    continue;
    sum = 0 + 0 = 0;

    2nd interaction:
    i = 1;
    1 < 4 => true;
    continue;
    sum = 0 + 1 = 1;

    3th interaction:
    i = 2;
    2 < 4 => true;
    sum = 1 + 2 = 3;
    continue;

    4th interaction:
    i = 3;
    3 < 4 => true;
    continue;
    sum = 3 + 3 = 6;

    5th interaction:
    i = 4;
    4 < 4 => false;
    break;

STOP!
SUM = 6;
*/
