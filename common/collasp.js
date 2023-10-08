function clear(i)
{
    document.getElementById(id_list[i]).innerHTML = '';
}

function prnt(i)
{
    document.getElementById(id_list[i]).innerHTML = text[i];
}

function display(i)
{
    if(check[i] == 1)
    {
        prnt(i);

        check[i] = 0;
    }
    else
    {
        clear(i);

        check[i] = 1;
    }
}