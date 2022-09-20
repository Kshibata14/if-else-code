input.onButtonPressed(Button.A, function () {
    radio.sendString(Yellow)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        # . . . #
        . . # . .
        # . . . #
        . # . # .
        `)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == Yellow) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
    }
    if (receivedString == AnimateYellow) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . # . # .
                # # # # #
                . # . # .
                # # # # #
                . # . # .
                `)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(AnimateYellow)
})
let AnimateYellow = ""
let Yellow = ""
Yellow = "Yellow"
AnimateYellow = "AnimiateYellow"
radio.setGroup(23)
