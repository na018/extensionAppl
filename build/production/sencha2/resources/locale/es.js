translations = {
    login: "Login",
    user: "Usuario",
    password: "Contraseña",

    cancel: "Cancelar",
    submit: "Enviar",
    logout: 'Logout',

    capsLockTitle: 'Bloq Mayús está Activado',
    capsLockMsg1: 'Tener el Bloq Mayús activado puede causar que ',
    capsLockMsg2: 'introduzca su contraseña de forma incorrecta.',
    capsLockMsg3: 'Usted debe presionar Bloq Mayús para apagarlo ',
    capsLockMsg4: 'antes de escribir la contraseña.',

    home: 'Inicio',
    //Menus
    menu1: 'Security',
    menu11: 'Groups and Permissions',
    menu12: 'Users',

    staticData: 'Static Data',
    actors: 'Actors',
    categories: 'Categories',
    languages: 'Languages',
    cities: 'Cities',
    countries: 'Countries',
    cms: 'Content Management',
    films: 'Films',
    reports: 'Reports',
    salesfilmcategory: 'Sales by Film Category'
};
console.log('es translations called');
console.log(translations.login);

function getTranslation() {
    return translations;
}