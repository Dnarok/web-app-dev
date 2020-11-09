var turn = 0;

function clicked(i)
{
    if (i.src.endsWith("images/empty.png"))
    {
        if (turn % 2 == 0)
        {
            i.src = "images/x.png";
        }
        else
        {
            i.src = "images/o.png";
        }
        turn++;
    }
}

function reset()
{
    turn = 0;

    document.getElementById("tic1").src = "images/empty.png";
    document.getElementById("tic2").src = "images/empty.png";
    document.getElementById("tic3").src = "images/empty.png";
    document.getElementById("tac1").src = "images/empty.png";
    document.getElementById("tac2").src = "images/empty.png";
    document.getElementById("tac3").src = "images/empty.png";
    document.getElementById("toe1").src = "images/empty.png";
    document.getElementById("toe2").src = "images/empty.png";
    document.getElementById("toe3").src = "images/empty.png";
}