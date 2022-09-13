                
                let countel = document.getElementById("count-el");
                let countel1 = document.getElementById("count-el1");
                let sumel = document.getElementById("sum-el");
                
                let countel2 = document.getElementById("count-el2");
                let countel3 = document.getElementById("count-el3");
                let subel = document.getElementById("sub-el");

                let countel4 = document.getElementById("count-el4");
                let countel5 = document.getElementById("count-el5");
                let prodel = document.getElementById("prod-el");

                let countel6 = document.getElementById("count-el6");
                let countel7 = document.getElementById("count-el7");
                let divel = document.getElementById("div-el");

                let count1 = 0;
                let count2 = 0;
                let sumC = 0;

                let count3 = 0;
                let count4 = 0;
                let subC = 0;

                let count5 = 0;
                let count6 = 0;
                let prodC = 0;
                
                let count7 = 0;
                let count8 = 0;
                let divC = 0;

                function increment1(){

                    count1++;
                    countel.innerText = count1;

                }

                function decrement1(){

                    count1--;
                    countel.innerText = count1;

                }

                function increment2() {
                    
                    count2++;
                    countel1.innerText = count2;

                }

                function decrement2() {

                    count2--;
                    countel1.innerText = count2;

                }

                function sum() {
                    sumC = count1 + count2;
                    sumel.innerText = sumC;
                }

                function increment3() {

                    count3++;
                    countel2.innerText = count3;

                }

                function decrement3() {

                    count3--;
                    countel2.innerText = count3;

                }

                function increment4() {

                    count4++;
                    countel3.innerText = count4;

                }

                function decrement4() {

                    count4--;
                    countel3.innerText = count4;

                }

                function sub() {
                    
                    subC = count3 - count4;
                    subel.innerText = subC;

                }

                function increment5() {

                    count5++;
                    countel4.innerText = count5;

                }

                function decrement5() {

                    count5--;
                    countel4.innerText = count5;

                }

                function increment6() {

                    count6++;
                    countel5.innerText = count6;

                }

                function decrement6() {

                    count6--;
                    countel5.innerText = count6;

                }

                function prod() {

                    prodC = count5 * count6;
                    prodel.innerText = prodC;

                }

                function increment7() {

                    count7++;
                    countel6.innerText = count7;

                }

                function decrement7() {

                    count7--;
                    countel6.innerText = count7;

                }

                function increment8() {

                    count8++;
                    countel7.innerText = count8;

                }

                function decrement8() {

                    count8--;
                    countel7.innerText = count8;

                }

                function div() {

                    divC = count7 / count8;
                    divel.innerText = divC;

                }