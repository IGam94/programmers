function solution(arr) {
    let answer = 0
    arr.map((item)=>{
        answer += item
    })
    answer = answer/arr.length
    return answer;
}