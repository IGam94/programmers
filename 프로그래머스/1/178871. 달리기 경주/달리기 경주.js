function solution(players, callings) {
    const ranks={}
    players.forEach((c,i)=>{ranks[c]=i});
    for(const calling of callings){
        const callingIndex = ranks[calling];
        const loserIndex = ranks[calling]-1
        
        ranks[calling]--
        ranks[players[loserIndex]]++
        
        players[callingIndex] = players[loserIndex];
        players[loserIndex] = calling;
        
    }

    return players;
}