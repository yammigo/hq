const Event = {
  addEvent: (domElem, event, func) => {
    if (document.addEventListener) {
      return domElem.addEventListener(event, func)
    } else if (document.attachEvent) {
      return domElem.attachEvent(event, func)
    }
    domElem['on' + event] = func
  },
  isMoveHorizontal: (startX, startY, currX, currY) => {
    if (Math.abs(currX - startX) > Math.abs(currY - startY)) {
      return true
    }
    return false
  },
  isMoveVertical: (startX, startY, currX, currY) => {
    if (Math.abs(currX - startX) < Math.abs(currY - startY)) {
      return true
    }
    return false
  },
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
      }
    }
  }
}

module.exports = Event



// WEBPACK FOOTER //
// ./src/js/Event.js