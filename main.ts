scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false, effects.bubbles)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false, effects.splatter)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
mySprite = sprites.create(assets.image`truck3`, SpriteKind.Player)
mySprite.x = 500
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
