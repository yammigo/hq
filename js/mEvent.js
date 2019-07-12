const Event = {
  TouchMove: {
    getDirection: {
      startPos: {
      },
      movedPos: {
      },
      start: function (event) {
        this.startPos.x = event.touches[0].clientX
        this.startPos.y = event.touches[0].clientY
      },
      move: function (event) {
        this.movedPos.x = event.changedTouches[0].clientX - this.startPos.x
        this.movedPos.y = event.changedTouches[0].clientY - this.startPos.y
        if (Math.abs(this.movedPos.x) > Math.abs(this.movedPos.y)) {
          if (this.movedPos.x > 0) return 'right'
          if (this.movedPos.x < 0) return 'left'
        } else if (Math.abs(this.movedPos.x) < Math.abs(this.movedPos.y)) {
          if (this.movedPos.y > 0) return 'bottom'
          if (this.movedPos.y < 0) return 'top'
        }
      },
      end: function () {
        this.startPos = {}
        return undefined
      }
    }
  }
}

module.exports = Event



// WEBPACK FOOTER //
// ./src/js/mEvent.js