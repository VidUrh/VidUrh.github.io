proj1=document.getElementById('proj1')
proj2=document.getElementById('proj2')
proj3=document.getElementById('proj3')
proj4=document.getElementById('proj4')
proj5=document.getElementById('proj5')

proj4.style.display="none";
proj5.style.display="none";
pokazani=[1,2,3]
function premakni(x) {
  if(x>0){
    zaskrit=pokazani[0]
    pokazani[0]=pokazani[1]
    pokazani[1]=pokazani[2]
    pokazani[2]=(pokazani[2]+1)%6
    if(pokazani[2]==0){
      pokazani[2]=1
    }
    document.getElementById('proj'+zaskrit).style.display="none"
    document.getElementById('proj'+pokazani[2]).style.display="block"
  }
}
