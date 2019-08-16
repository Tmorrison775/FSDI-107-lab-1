module.exports = {

    sayHello : function(name){
        console.log("Hello " + name);
    },
    smaller : function(num1, num2){
    
        if (num1 > num2) return num2;
        return num1;
    },
    greater : function(num1, num2){
        if (num1 > num2) return num1;
        return num2;
    },
     division : function(number, by){
        if (by == 0){
            console.log("Error! you should not divide by 0");
            return 0;
        }
        return number / by;
    },
    toUpper : function(text){
        return text.toUpperCase();
    },
    toLower : function(text){
        return text.toLowerCase();
    },
    isEven : function(number){
        var res = number % 2;
        if (res == 0) return true;
        else return false;
    },
    printEvents : function(howMany){
        var num = 0;
        var array = [];
        for(i = 0; i<= (howMany*2); i++){
            num = num + 1;
            if(num % 2 == 0){
                array.push(num);
            }
        }
        return array;
    }

}