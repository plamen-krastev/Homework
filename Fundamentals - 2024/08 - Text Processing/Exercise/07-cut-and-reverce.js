function solve(text) {
    let middleIdx = text.length / 2;
    
    let leftHalfText = text
        .slice(0, middleIdx)
        .split('')
        .reverse()
        .join('');
    let rightHalfText = text
        .slice(middleIdx)
        .split('')
        .reverse()
        .join('');

    console.log(leftHalfText);
    console.log(rightHalfText);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');