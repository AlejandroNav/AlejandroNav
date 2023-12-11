
// Exporta la función para que pueda ser importada en otro archivo
export function dishes(nombrePlatillo) {
    let platillos = ['Spaghetti', 'Burger', 'Sushi', 'Ramen', 'Pizza'];
    if (platillos.length >= 5) {
        platillos.unshift();
    }
    platillos.push(nombrePlatillo);
    return platillos;
}

