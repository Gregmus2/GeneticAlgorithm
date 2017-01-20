
class Common{
    static crossover(a: Array<any>, b: Array<any>, i: number) : Array<any>{
        if (a.length != b.length){
            throw 'length of arrays must be equal';
        }
        let array1 = [];
        let array2 = [];
        for(let j = 0; j < i; j++){
            array1.push(a[j]);
            array2.push(b[j]);
        }
        for(let j = i; j < b.length; j++){
            array2.push(a[j]);
            array1.push(b[j]);
        }
        return [array1, array2];
    }
}