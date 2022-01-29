input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    pocet_tlesknuti += 1
    basic.clearScreen()
})
let pocet_tlesknuti = 0
input.setSoundThreshold(SoundThreshold.Loud, 140)
basic.forever(function () {
    if (pocet_tlesknuti == 1) {
        if (Rover.Ultrasonic() > 30) {
            Rover.MotorRunDual(115, 115)
        } else {
            Rover.MotorRunDual(100, -200)
        }
    } else {
        Rover.MotorStopAll(MotorActions.Stop)
    }
})
