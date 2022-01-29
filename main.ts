input.onSound(DetectedSound.Loud, function () {
    pocet_tlesknuti += 1
})
let pocet_tlesknuti = 0
input.setSoundThreshold(SoundThreshold.Loud, 140)
basic.forever(function () {
    basic.showNumber(pocet_tlesknuti)
    if (pocet_tlesknuti == 1) {
        if (Rover.Ultrasonic() > 30) {
            Rover.MotorRunDual(200, 200)
        } else {
            Rover.MotorRunDual(100, -200)
        }
    } else {
        Rover.MotorStopAll(MotorActions.Stop)
    }
    basic.pause(200)
})
