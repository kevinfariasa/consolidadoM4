async function loadCharacter(i, id, parent, color) {
    try {
        let url = "https://swapi.dev/api/people/" + i;
        let response = await fetch(url);
        let data = await response.json();
        constructor(data, id, parent, color)
    } catch (error) {
        console.log("error", error);
    }
}

let count1 = 1;
let count2 = 6;
let count3 = 11;

const selector = (id, parent, color) => {
    if (id == 'principalSection') {
        if (count1 < 6) {
            loadCharacter(count1, id, parent, color)
            count1++
        } else {
            $('div').remove(`.${id}`)
            count1 = 1
        }
    } else if (id == 'secondarySection') {
        if (count2 < 11) {
            loadCharacter(count2, id, parent, color)
            count2++
        } else {
            $('div').remove(`.${id}`)
            count2 = 6
        }
    } else if (id == 'otherSection') {
        if (count3 < 16) {
            loadCharacter(count3, id, parent, color)
            count3++
        } else {
            $('div').remove(`.${id}`)
            count3 = 11
        }
    }
}

class Character {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

class searchCharacter extends Character {
    constructor(name, height, weight, id, parent, color) {
        super(name, height, weight);
        this.id = id;
        this.parent = parent;
        this.color = color;
    }
}

function constructor(data, id, parent, color) {
    let character = new searchCharacter(data.name, data.height, data.mass, id, parent, color);
    printer(character);
}

function printer(character) {
    $(`#${character.parent}`).append(`
    <div class="col-12 col-md-6 col-lg-4 ${character.id}">
        <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon" style="background-color: ${character.color};"><i class="fa fa-address-card" aria-hidden="true"></i>
            </div>
            <div class="timeline-text">
                <h6 style="font-weight: bold">${character.name}</h6>
                <p>Estatura: ${character.height} cm. Peso: ${character.weight} kg.</p>
            </div>
        </div>
    </div>
    `)
}
