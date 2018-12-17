// add a ready listnere to the whole DOM
// if., javascript wait until the DOM is finished loading
// before running anything
$(document).ready(()=>{
    $('button').click(function(){
        // console.log($(this));
        // attr method, will get the value of that attribute
        let gridSize = $(this).attr('diff');
        console.log(gridSize)
        let cards = []
        // our monsters start at 1. So start i at 1
        // every time through the loop, we push 2 monsters
        // on because this is a matching game, we need 2
        // so we loop half of the grid size (gridSize/2), but
        // we need to add 1, because we started at 1, not 0
        // OR, we need to end at <=
        for(let i = 1; i <= gridSize/2; i++){
            let monsterNumber = i;
            if(i<10){
                monsterNumber = "0"+i
            }
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`);
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`);
        }        
        // console.log(cards)
        // init a var to store our html inside of
        let memoryHTML = '';
        // loop through all of the cards
        cards.forEach((card)=>{
            memoryHTML += `
                <div class="card col-sm-3">
                    <div class="card-holder">
                        <div class="card-front">${card}</div>
                        <div class="card-back">${card}</div>
                    </div>
                </div>
            `
        })
        console.log(memoryHTML);
        // I'm sorry Jonathan... I will teach them a better way later!
        $('.memory-game').html(memoryHTML);
    });
});

