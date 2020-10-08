<script>
    (function(){
       document.getElementById("name").value  = "Moglie";
    })();

function getDate(){
    var dateString = document.getElementById('myCalendar').value;

    var gender = document.querySelector('input[name=gender]:checked').value;

    var name = document.getElementById("name").value;

    var dateObject = new Date(dateString);
   
    var day = dateObject.getDay() 
    
    var customerDate = "";
    var akanName = "";

    var dateMapping =   {0:"sunday",1:"monday", 2:"tuesday",3:"wednesday",4:"thursday",5:"friday",6:"saturday"};
    var femaleMapping = {"sunday": "Akosua","monday": "Adwoa","tuesday": "Abenaa","wednesday": "Akua","thursday":"Yaa","friday": "Afua","saturday": "Ama"};
    var maleMapping =   {"sunday": "Kwasi","monday": "Kwadwo","tuesday": "Kwabena","wednesday": "Kwaku","thursday":"Yaw","friday": "Kofi","saturday": "Kwame"};

    if(gender === "male"){
        responseMessage(maleMapping);
        
    }else if(gender === "female"){
        responseMessage(femaleMapping);
    }else{
        alert("invalid data")
    }

    function responseMessage(valueMapping){
        innerDay = dateMapping[day];
        akanName = valueMapping[innerDay];
        // alert("Hi "+ name + " your Akan name is "+ akanName+ " and you were born on "+ innerDay + "!!!!");
        document.getElementById("output").innerText = "Hi "+ name + " your Akan name is "+ akanName+ " and you were born on "+ innerDay + "!!!!";

    }

}

</script>
