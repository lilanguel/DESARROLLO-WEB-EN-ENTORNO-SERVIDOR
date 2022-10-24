// La funcion crear cookie tambian podria servir como la funcion actualizar cookie ya que sobrescribe la cookie anterior
function crearCookie(cname, cvalue) {
    document.cookie = `${cname}=${cvalue}`;
}

function borrarCookie() {
    document.cookie.split(";").forEach(function (c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";"); //Divide la cookie separando por ;
    for (let i = 0; i < ca.length; i++) {
        //Recorre cada trozo de la cookie
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) //Si encuentra el campo buscado
            return c.substring(name.length, c.length) //lo devuelve
    }
    return ""; //Si no devuelve vacío
}