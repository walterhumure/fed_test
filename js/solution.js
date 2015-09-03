 /**
    - GROUP ALL DIVs IN AN ARRAY 
    - FIND THE TALLEST
    - ADJUST THE OTHERS TO MATCH THE TALLEST DIV
    
 **/ 
    (function( $ ) {
        $.fn.equalHeights = function() {
            var tallestElement = 0;
            var startRow = 0;
            var elements = new Array();
            var $currentElement;
            var topPosition = 0;
    
            this.each(function() {
    
                $currentElement = $(this);
                topPostion = $currentElement.position().top; // ASSIGN topPosition TO CURRENT ELEMENT
    
                if (startRow != topPostion) {
                    // LOOP THROUGH DIV ELEMENTS TO DETERMINE TALLEST
                    for (currentDiv = 0 ; currentDiv < elements.length ; currentDiv++) {
                        elements[currentDiv].height(tallestElement);
                    }
    
                    elements.length = 0;
                    startRow = topPostion;
                    tallestElement = $currentElement.height();
                    elements.push($currentElement);
    
                } else {
                    elements.push($currentElement);
                    tallestElement = (tallestElement < $currentElement.height()) ? ($currentElement.height()) : (tallestElement);
    
                }
    
                // ADJUST OTHER elements TO MATCH HEIGHT OF tallestElement
                for (currentDiv = 0 ; currentDiv < elements.length ; currentDiv++) {
                    elements[currentDiv].height(tallestElement);
                }
    
            });
    
        };
    }) ( jQuery );