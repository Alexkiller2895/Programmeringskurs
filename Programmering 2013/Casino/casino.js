
////////Variables///////

var ruta_1;
var ruta_2;
var ruta_3;
var money;
var CoolDown;
var CoolDownBet;
var bet;
var bildarray = new Array();
var tablearray = new Array();
var MAXBET;
var Cheatcode;

////////////Variable Equals////////////

ruta_1 = 0;
ruta_2 = 0;
ruta_3 = 0;
CoolDown = 0;
CoolDownBet = 0;
bet = 1;
money = 100; /////Pengar man har i början
MAXBET = 3; ////MAX hur mycket man kan få Bet:a

tablearray[0] = "gfx/Tables/Table1.png";
tablearray[1] = "gfx/Tables/Table2.png";
tablearray[2] = "gfx/Tables/Table3.png";

bildarray[0] = "gfx/slots/cherry.jpg";
bildarray[1] = "gfx/slots/Lemon.png";
bildarray[2] = "gfx/slots/orange.png";
bildarray[3] = "gfx/slots/blue berry.png";
bildarray[4] = "gfx/slots/Bar1.png";
bildarray[5] = "gfx/slots/Bar2.png";
bildarray[6] = "gfx/slots/Bar3.png";
bildarray[7] = "gfx/slots/Jingle Bells.png";
bildarray[8] = "gfx/slots/seven.jpg";
bildarray[9] = "gfx/slots/All-Star.png";

//////////Fusk//////

Cheatcode = 0;///////////Fusk om vad alla rutor blir till. Cheatcode = 0 = Cheat False. Cheatcode = 1-10 = Cheat true.
//////////                                                                                          1 = bildarray[9]
//////////                                                                                          2 = bildarray[6]
//////////                                                                                          3 = bildarray[4]
//////////                                                                                          4 = bildarray[3]
//////////                                                                                          5 = bildarray[0]
//////////                                                                                          6 = bildarray[1]
//////////                                                                                          7 = bildarray[2]
//////////                                                                                          8 = bildarray[8]
//////////                                                                                          9 = bildarray[9]
//////////                                                                                          10= bildarray[10]


/////////Functions////////////////

function spin()
{
if(money == 0) /////Lost meddelandet kommer repiterande om credit < 1
{
losermessage()

}

if(money > 50000) ////// Winning meddelande kommer repiterande om Credit > 50000
{
Winmessage()

}
if(CoolDown == 0)
{
if(money >= bet) ////Pengar måstes vara mer eller dessamma som 1 innan man kan snurra
{
CoolDown = CoolDown+1; //// Detta gör så CoolDown != 0 så att spin inte funkar tills den blir 0 igen
CoolDownBet = CoolDownBet + 1; ////Som innan, men detta stoppar så man inte kan bet:a under rullningen
money = money - bet; ////minskar antal "bet" credit för varje spin
wins(0) ////Detta är för att göra "winning Paid" till 0 när man snurrar
PullingSound() ////drag ljud direkt efter klicket////
setTimeout("RollingSound()",300) ///////Rullande ljudet kommer efter 0.3 sekunder
setTimeout("Cooldownfun()",3500) ////efter 4 sekunder kan man snurra igen är, "COOL DOWN på 4 sekunder"
setTimeout("Cooldownfun2()",3200) //// Efter 3.2 sekunder kan man ändra på Betningen igen
Switch()   ///// Denna function gör så att bilderna ändras snabbt för varje 0.1 sekund efter "spin"
result_money() ////Visar hur mycket credit man har efter spin
}
}
}

////////////Bet functionen////////

function morebet()
{
if(CoolDownBet == 0)
{
if(bet < MAXBET)
{
CoolDownBet = CoolDownBet+1
bet = bet + 1
result_bet()
BetingSound()
Tablebild()
setTimeout("Cooldownfun2()",2250) //// Efter 3.2 sekunder kan man ändra på Betningen igen
}
else if(bet == MAXBET)
{
CoolDownBet = 1
bet = 1
result_bet()
Tablebild()
BetingSound()
setTimeout("Cooldownfun2()",2250) //// Efter 3.2 sekunder kan man ändra på Betningen igen
}
}
}

//////////////Cooldown

function Cooldownfun()
{
CoolDown = CoolDown-1
}

function Cooldownfun2()
{
CoolDownBet = CoolDownBet-1
}

////Sound Effecs//////////

  function PullingSound(){
    var Pulling = document.getElementById("pullsound");
    Pulling.play();
                 }
				 
function RollingSound(){
    var rullandeljud = document.getElementById("rollsound");
    rullandeljud.play();
                 }
				 
function BetingSound(){
    var Satsljud = document.getElementById("Betsound");
    Satsljud.play();
                 }
				 
function WinningSound(){
    var vinnljud = document.getElementById("winsound");
    vinnljud.play();
	CoolDown = CoolDown+1;
	setTimeout("Cooldownfun()",2200);
                 }
				 
				 
				 
////////////////////

function resultat()
{
resultat_ruta1()
resultat_ruta2()
resultat_ruta3()
result_money()
}


function result_money()
{
var money1;
money1=document.getElementById("varmoney"); 
money1.childNodes[0].nodeValue=money ;
}

function result_bet()
{
var bet1;
bet1=document.getElementById("varbet"); 
bet1.childNodes[0].nodeValue=bet ;
}

function wins(value)
{
var won;
won=document.getElementById("winsvalue"); 
won.childNodes[0].nodeValue=value*bet ;
if(value > 0){
money = money + value * bet;
WinningSound()
}
}

function resultat_ruta1()
{
var resultat1;
resultat1=document.getElementById("varruta1"); 
resultat1.childNodes[0].nodeValue=ruta_1 ;
}

function resultat_ruta2()
{
var resultat2;
resultat2=document.getElementById("varruta2"); 
resultat2.childNodes[0].nodeValue=ruta_2 ;


}

function resultat_ruta3()
{
var resultat3;
resultat3=document.getElementById("varruta3"); 
resultat3.childNodes[0].nodeValue=ruta_3 ;
}

////Messages////////////

function Winmessage()
{
alert("Congratulations!")
alert("YOU_HAVE_WON_THE_WHOLE_GAME!")
Winmessage()


}
function losermessage()
{
alert("Your_money_are_to_low!")
alert("You_have_lost_the_game")
alert("LOSER!!!")
losermessage()
}

///////////////////////////////////Bild byte////////////////////

function Tablebild()
{
var Tablebyte;
Tablebyte=document.getElementById("Tablebyt");
if(bet == 1)
{
Tablebyte.src=tablearray[0];
}
if(bet == 2)
{
Tablebyte.src=tablearray[1];
}
if(bet == 3)
{
Tablebyte.src=tablearray[2];
}

}



function bytbild1()
{
var bildbyte1;
bildbyte1=document.getElementById("bildbyt1");
if(ruta_1 == 1)
{
bildbyte1.src=bildarray[9];
}
if(ruta_1 == 2)
{
bildbyte1.src=bildarray[6];
}
if(ruta_1 == 3)
{
bildbyte1.src=bildarray[4];
}
if(ruta_1 == 4)
{
bildbyte1.src=bildarray[3];
}
if(ruta_1 == 5)
{
bildbyte1.src=bildarray[0];
}
if(ruta_1 == 6)
{
bildbyte1.src=bildarray[1];
}
if(ruta_1 == 7)
{
bildbyte1.src=bildarray[2];
}
if(ruta_1 == 8)
{
bildbyte1.src=bildarray[5];
}
if(ruta_1 == 9)
{
bildbyte1.src=bildarray[7];
}
if(ruta_1 == 10)
{
bildbyte1.src=bildarray[8];
}
}

function bytbild2()
{
var bildbyte2;
bildbyte2=document.getElementById("bildbyt2");
if(ruta_2 == 1)
{
bildbyte2.src=bildarray[9];
}
if(ruta_2 == 2)
{
bildbyte2.src=bildarray[6];
}
if(ruta_2 == 3)
{
bildbyte2.src=bildarray[4];
}
if(ruta_2 == 4)
{
bildbyte2.src=bildarray[3];
}
if(ruta_2 == 5)
{
bildbyte2.src=bildarray[0];
}
if(ruta_2 == 6)
{
bildbyte2.src=bildarray[1];
}
if(ruta_2 == 7)
{
bildbyte2.src=bildarray[2];
}
if(ruta_2 == 8)
{
bildbyte2.src=bildarray[5];
}
if(ruta_2 == 9)
{
bildbyte2.src=bildarray[7];
}
if(ruta_2 == 10)
{
bildbyte2.src=bildarray[8];
}
}

function bytbild3()
{
var bildbyte3;
bildbyte3=document.getElementById("bildbyt3");
if(ruta_3 == 1)
{
bildbyte3.src=bildarray[9];
}
if(ruta_3 == 2)
{
bildbyte3.src=bildarray[6];
}
if(ruta_3 == 3)
{
bildbyte3.src=bildarray[4];
}
if(ruta_3 == 4)
{
bildbyte3.src=bildarray[3];
}
if(ruta_3 == 5)
{
bildbyte3.src=bildarray[0];
}
if(ruta_3 == 6)
{
bildbyte3.src=bildarray[1];
}
if(ruta_3 == 7)
{
bildbyte3.src=bildarray[2];
}
if(ruta_3 == 8)
{
bildbyte3.src=bildarray[5];
}
if(ruta_3 == 9)
{
bildbyte3.src=bildarray[7];
}
if(ruta_3 == 10)
{
bildbyte3.src=bildarray[8];
}
}

/////////////////////Vinst/////////////////


function chance()
{
//////Cherry////////
if(ruta_1 == 5 && ruta_2 == 5 && ruta_3 == 5)
{
wins(10)
result_money()

}
else if(ruta_1 == 5 && ruta_2 == 5)
{
wins(5)
result_money()
}
else if(ruta_1 == 5)
{
wins(2)
result_money()
}
//////////Lemon////////
if(ruta_1 == 6 && ruta_2 == 6 && ruta_3 == 6)
{
wins(15)
result_money()
}

/////////Orange/////////
if(ruta_1 == 7 && ruta_2 == 7 && ruta_3 == 7)
{
wins(25)
result_money()
}

/////////Blue berry/////////
if(ruta_1 == 4 && ruta_2 == 4 && ruta_3 == 4)
{
wins(30)
result_money()
}

/////////Bar 1/////////
if(ruta_1 == 3 && ruta_2 == 3 && ruta_3 == 3)
{
wins(40)
result_money()
}

/////////Bar 2/////////
if(ruta_1 == 8 && ruta_2 == 8 && ruta_3 == 8)
{
wins(50)
result_money()
}

/////////Bar 3/////////
if(ruta_1 == 2 && ruta_2 == 2 && ruta_3 == 2)
{
wins(60)
result_money()
}
/////////////////Buggad//////////////////////////////////
/////////Bar Stairs 1 2 3/////////
/////////if(ruta_1 == 3 && ruta_2 == 8 && ruta_3 == 2)
/////////{
/////////wins(30)
/////////result_money()
/////////}

/////////Bar Stairs 3 2 1/////////
/////////if(ruta_1 == 2 && ruta_2 == 8 && ruta_3 == 3)
/////////{
/////////wins(30)
/////////result_money()
/////////}
////////////////////////////////////////////////////////

/////////Any bars/////////
if (ruta_1 != ruta_2 && ruta_2 != ruta_3)
{
if(ruta_1 == 2 || ruta_1 == 8 || ruta_1 == 3)
{
if(ruta_2 == 2 || ruta_2 == 8 || ruta_2 == 3)
{
if(ruta_3 == 2 || ruta_3 == 8 || ruta_3 == 3)
{
wins(20)
result_money()
}
}
}
}

/////////Bells/////////
if(ruta_1 == 9 && ruta_2 == 9 && ruta_3 == 9)
{
wins(90)
result_money()
}

/////////Sevens/////////
if(ruta_1 == 10 && ruta_2 == 10 && ruta_3 == 10)
{
wins(300)
result_money()
}

/////////All-Stars/////////
if(ruta_1 == 1 && ruta_2 == 1 && ruta_3 == 1)
{
wins(500)
result_money()
}



}





////////Switching pictures when Spins!//////

function Switch()
{
setTimeout("Switch1()",100)
setTimeout("Switch2()",200)
setTimeout("Switch3()",300)
setTimeout("Switch4()",400)
setTimeout("Switch5()",500)
setTimeout("Switch6()",600)
setTimeout("Switch7()",700)
setTimeout("Switch8()",800)
setTimeout("Switch9()",900)
setTimeout("Switch10()",1000)
setTimeout("Switch11()",1100)
setTimeout("Switch12()",1200)
setTimeout("Switch13()",1300)
setTimeout("Switch14()",1400)
setTimeout("Switch15()",1500)
setTimeout("Switch16()",1600)
setTimeout("Switch17()",1700)
setTimeout("Switch18()",1800)
setTimeout("Switch19()",1900)
setTimeout("Switch20()",2000)
setTimeout("Switch21()",2150)
setTimeout("Switch22()",2350)
setTimeout("Switch23()",2500)
setTimeout("Switch24()",2750)
setTimeout("Switch25()",3200)
}

function Switch1()
{
ruta_1 = 1;
ruta_2 = 1;
ruta_3 = 1;
bytbild1()
bytbild2()
bytbild3()
}


function Switch2()
{
ruta_1 = 2;
ruta_2 = 2;
ruta_3 = 2;
bytbild1()
bytbild2()
bytbild3()
}


function Switch3()
{
ruta_1 = 3;
ruta_2 = 3;
ruta_3 = 3;
bytbild1()
bytbild2()
bytbild3()
}

function Switch4()
{
ruta_1 = 4;
ruta_2 = 4;
ruta_3 = 4;
bytbild1()
bytbild2()
bytbild3()
}

function Switch5()
{
ruta_1 = 5;
ruta_2 = 5;
ruta_3 = 5;
bytbild1()
bytbild2()
bytbild3()
}

function Switch6()
{
ruta_1 = 6;
ruta_2 = 6;
ruta_3 = 6;
bytbild1()
bytbild2()
bytbild3()
}

function Switch7()
{
ruta_1 = 7;
ruta_2 = 7;
ruta_3 = 7;
bytbild1()
bytbild2()
bytbild3()
}

function Switch8()
{
ruta_1 = 8;
ruta_2 = 8;
ruta_3 = 8;
bytbild1()
bytbild2()
bytbild3()
}

function Switch9()
{
ruta_1 = 9;
ruta_2 = 9;
ruta_3 = 9;
bytbild1()
bytbild2()
bytbild3()
}

function Switch10()
{
ruta_1 = 10;
ruta_2 = 10;
ruta_3 = 10;
bytbild1()
bytbild2()
bytbild3()
}

function Switch11()
{
ruta_1 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_2 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild1()
bytbild2()
bytbild3()
}


function Switch12()
{
ruta_1 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_2 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild1()
bytbild2()
bytbild3()
}


function Switch13()
{
ruta_1 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_2 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild1()
bytbild2()
bytbild3()
}

function Switch14()
{
ruta_1 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_2 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild1()
bytbild2()
bytbild3()
}

function Switch15()
{

ruta_2 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);

bytbild2()
bytbild3()
}

function Switch16()
{

ruta_2 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);

bytbild2()
bytbild3()
}

function Switch17()
{

ruta_2 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);

bytbild2()
bytbild3()
}

function Switch18()
{
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild3()
}

function Switch19()
{
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild3()
}

function Switch20()
{
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild3()
}

function Switch21()
{
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild3()
}

function Switch22()
{
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild3()
}

function Switch23()
{
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild3()
}

function Switch24()
{
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild3()
}

function Switch25()
{
if (Cheatcode == 0)
{
ruta_3 = Math.floor(((Math.random()+Math.random()+Math.random())/3)*10);
bytbild1()
bytbild2()
bytbild3()
chance()
resultat()  ////Onödigt, Detta är till siffrorna////
}
else
{
ruta_1 = Cheatcode;
ruta_2 = Cheatcode;
ruta_3 = Cheatcode;
bytbild1()
bytbild2()
bytbild3()
chance()
resultat()  ////Onödigt, Detta är till siffrorna////
}
}
//////////////////////////////////////
