/** Caso 1: IBAN validar que se informa 2 letras y los números*/
//const pattern = /^[a-zA-Z]{2}\d{22}$/

//const iban = ['ES6600190020961234567890']
//console.log(pattern.test(iban))

/** Caso 2:  permitir que se incluyan espacios en ciertas áreas
 * Sólo se permite sin espacios o con ellos en las posiciones concretas
 */
// const pattern = /^[a-zA-Z]{2}\d{22}$|^[a-zA-Z]{2}\d{2}\s(\d{4}\s){4}\d{4}$/
//
// var iban = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890']
//
// iban.forEach(value => {
//     console.log(pattern.test(value))
// })

/** Caso 3: extraer el código de páis y el dígito de control */
/* Tendremos en cuenta las dos opciones del caso anterior y dados los indices de la expresiones que coinciden mostramos el código de país y dígito de control*/
// const pattern = /^([a-zA-Z]{2}\d{2})\d{20}$|^([a-zA-Z]{2}\d{2})\s(\d{4}\s){4}\d{4}$/
//
// const iban = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890', 'PT7901234567789012345678']
//
// iban.forEach(value => {
//     var result = pattern.exec(value)
//     result[1]=== undefined ? console.log('País y dígito de control: ', result[2]) : console.log('País y dígito de control: ', result[1])
// })

/////////////////////////////////////////////////////////////////////////

/** Validar matrícula de coche*/

/** Caso 1: validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras
 * Patrones a validar:
 * 2021 GMD
 * 2345-GMD
 * 4532BDB
 * 0320-AAA
 */

// const pattern = /^\d{4}(\s|-)?[A-Z]{3}$/
//
// const matricula = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA']
//
// matricula.forEach(value => {
//     console.log(pattern.test(value))
// })

/** Caso 2: extraer por un lado la parte numérica y por otro las letras */

// const pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/
//
// const matricula = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA']
//
// matricula.forEach(value => {
//     var result = pattern.exec(value)
//     console.log(result[1], result[3])
// })

////////////////////////////////////////////////////////////////////////////////

/** OPCIONALES
 * Extraer imágenes de un fichero HTML
 */

/** Caso 1: De una sola linea extraer el contenido de src
 * valor <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
 */

// const pattern = /^<img\ssrc="(https?:\/\/(.)+\.(png|jpg|gif))"\/>$/m
//
// const urlImg =  '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'
//
// var result = pattern.exec(urlImg)
//
// console.log(result[1])

/** Caso 2: de un HTML extraer todos los src de todos los objetos img */

// const pattern = /^<img\nsrc="(https?:\/\/(.)+\.(png|jpg|gif))"\n\/>$/gm
//
// const urlImg = '<html>\n' +
//     '<body>\n' +
//     '<img\n' +
//     'src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"\n' +
//     '/>\n' +
//     '<h1>ejemplo</h1>\n' +
//     '<img\n' +
//     'src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"\n' +
//     '/>\n' +
//     '</body>\n' +
//     '</html>'
//
// var result = urlImg.match(pattern)
//
// console.log(result[0])
// console.log(result[1])

/** Validar sintaxis tarjeta de crédito
 * Se tendrán en cuenta las siguientes condiciones:
 * Que una máster card tiene una longitud de 16 caracteres (numeros).
 * Que tiene que empezar con 50,51,52,53,54,55.
 * Qué lo normal es que se agrupen en conjuntos de 4 digitos.
 * */

/* Los valores deben estar mal en el pdf pues todos tienen 15 dígitos, validamos los valores facilitados */
/* Caso 1: Vamos a validar los siguiente formatos: */

// const pattern = /^[50-55]{2}\d{2}(\s|-)\d{5}(\s|-)\d{3}(\s|-)\d{3}$|^\d{15}$/
//
// const card = ['5299 64000 000 000', '5299-64000-000-000', '529964000000000']
//
// card.forEach(value => {
//     console.log(pattern.test(value))
// })

/* Caso 2: Vamos a extraer cada grupo de cuatro digitos */
/* Para hacer la extracción de cada grupo separaremos el patrón con paréntesis */

// const pattern = /^([50-55]{2}\d{2})(\s|-)(\d{5})(\s|-)(\d{3})(\s|-)(\d{3})$|^(\d{4})(\d{5})(\d{3})(\d{3})$/
//
// const card = ['5299 64000 000 000', '5299-64000-000-000', '529964000000000']
//
// card.forEach(value => {
//     console.log(pattern.exec(value))
// })

/** Búsqueda de expresiones regulares

 *  Comprobar si una clave es fuerte o no:
 * Complejo: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
 * Moderado: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
 * url: http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=psw
 * En la misma web podemos realizar una comprobación de contraseñas

 * Validar que una URL esta bien formada:
 * url: https://www.regextester.com/93652
 * En el mismo enlace podemos validar las expresiones, como por ejemplo lemoncode.net que en la mayoría de webs no se contempla al no tener http|https

 * Validar que un color en Hexadecimal esta bien formado
 * url: https://es.acervolima.com/como-validar-el-codigo-de-color-hexadecimal-usando-expresion-regular/

 */
