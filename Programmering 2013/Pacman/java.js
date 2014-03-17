var POS_X;
var POS_Y;
POS_X = 300;
POS_Y = 445;

function increase_X_2()
{
POS_X = POS_X + 2;
check_value_X();
render_div();


}
function make_X_0()
{
POS_X = 0;
check_value_X();
render_div();

}
function increase_X_50()
{
POS_X = POS_X + 50;
check_value_X();
render_div();

}

function X_dubble()
{
POS_X = POS_X * 2;
check_value_X();
render_div();

}

function X_half()
{
POS_X = POS_X / 2;
check_value_X();
render_div();

}

function increase_Y_2()
{
POS_Y = POS_Y + 2;
check_value_Y();
render_div();

}
function make_Y_0()
{
POS_Y = 0;
check_value_Y();
render_div();

}
function increase_Y_50()
{
POS_Y = POS_Y + 50;
check_value_Y();
render_div();

}

function Y_dubble()
{
POS_Y = POS_Y * 2;
check_value_Y();
render_div();

}

function Y_half()
{
POS_Y = POS_Y / 2;
check_value_Y();
render_div();

}

function increase_XY_2()
{
POS_X = POS_X + 2;
POS_Y = POS_Y + 2;
check_value_X();
check_value_Y();
render_div();

}
function make_XY_0()
{
POS_X = 0;
POS_Y = 0;
check_value_X();
check_value_Y();
render_div();

}
function increase_XY_50()
{
POS_X = POS_X + 50;
POS_Y = POS_Y + 50;
check_value_X();
check_value_Y();
render_div();

}

function XY_dubble()
{
POS_X = POS_X * 2;
POS_Y = POS_Y * 2;
check_value_X();
check_value_Y();

}

function XY_half()
{
POS_X = POS_X / 2;
POS_Y = POS_Y / 2;
check_value_X();
check_value_Y();
render_div();

}

function X_Random1_100()
{
POS_X = Math.random(1,100)*100;
check_value_X();
render_div();

}

function Y_Random1_100()
{
POS_Y = Math.random(1,100)*100;
check_value_Y();
render_div();

}

function XY_Random1_100()
{
POS_X = Math.random(1,100)*100;
POS_Y = Math.random(1,100)*100;
check_value_X();
check_value_Y();
render_div();

}

function check_value_X()
{ 
var kanalX;
kanalX=document.getElementById("utskriftX"); 
kanalX.childNodes[0].nodeValue=POS_X ;
}

function check_value_Y()
{ 
var kanalY;
kanalY=document.getElementById("utskriftY"); 
kanalY.childNodes[0].nodeValue=POS_Y ;
}


function render_div() 
{
var render;  
render=document.getElementById("figur");
render.style.left=POS_X+"px";
render.style.top=POS_Y+"px";
}