
module.exports = {
    // Corresponds roughly to RGB brighter/darker
    Kn: 18,

    // NOTE: Adhere to w3c spec, converting RGB to Lab color 
    // will use D50 white point, see:
    // https://www.w3.org/TR/css-color-4/#rgb-to-lab

    // // D65 standard referent
    // Xn: 0.950470,
    // Yn: 1,
    // Zn: 1.088830,

    // D60 standard referent
    // see: http://www.brucelindbloom.com/javascript/ColorConv.js
    Xn: 0.96422,
    Yn: 1,
    Zn: 0.82521,

    // t0: 0.137931034,  // 4 / 29
    // t1: 0.206896552,  // 6 / 29
    // t2: 0.12841855,   // 3 * t1 * t1
    // t3: 0.008856452,  // t1 * t1 * t1

    // Use refined coefficients
    // see: http://www.brucelindbloom.com/index.html?Eqn_RGB_to_XYZ.html
    t0: 16 / 116,
    t1: 0.206896552,
    t2: 1 / (24389 / (27 * 116)),
    t3: 216 / 24389
}

