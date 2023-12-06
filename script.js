function onEnable() {
    let o_wrap = document.querySelector("#wrap-grid");
    let o_stoles = document.querySelector("#stoles-grid");
    let o_gloves = document.querySelector("#gloves-grid");
    let o_mittens = document.querySelector("#mittens-grid");
    let o_glasses = document.querySelector("#glasses-grid");
    
    const wraps = {
        "Sinem": {
            "name": "Платок Sinem",
            "price": "6 500 ₽",
            "img": "img/wraps/sinem.png"
        },
        "Apuntob": {
            "name": "Платок Apuntob",
            "price": "15 999 ₽",
            "img": "img/wraps/apuntop.png"
        },
        "Marc_Jacobs": {
            "name": "Платок Marc Jacobs",
            "price": "12 199 ₽",
            "img": "img/wraps/marc_jacobs.png"
        },
        "Gallieni": {
            "name": "Платок Gallieni",
            "price": "9 000 ₽",
            "img": "img/wraps/gallieni.png"
        }
    }

    const stoles = {
        "Sinem": {
            "name": "Платок Sinem",
            "price": "6 500 ₽",
            "img": "img/wraps/sinem.png"
        },
        "Apuntob": {
            "name": "Платок Apuntob",
            "price": "15 999 ₽",
            "img": "img/wraps/apuntop.png"
        },
        "Marc_Jacobs": {
            "name": "Платок Marc Jacobs",
            "price": "12 199 ₽",
            "img": "img/wraps/marc_jacobs.png"
        },
        "Gallieni": {
            "name": "Платок Gallieni",
            "price": "9 000 ₽",
            "img": "img/wraps/gallieni.png"
        }
    }

    const gloves = {
        "Sinem": {
            "name": "Платок Sinem",
            "price": "6 500 ₽",
            "img": "img/wraps/sinem.png"
        },
        "Apuntob": {
            "name": "Платок Apuntob",
            "price": "15 999 ₽",
            "img": "img/wraps/apuntop.png"
        },
        "Marc_Jacobs": {
            "name": "Платок Marc Jacobs",
            "price": "12 199 ₽",
            "img": "img/wraps/marc_jacobs.png"
        },
        "Gallieni": {
            "name": "Платок Gallieni",
            "price": "9 000 ₽",
            "img": "img/wraps/gallieni.png"
        }
    }

    const mittens = {
        "Sinem": {
            "name": "Платок Sinem",
            "price": "6 500 ₽",
            "img": "img/wraps/sinem.png"
        },
        "Apuntob": {
            "name": "Платок Apuntob",
            "price": "15 999 ₽",
            "img": "img/wraps/apuntop.png"
        },
        "Marc_Jacobs": {
            "name": "Платок Marc Jacobs",
            "price": "12 199 ₽",
            "img": "img/wraps/marc_jacobs.png"
        },
        "Gallieni": {
            "name": "Платок Gallieni",
            "price": "9 000 ₽",
            "img": "img/wraps/gallieni.png"
        }
    }

    const glasses = {
        "Sinem": {
            "name": "Очки Rectors Splinter",
            "price": "6 500 ₽",
            "img": "img/glasses/gucci_glasses.png"
        },
        "Apuntob": {
            "name": "Солнцезащитные очки Oakley",
            "price": "31 168 ₽",
            "img": "img/glasses/oakley.png"
        },
        "Marc_Jacobs": {
            "name": "Солнцезащитные очки Gucci",
            "price": "25 000 ₽",
            "img": "img/glasses/gucci_glasses2.png"
        },
        "Gallieni": {
            "name": "Солнцезащитные очки Tropical",
            "price": "1 063 ₽",
            "img": "img/glasses/tropical.png"
        }
    }

    let wraps_block = ``;
    for (let wrap in wraps) {
        wraps_block += `<div class="overlap">
        <div class="rectangle">
          <div class="name">${wraps[wrap]["name"]}</div>
          <div class="price">${wraps[wrap]["price"]}</div>
          <img class="element-fo-f" src="${wraps[wrap]["img"]}"/>
        </div>
      </div>`;
    }
    o_wrap.innerHTML = wraps_block;

    let gloves_block = ``;
    for (let gloves_ in gloves) {
        gloves_block += `<div class="overlap">
        <div class="rectangle">
          <div class="name">${gloves[gloves_]["name"]}</div>
          <div class="price">${gloves[gloves_]["price"]}</div>
          <img class="element-fo-f" src="${gloves[gloves_]["img"]}"/>
        </div>
      </div>`;
    }
    o_gloves.innerHTML = gloves_block;

    let mittens_block = ``;
    for (let mittens_ in mittens) {
        mittens_block += `<div class="overlap">
        <div class="rectangle">
          <div class="name">${mittens[mittens_]["name"]}</div>
          <div class="price">${mittens[mittens_]["price"]}</div>
          <img class="element-fo-f" src="${mittens[mittens_]["img"]}"/>
        </div>
      </div>`;
    }
    o_mittens.innerHTML = mittens_block;

    let stoles_block = ``;
    for (let stoles_ in stoles) {
        stoles_block += `<div class="overlap">
        <div class="rectangle">
          <div class="name">${stoles[stoles_]["name"]}</div>
          <div class="price">${stoles[stoles_]["price"]}</div>
          <img class="element-fo-f" src="${stoles[stoles_]["img"]}"/>
        </div>
      </div>`;
    }
    o_stoles.innerHTML = stoles_block;
    
    let glasses_block = ``;
    for (let glasses_ in glasses) {
        glasses_block += `<div class="overlap">
        <div class="rectangle">
          <div class="name">${glasses[glasses_]["name"]}</div>
          <div class="price">${glasses[glasses_]["price"]}</div>
          <img class="element-fo-f" src="${glasses[glasses_]["img"]}"/>
        </div>
      </div>`;
    }
    o_glasses.innerHTML = glasses_block;

    
}

document.addEventListener('DOMContentLoaded', function() {
    onEnable();
 }, false);