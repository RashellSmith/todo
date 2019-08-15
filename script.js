let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));


 // Create ands set tags for Li Elements
  const makerLi = text => {
    const li = $('<li>');
    li.html(text);
    $("ul").append(li);
    }
  

  $('#submit').on('click', function(){
    let input= $('#input');  
    itemsArray.push(input.val());
    localStorage.setItem('items',JSON.stringify(itemsArray));
    makerLi(input.val());
    input.val("");
  });
  
  data.forEach(item => {
    makerLi(item)
      });
  
  $('li').on('click',function(){
    
    // this.text  save to var
    const text = $(this).html();
    //find where it is in the array 
    let indexOfText = itemsArray.indexOf(text);
      // delete that item 
    itemsArray.splice(indexOfText,1);
    // set localstorage with the new array 
    localStorage.setItem('items',JSON.stringify(itemsArray));
    //remove element from html
    $(this).remove();
  });



