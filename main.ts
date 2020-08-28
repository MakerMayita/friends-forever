namespace SpriteKind {
    export const Mascota = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . 6 6 6 6 . . 
        . 6 8 8 8 8 6 . 
        6 8 8 9 9 9 8 6 
        6 8 9 9 9 9 9 6 
        6 8 9 9 9 9 9 6 
        6 8 8 9 9 9 9 6 
        . 6 8 8 8 8 6 . 
        . . 6 6 6 6 . . 
        `, Heroina, 50, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Heroina.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e 4 4 4 4 4 4 e e . . . 
        . . e e 4 f 4 4 4 4 f 4 e e . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Heroina.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . e e e 4 4 4 4 4 e e . . . . 
        . e e e 4 f 4 4 4 f 4 e e . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
let projectile: Sprite = null
let Heroina: Sprite = null
game.setDialogTextColor(10)
game.showLongText("Habia una vez dos mejores amigas que se querian mucho", DialogLayout.Top)
game.showLongText("Un día unos robots malos las atacaron", DialogLayout.Top)
game.showLongText("Y separaron a las amigas un dia una de ellas quizo visitar a la otra", DialogLayout.Top)
game.showLongText("Pero los robots la encontraron y la llevaron muy lejos", DialogLayout.Top)
game.showLongText("Tu misión es ayudar a tu amiga salvandola", DialogLayout.Top)
Heroina = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e 4 4 4 4 e e e . . . 
    . . e e e 4 f 4 4 f 4 e e e . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    `, SpriteKind.Player)
let robot = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f 2 8 8 2 f . . . . . . 
    . . . . f 2 8 8 2 f . . . . . . 
    . 2 2 2 f 8 8 8 8 f 2 2 2 . . . 
    . 2 2 2 2 f f f f 2 2 2 2 . . . 
    . 6 6 f 8 8 8 8 8 8 f 6 6 . . . 
    . 6 6 f 8 5 8 5 5 8 f 6 6 . . . 
    . 6 6 f 8 8 8 5 5 8 f 6 6 . . . 
    . 6 6 . f 5 8 8 8 f . 6 6 . . . 
    . 6 6 . f 8 8 8 8 f . 6 6 . . . 
    . 6 6 . 6 f 8 8 f 6 . 6 6 . . . 
    . 6 6 . 6 6 f f 6 6 . 6 6 . . . 
    . . . . 6 6 . . 6 6 . . . . . . 
    . . . . 6 6 . . 6 6 . . . . . . 
    . . . . 6 6 . . 6 6 . . . . . . 
    . . . . 6 6 . . 6 6 . . . . . . 
    . . . . 6 6 . . 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(Heroina, 100, 0)
scene.cameraFollowSprite(Heroina)
Heroina.ay = 300
scene.setBackgroundColor(6)
tiles.setTilemap(tiles.createTilemap(hex`4000100004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404020404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040101010104040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404010101010101040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040401010101010101010404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040101010101010101010104040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040101010101010101010101040404040404040404040404040404040404040404040404040404040404040404040404040404010404040404040404040404010101010101010101010101010101010101010404040404040404010101010101010404040404040404040404040404040404040404040101040404040404010101010101010101010101010104040404040404040404040401040404040404040404040404040404040404040404040404010404040401010404040404010101010101010101010101010101040404040404010404040404040404040404040404040404040404040104010404010401040404040404010104040404010101010101010101010101010101010404040404040404040104040404040404040404040404040404040404040404040404040404040404040101040404010101010101010101010101010101010103030303030303030303030303030303030303030303010101010101030303030303030303030303030301010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . 2 . 2 . . . . . . 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
info.setLife(3)
info.startCountdown(30)
game.onUpdate(function () {
    if (Heroina.tileKindAt(TileDirection.Bottom, myTiles.tile4)) {
        info.changeLifeBy(-1)
    }
})
game.onUpdate(function () {
    if (Heroina.tileKindAt(TileDirection.Bottom, myTiles.tile4)) {
    	
    }
})
