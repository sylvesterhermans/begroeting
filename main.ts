input.onPinPressed(TouchPin.P2, function () {
    basic.showString("Hallo")
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showString("Hoi")
})
basic.showString("Hoi sylvester ")
