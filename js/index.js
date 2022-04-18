var body_content =document.getElementsByClassName('body_content');
var about_titles=document.getElementsByClassName('about_title');
var about_shubham_section=document.getElementsByClassName('about_shubham_section');

current_title_index=0;
body_content[current_title_index].style.display = 'block';
about_titles[current_title_index].classList.add('about_title_active');
//function to attach onclick event listener to each header
for(let i=0;i<about_titles.length;i++) {
    about_titles[i].addEventListener('click',(e)=>{
        if(e.target.value=== undefined)
        {
            let parentNode=e.target.parentNode;
            e.target.value=parentNode.value;
        }
        if(e.target.value===current_title_index){
            //do nothing

        }
        else{
            current_title_index=e.target.value;
            for(let j=0;j<about_titles.length;j++){
                if(j===current_title_index){
                    body_content[j].style.display='block';
                    about_titles[j].classList.add('about_title_active');

                }else{
                    body_content[j].style.display='none';
                    about_titles[j].classList.remove('about_title_active');
                }

            }
            about_shubham_section[0].classList.add("active_animation");
            setTimeout(function() { about_shubham_section[0].classList.remove("active_animation") }, 1000);
            
        }
    })
}




