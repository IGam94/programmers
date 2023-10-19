function solution(name, yearning, photo) {
    let result = {}
    name.map((key, i) => (result[key]= yearning[i]));
    console.log(result)
    let score = photo.map((key,i)=>{
        let plus = 0
        key.map((item)=>{
            console.log('타입',typeof result[item])
            typeof result[item]==='number'? plus += result[item] : ''
        })
        return plus
    })
    
    var answer = [];
    return score;
}