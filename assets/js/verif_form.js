function validPseudo(pseudo){
    let patternPseudo = /^[a-zA-Z0-9]*$/;
    return patternPseudo.test(pseudo);
}