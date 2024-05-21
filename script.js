function isPalindrome(frase){

    const fraseLimpa = frase.replaceAll(" ","").toLowerCase(); 

    let esquerda = 0;
    let direita = fraseLimpa.length -1;


    while(esquerda < direita){
        
        if(fraseLimpa[esquerda] !== fraseLimpa[direita]){
            return false;
        }
        esquerda++;
        direita--;
    }
    return true
}



function arrayMaxMin(arr){
    if(arr.length === 0){
        return [null, null];
    }

    let min = arr[0]
    let max = arr[0]

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return [min, max]
}
