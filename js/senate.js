

let tbody = document.querySelector("#body");

function traerDatos() {


fetch('js/pro-congress-113-senate.json')

    
        .then(function(res){
            return res.json();


        

    })
    .then(function(data){
        let res = data["results"];
        let len = data["results"].length;
    
        
    
        for (let i = 0 ; i < len; i++) {

            
    
            memlen = res[i].members.length;
           
            for (let j = 0; j < memlen; j++) {
                    
            if(res[i].members[j].middle_name == null){
                middle_name = " ";
        } else {

            middle_name = res[i].members[j].middle_name;
        }
    
         
        fullName =  res[i].members[j].first_name + " "  + middle_name +  "  " + res[i].members[j].last_name ;
    
                tbody.innerHTML +=`
                    <tr>  
                        <td class="text-center">  ${ "<a href=" + res[i].members[j].url + ">" +  fullName + "</a>" } </td>
        
                        <td class="text-center"> ${res[i].members[j].party}</td>
        
                        <td class="text-center">  ${ res[i].members[j].state }    </td>
                        
                        <td class="text-center"> ${res[i].members[j].seniority}</td> 
        
                        <td class="text-center"> ${res[i].members[j].votes_with_party_pct + "%"}                            </td>
                    
                    </tr>
                
                
                `
        
            }
    
    
        }
    
    

    })

}




    


window.onload=traerDatos;






















