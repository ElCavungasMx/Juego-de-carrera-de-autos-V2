class player {

    contructor(){}

    getCount(){

       var playercountRef=database.ref('playercount');
        playercountRef.on("value", function(data){
            playercount= data.val();
        })
        }
        updateCount(count){
        
            database.ref('/').update({
            
                playercount:count
            })
        }
update(nombre){

    var playerIndex='jugador'+playercount
    database.ref(playerIndex).set({
    
        nombre:nombre


    })




}
}
