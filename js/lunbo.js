// 图片切换效果
var changeImage = function(index) {
    var id = '#photo-' + String(index)
    var className = 'active'
    removeClassAll(className)
    var addClass = e(id)
    addClass.classList.add(className)
    var num = (index) * (-8)
    e('.box-reflect').style.transform = `translateX(${num}rem)`
}

// 点击图片
var clickImages = function() {
    var selector = '.photo'
    bindAll(selector, 'click', function(event) {
        var target = event.target
        var index = parseInt(target.dataset.id)
        var father = event.target.parentElement
        log("father", father)
        var grandpa = father.parentElement
        log("grandpa", grandpa)
        var grandpapa = grandpa.parentElement
        log("grandpapa", grandpapa)
        changeImage(index)
        grandpapa.dataset.active = index
    })
}

// 点击上一张按钮
var clickPrev = function() {
    var selector = '.lb-prev'
    bindAll(selector, 'click', function(event) {
        var father = event.target.parentElement
        var grandpa = father.parentElement
        var index = parseInt(grandpa.dataset.active)
        var totalImgs = parseInt(grandpa.dataset.imgs)
        var newIndex = (index + totalImgs - 1) % totalImgs
        changeImage(newIndex)
        grandpa.dataset.active = newIndex
    })
}

// 点击下一张按钮
var clickNext = function() {
    var selector = '.lb-next'
    bindAll(selector, 'click', function(event) {
        var father = event.target.parentElement
        var grandpa = father.parentElement
        var index = parseInt(grandpa.dataset.active)
        var totalImgs = parseInt(grandpa.dataset.imgs)
        var newIndex = (index + 1) % totalImgs
        changeImage(newIndex)
        grandpa.dataset.active = newIndex
    })
}

var __main = function() {
    clickImages()
    clickPrev()
    clickNext()
}

__main()
