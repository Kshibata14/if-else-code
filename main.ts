input.onButtonPressed(Button.A, function () {
    Number2 = randint(0, 2)
    if (Number2 == 0) {
        basic.showIcon(IconNames.Angry)
    } else if (Number2 == 1) {
        basic.clearScreen()
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
input.onButtonPressed(Button.B, function () {
    Number2 = randint(3, 5)
    if (Number2 == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
    } else if (Number2 == 4) {
        basic.clearScreen()
        music.playMelody("E D F G E B A F ", 120)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
let Number2 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
