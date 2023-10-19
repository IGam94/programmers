process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let star=""
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i=0; i<b; i++){
        
        for(let l=0; l<a; l++){
            star += "*"
        }
        star +="\n"
    }
    console.log(star)
});