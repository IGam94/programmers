function solution(numbers) {
    let answer = 0;
    const originNumbers = [1,2,3,4,5,6,7,8,9,0]
    originNumbers.forEach((item)=>{
        if(numbers.indexOf(item) === -1){
            answer += item
        }
    })
    
    return answer;
}