input.onButtonPressed(Button.A, function () {
    bitbot.goms(BBDirection.Forward, 60, 2000)
    bitbot.ledRotate()
})
input.onButtonPressed(Button.B, function () {
    bitbot.rotatems(BBRobotDirection.Right, 60, 2000)
    bitbot.ledRotate()
})
bitbot.select_model(BBModel.Classic)
basic.showIcon(IconNames.Heart)
bitbot.ledRainbow()
basic.forever(function () {
	
})
