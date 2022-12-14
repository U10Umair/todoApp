

// var mainlist = document.getElementById('mainlist')
// var inp=document.getElementById('inp')





// function get(){
//     console.log(inp)
// }

// function addEle(){

//     console.log(inp)
//     var a=document.createElement("LI")
//     // var txt='Hello World'
//     var b=document.createTextNode(inp.value)
//     a.appendChild(b)
//     mainlist.appendChild(a)
//     console.log(a)
// }





var mainlist = document.getElementById('mainlist')
var inp=document.getElementById('inp')


function addEle(){

    console.log(inp)
    var li=document.createElement("LI")
    // var txt='Hello World'
    var b=document.createTextNode(inp.value)
    
    li.appendChild(b)

    var dlbt=document.createElement('BUTTON')
    var dltx = document.createTextNode('Delete')
    var edbt=document.createElement('BUTTON')
    var edtx = document.createTextNode('Edit')
    
    edbt.setAttribute("class","styleButton")
    dlbt.setAttribute("class","styleButton")
    dlbt.setAttribute("onclick","delet(this)")
    edbt.setAttribute("onclick","edit(this)")
    

    
    dlbt.appendChild(dltx)
    li.appendChild(dlbt)




    edbt.appendChild(edtx)
    li.appendChild(edbt)


    mainlist.appendChild(li)
    console.log(li)
}


function delet(element){
    element.parentNode.remove()
    
}

function edit(element){
    element.parentNode.firstChild.nodeValue=prompt()
    
}

function deletAll(){
    mainlist.innerHTML=""
}