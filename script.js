    function pressButton() {
        var gewonnen = "You've won!";
        var verloren = "You've lost!";
        var unentschieden = "It's a draw!"
        var call = document.getElementById("call");
        var secondCall = document.getElementById("secondcall");
        var end = document.getElementById("end");
        var callButton = document.createElement("button");
        var secondCallButton = document.createElement("button");
        var endButton = document.createElement("button");
        var callSum;
        var dealerCard = 0;

        callButton.textContent = "Call";
        endButton.textContent = "End";
        call.appendChild(callButton);
        end.appendChild(endButton);

        function firstPress() {
            first = Math.floor(Math.random() * 12);
            if (first <= 1) {
                first = 1;
            }
            second = Math.floor(Math.random() * 12);
            if (second <= 1) {
                second = 1;
            }
            if (second == 11 && first == 11) {
                sum = 12;
            }
            else {
            sum = first + second;
            twocards = first + " + " + second + " = " + sum + " ";
            }
            if (sum == 21) {           
                document.getElementById("firstcards").innerHTML = twocards + gewonnen;
                callButton.disabled = true;
                endButton.disabled = true;              
            }
            else {   
            document.getElementById("firstcards").innerHTML = twocards;
            document.querySelector("button").setAttribute("disabled", true);
            roundCall();
            roundEnd(sum);
            }
        }

        function roundCall() {
        callButton.addEventListener("click", function() {
            
            anotherCard = Math.floor(Math.random() * 12);
            if (anotherCard <= 1) {
                anotherCard = 1;
            }
            callSum = sum + anotherCard;
            if (callSum > 21) {
                call.innerHTML = verloren;
                endButton.disabled = true;
                secondCallButton.disabled = true;
            }
            else {
            call.innerHTML = callSum;
            }
            roundEnd(callSum);
            secondRoundCall();            
        });
        }

        function secondRoundCall() {
            secondCallButton.textContent = "Second Call";
            secondCall.appendChild(secondCallButton);
            secondCallButton.addEventListener("click", function() {
                lastCard = Math.floor(Math.random() * 12);
                if (lastCard <= 1) {
                    lastCard = 1;
                }
                secondCallSum = callSum + lastCard;
                if (secondCallSum > 21) {
                    call.innerHTML = verloren;
                    endButton.disabled = true;
                }
                else {
                call.innerHTML = secondCallSum;
                secondCallButton.disabled = true;
                }
                roundEnd(secondCallSum);
            });
        }

        function dealersGame(summe) {
            while (dealerCard <= 16) {
                dealerCard = dealerCard + Math.floor(Math.random() * 12);
            }
            if (dealerCard > 21) {
                end.innerHTML = "The Dealer has: " + dealerCard + " " + gewonnen;
            }
            else if (dealerCard > summe){
                end.innerHTML = "The Dealer has: " + dealerCard + " " + verloren;
            }
            else if (dealerCard < summe){
                end.innerHTML = "The Dealer has: " + dealerCard + " " + gewonnen;
            }
            else if (dealerCard == summe){
                end.innerHTML = "The Dealer has: " + dealerCard + " " + unentschieden;
            }
        }

        function roundEnd(summe){
            endButton.addEventListener("click", function () {
                dealersGame(summe);
                callButton.disabled = true;
                secondCallButton.disabled = true;
            });
        }
        
        firstPress();                         
    }     

