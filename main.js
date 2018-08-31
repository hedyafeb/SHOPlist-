var btnNewcategory = document.getElementById('btn-new-category')

var currentCategories = document.getElementById('categories') // kenapa klo byClass, jd HTML collection??


// ADD NEW CATEGORY: 
btnNewcategory.addEventListener('click', function() {
    // ADD NEW CATEGORY: 
    var newCategory = prompt('Please add new category:');

    if (newCategory.length === 0) {
        alert('Please write new category.')
    }
    else {
        var categoryDiv = document.createElement('div');
        var categoryDivId = document.createAttribute('id');
        categoryDivId.value = newCategory;
        categoryDiv.setAttributeNode(categoryDivId);

        // TAMBAH H2:
        var h2 = document.createElement('h2');
        var h2Text = document.createTextNode(newCategory);

        h2.appendChild(h2Text); 
        categoryDiv.appendChild(h2);
        currentCategories.appendChild(categoryDiv); 

        // TAMBAH UL:
        var ul = document.createElement('ul');
        categoryDiv.appendChild(ul);


        // ADD BUTTON 'add new list':
        var btnNewStuff = document.createElement('button'); // button
        var btnNewStuffId = document.createAttribute('id'); // id
        btnNewStuffId.value = 'btn-new-stuff-' + newCategory;
        btnNewStuff.setAttributeNode(btnNewStuffId); 

        var btnNewStuffText = document.createTextNode('Add new list');
        btnNewStuff.appendChild(btnNewStuffText); 
        categoryDiv.appendChild(btnNewStuff);

        
        // ADD NEW LIST by using BUTTON 'add new list':
        btnNewStuff.addEventListener('click', function() {
            var newList = prompt('Please add new list:')
            
            if (newList.length === 0) {
                alert('Please write new stuff.')
            }
            else {
                // TAMBAH LI:
                var li = document.createElement('li');
                var liText = document.createTextNode(newList);
                li.appendChild(liText);
                ul.appendChild(li)


                // CORET KALAU SUDAH:
                var listChecked = document.getElementsByTagName('li');
                console.log(listChecked);
                
                for (var i=0; i<listChecked.length; i++) {
                    console.log(listChecked[i]);

                    listChecked[i].addEventListener('click', function() {
                        this.style.textDecoration = "line-through";
                        this.style.listStyleImage = "url('./checked.png')";
                    })
                }

            
            
            }
        })
    }
});

