// add a ready listnere to the whole DOM
// if., javascript wait until the DOM is finished loading
// before running anything
$(document).ready(()=>{
    console.log("sanity check")

    $('button').click(function(){
        console.log($(this));
        // attr method, will get the value of that attribribute
        let gridSize = $(this).attr('diff');
        console.log(gridSize)
    });

});

