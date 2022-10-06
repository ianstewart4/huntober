// Link: https://blog.barbaralaw.me/huntober-2022-day-1

const keys = {
    0: 'O',
    5: 'S',
    1: 'I',
    6: 'G',
    2: 'Z',
    7: 'L',
    3: 'E',
    8: 'B',
    4: 'h',
    9: 'q',
    'O': 0,
    'S': 5,
    'I': 1,
    'G': 6,
    'Z': 2,
    'L': 7,
    'E': 3,
    'B': 8,
    'h': 4,
    'q': 9
}

function fixString(str) {
    return str.split('').map(x => keys[x] || x).join('')
}