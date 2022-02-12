window.addEventListener('load' , function(){
    const saveBtn = document.getElementById('save')
    const deleteBtn = document.getElementById('delete')
    const list = document.getElementById('list')
    const date = document.getElementById('date')
    const note = document.getElementById('note')

    const listContent = []

    function render(listContent){
        let listHtml = ''
        listContent.forEach(function(item){
            listHtml = listHtml + `
                <div class='listItem'>
                    <p>Date: ${item.date}</p>
                    <p>Note: ${item.note}</p>
                </div>
                
            `
        })

        list.innerHTML = listHtml
    }
    
    saveBtn.addEventListener('click' , function(){
        listContent.unshift({
            date:date.value,
            note:note.value
        })

        render(listContent)

        date.value = ''
        note.value = ''
    })

    note.addEventListener('keyup' , function(event){
        if(event.keyCode==13){
            listContent.unshift({
                date:date.value,
                note:note.value
            })
            render(listContent)

            date.value = ''
            note.value = ''
        }
    })

    deleteBtn.addEventListener('click' , function(){
        listContent.shift()

        render(listContent)
    })

})

