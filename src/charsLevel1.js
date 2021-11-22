import hypnoToad from './static/images/hypnotoad.png'
import thatGuy from './static/images/thatguy.png'
import conan from './static/images/conan.png'
import slurms from './static/images/slurms.png'
import whitey from './static/images/whitey.png'

const charsLevel1 = [
    {
        name: 'Hypno Toad',
        rangeX: [227, 275],
        rangeY: [387, 420],
        found: false,
        img: hypnoToad
    },
    {
        name: 'That Guy',
        rangeX: [1304, 1328],
        rangeY: [495, 523],
        found: true,
        img: thatGuy
    },
    {
        name: "Conan O'Brien",
        rangeX: [829, 858],
        rangeY: [422, 460],
        found: true,
        img: conan
    },
    {
        name: 'Slurms McKenzie',
        rangeX: [642, 705],
        rangeY: [436, 487],
        found: true,
        img: slurms
    },
    {
        name: 'Judge Whitey',
        rangeX: [1096, 1121],
        rangeY: [655, 682],
        found: true,
        img: whitey
    },
]
export default charsLevel1