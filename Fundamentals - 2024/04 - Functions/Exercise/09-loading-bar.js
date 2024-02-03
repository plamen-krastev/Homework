function loadingBar(percent) {
    let percentBy10 = percent / 10;
    let percentRemain = 10 - percentBy10;
    let uploadString = '%';
    let remainString = '.';

    if (percent === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(
            `${percent}% [${uploadString.repeat(percentBy10)}${remainString.repeat(percentRemain)}]`
        );
        console.log('Still loading...');
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
// loadingBar(0);