namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
function cutsceane () {
	
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    cutsceane()
})
