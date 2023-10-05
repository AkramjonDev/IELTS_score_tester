$(function()
{
    $(".btn").click(function()
    {
        const listening = $(".Listening").val()*1;
        const reading = $(".Reading").val()*1;
        const writing = $(".Writing").val()*1;
        const speaking = $(".Speaking").val()*1;
        const overall = (listening+reading+writing+speaking)/4;

        if(overall == 8.75 && overall == 9){
            $(".result").val(9.0);   
        }    
        else if(overall >= 8.25 && overall < 8.75){
            $(".result").val(8.5);
        }    
        else if(overall >= 7.75 && overall < 8.25){
            $(".result").val(8.0);
        }    
        else if(overall >= 7.25 && overall < 7.75 ){
            $(".result").val(7.5);
        }    
        else if(overall >= 6.75 && overall < 7.25){
            $(".result").val(7.0);
        }    
        else if(overall >= 6.25 && overall < 6.75){
            $(".result").val(6.5);
        }    
        else if(overall >= 5.75 && overall < 6.25){
            $(".result").val(6.0);
        }  
        else if(overall >= 5.25 && overall < 5.75){
            $(".result").val(5.5);
        } 
        else if(overall >= 4.75 && overall < 5.25){
            $(".result").val(5.0);
        }  
        else if(overall >= 4.25 && overall < 4.75){
            $(".result").val(4.5);
        } 
        else if(overall >= 3.75 && overall < 4.25){
            $(".result").val(4.0);
        }  
        else if(overall >= 3.25 && overall < 3.75){
            $(".result").val(3.5);
        } 
        else if(overall >= 2.75 && overall < 3.25){
            $(".result").val(3.0);
        }  
        else if(overall >= 2.25 && overall < 2.75){
            $(".result").val(2.5);
        } 
        else if(overall >= 1.75 && overall < 2.25){
            $(".result").val(2);
        }  
        else if(overall >= 1.25 && overall < 1.75){
            $(".result").val(1.5);
        } 
        else if(overall >= 0.75 && overall < 1.25){
            $(".result").val(1);
        }  
        else if(overall >= 0.25 && overall < 0.75){
            $(".result").val(0.5);
        } 
        else if(overall >= 0 && overall < 0.25){
            $(".result").val(0);
        }  
    })
});
