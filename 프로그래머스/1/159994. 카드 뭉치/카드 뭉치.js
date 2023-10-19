function solution(cards1, cards2, goal) {
    const answer = []
    const cards01 = cards1
    const cards02 = cards2
    goal.map(item=>{
        if(cards1[0] === item ){
            answer.push(item)
            cards01.shift() 
        }else if (cards2[0] === item){
            answer.push(item)
            cards02.shift() 
        }
    })
    console.log(answer)
    if(JSON.stringify(answer) === JSON.stringify(goal)){
        return 'Yes'
    }else {
        return 'No'
    }

}