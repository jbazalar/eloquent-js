function isEven(n) {
    switch(n) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            return (n < 0) ? isEven(n + 2) : isEven(n - 2);        
    }
}