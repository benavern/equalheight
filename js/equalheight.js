/********************************
 *      EQUAL HEIGHT SCRIPT     *
 *                              *
 * written by Benjamin Caradeuc *
 *     http://caradeuc.info     *
 ********************************/


/*The function*/
equalheight = function(){
    // initialisation
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;

    
    $(".equalheight").each(function() {
        $el = $(this); // each element
        $($el).height('auto'); //its height
        topPostion = $el.position().top; //its top position
        
        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) { // apply the max height
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0;
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else { // ...
            rowDivs.push($el);
            currentTallest = Math.max(currentTallest, $el.height());
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) { // apply the max height
            rowDivs[currentDiv].height(currentTallest);

        }
    });
    return true; //its ok ...
}


/*automatic...*/

$(window).on('resize', function(){

    equalheight(); // on window resize, it will resize ! :)
    
});

$(document).ready(function(){
    equalheight(); // yeah finally
});

