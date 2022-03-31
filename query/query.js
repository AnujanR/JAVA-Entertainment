function submitform() {
// =================================================================================================
// =================================GET ELEMENT VALUES IN THE FORM==================================
// =================================================================================================
    //get full name from user
    $fullname = document.getElementById("name").value;
    //get email address from user
    $email = document.getElementById("email").value;
    //get contact from user
    let $contact = document.getElementById("contact").value;
    //get address from user
    let $address = document.getElementById("address").value;
    //get region from user
    let $region = document.getElementById("region").value;
    //get visiting information from user whether yes or no
    let $visitYes=document.getElementById("yes");
    let $visitNo=document.getElementById("no");
    //get the subject of user problem
    $subject=document.getElementById("subject-prblm").value;
    //get the details of user problem
    $detailsProblem=document.getElementById("detail-prblm").value;
    //get the department suggestion from user
    let $departmentSuggestion=document.getElementById("department-suggestion").value;
    //get the suggestion info by user
    let $suggestionInfo=document.getElementById("suggestion").value; 
    //get the rating of website from user
    let $starCount=document.getElementsByName("rate");
    //get the form for hiding purpose
    $form=document.getElementById("form");
    //get the quer detail for showing purposes
    $detail=document.getElementById("query-detail");
    //get id for innerhtml in query detail
    let $nm_qd=document.getElementById("name_qd");
    let $eml_qd=document.getElementById("email_qd");
    let $sub_qd=document.getElementById("subject_qd");
    let $detl_qd=document.getElementById("detail_qd");
    //get id for advance details
    let $advancedCont=document.getElementById("advanced-cont");
    //visibility when clicked advanced options
    let $showAdvanced=document.getElementById('show-detls');
    //get id for innerhtml for advanced query
    let $contct_qd=document.getElementById("contct_qd");
    let $addr_qd=document.getElementById("address_qd");
    let $reg_qd=document.getElementById("region_qd");
    let $vis_qd=document.getElementById("visit_qd");
    let $dept_qd=document.getElementById("dept_qd");
    let $suggest_qd=document.getElementById("suggest_qd");
    let $rate_qd=document.getElementById("rate_qd");


// =================================================================================================
// =================================================================================================
// =================================================================================================

// =================================================================================================
// ================================VALIDATION OF USER INPUT'S=======================================
// =================================================================================================

//function which validates user name input
function userName($fullname){
    //check whether the name contains any number or the input field is empty
    if($fullname=="" || $fullname.match(/\d+/g)!=null){
        return false;
    }
    else{
        return true;
    }
}
//function which validates user Email
function userEmail($email){
    //check whether the email contains any non standard elements or the input field is empty
    if($email=="" || $email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)==null){
        return false;
    }
    else{
        return true;
    }
}
//function which validates users contact
function userContact($contact){
    //check whether the contact has 10digits and doesn't include letters
    if($contact=="" || $contact.length!==10 || $contact.match(/[A-Za-z\s]/)!==null){
        return false;
    } 
    else{
        return true;
    }
}
//function which validates users subject of problem
function userSubject($subject){
    //check whether the textarea field is empty
    if($subject==""){
        return false;
    }
    else{
        return true;
    }
}
//function which validates users problem
function userProblem($detailsProblem){
    //check whether the textarea field is empty
    if($detailsProblem==""){
        return false;
    }
    else{
        return true;
    }
}

// =================================================================================================
// =================================================================================================
// =================================================================================================

// =================================================================================================
// ================================DISPLAY POPUP FOR VALIDATION=====================================
// =================================================================================================
if (userName($fullname)==false){
    swal("INVALID USERNAME", "Please Enter a Valid Username", "error");
}
else if(userEmail($email)==false){
    swal("INVALID EMAIL", "Please Enter a Valid Email, like example@mail.com", "error");
}
else if(userContact($contact)==false){
    swal("INVALID  CONTACT", "Please Enter a Valid Contact, like +9400000000", "error");
}
else if( userSubject($subject)==false){
    swal("INVALID SUBJECT", "Please Enter a Valid Subject", "error");
}
else if(userProblem($detailsProblem)==false){
    swal("INVALID PROBLEM SPECIFICATION", "Please type a Problem", "error");
}
else{
    swal("All Good!", "Click Ok To Check for the simplified Query", "success");
    queryDetail();
}
// =================================================================================================
// =================================================================================================
// =================================================================================================

// =================================================================================================
// ================================DISPLAY QUERY DETAIL=====================================
// =================================================================================================
function queryDetail(){
    //hide the form
    $hideForm=$form.style.display="none";
    //show the query detail
    $showDetail=$detail.style.display="block";
    
    //innerhtml query details
    $nm_qd.innerHTML=$fullname;
    $eml_qd.innerHTML=$email;
    $sub_qd.innerHTML=$subject;
    $detl_qd.innerHTML=$detailsProblem;
// ================================DISPLAY ADVANCED QUERY DETAIL=====================================

$showAdvanced.onclick=function(){
    $advancedCont.style.display="block";
    //innerhtml for advanced query
    $addr_qd.innerHTML=$address;
    $contct_qd.innerHTML=$contact;
    $reg_qd.innerHTML=$region;
    $dept_qd.innerHTML=$departmentSuggestion;
    $suggest_qd.innerHTML=$suggestionInfo;
    //---------------------------------------
    //visiting the website
    if ($visitYes.checked==true){
        $vis_qd.innerHTML=$visitYes.value;
    }
    else if($visitNo.checked==true){
        $vis_qd.innerHTML=$visitNo.value;
    }
    //---------------------------------------
    //rating of website
    let $selectcheck=getCheckValuesA($starCount);
    function getCheckValuesA( checkBoxArray ) {
    const values = [];
    for ( let i = 0; i < checkBoxArray.length; i++ ) {
        if ( checkBoxArray[ i ].checked ) {
            values[ values.length ] = checkBoxArray[ i ].value;
        }
    }
    return values;
    }
    $rate_qd.innerHTML=$selectcheck[0];
  };

}

}
//edit form button 
function editform(){
    //display form
    $form.style.display="block";
    //hide query detail
    $detail.style.display="none";
}

//send form button 
function sendform(){

    window.open('mailto:test@example.com?subject='+$subject+'&body='+$detailsProblem);    
    window.location.href = "query.html";
}