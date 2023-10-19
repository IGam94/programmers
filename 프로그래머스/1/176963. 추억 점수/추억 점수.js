function solution(name, yearning, photo) {
    let result = {}
    name.map((key, i) => (result[key]= yearning[i]));
    let score = photo.map((key,i)=>{
        let plus = 0
        key.map((item)=>{
            typeof result[item]==='number'? plus += result[item] : ''
        })
        return plus
    })
    
    return score;
}