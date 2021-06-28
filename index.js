proj1=document.getElementById('proj1')
proj2=document.getElementById('proj2')
proj3=document.getElementById('proj3')
proj4=document.getElementById('proj4')
proj5=document.getElementById('proj5')

proj4.style.display="none";
proj5.style.display="none";
pokazani=[1,2,3,4,5]
function premakni(x) {
  if(x>0){
    pokazani.push(pokazani.shift())
    $("#proj"+pokazani[0]).show();
    $("#proj"+pokazani[1]).show();
    $("#proj"+pokazani[2]).show();
    $("#proj"+pokazani[3]).hide();
    $("#proj"+pokazani[4]).hide();
  }
}
