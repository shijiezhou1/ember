import Controller from '@ember/controller';

export default Controller.extend({
    okay: null,
    
    actions: {
      createBoardGame() {
        let newBoardGame = this.get('newBoardGame')
        let newRecord = this.store.createRecord('boardgame', {
          title: newBoardGame
        })
        newRecord.save()
      },
      readBoardGame() {
        // hard coding the id for demonstration purposes only
        this.store.findAll('5c4b78f9a3fb18257abf79eb').then((game) => {
          console.log(game);
          this.set( 'okay', game );
        })
      },
      updateBoardGame() {
        // hard coding the id for demonstration purposes only
        let updatedTitle = this.get('updatedTitle')
        let game = this.get('model').findBy('id', '1')
        game.set('title', updatedTitle)
        game.save()
      },
      destroyBoardGame() {
        let destroyId = this.get('destroyId')
        let game = this.get('model').findBy('id', destroyId)
        game.destroyRecord()
      }
    }
  });