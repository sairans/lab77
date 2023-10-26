function submitForm() {
    var email = document.getElementById('email').value;
    var title = document.querySelector('input[name="title"]:checked').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var fax = document.getElementById('fax').value;
    var occupation = document.getElementById('occupation').value;
    var maritalStatus = document.getElementById('maritalStatus').value;
    var emergencyName = document.getElementById('emergencyName').value;
    var emergencyEmail = document.getElementById('emergencyEmail').value;
    var emergencyPhone = document.getElementById('emergencyPhone').value;
  
    var tripOptions = [];
    var tshirtSize = [];
    var smoker = [];
  
    document.querySelectorAll('input[name="tripOptions"]:checked').forEach(function(checkbox) {
      tripOptions.push(checkbox.value);
    });
  
    document.querySelectorAll('input[name="tshirtSize"]:checked').forEach(function(checkbox) {
      tshirtSize.push(checkbox.value);
    });
  
    document.querySelectorAll('input[name="smoker"]:checked').forEach(function(checkbox) {
      smoker.push(checkbox.value);
    });
  
    var room = document.getElementById('room').value;
    var ename = document.getElementById('ename').value;
    var number = document.getElementById('number').value;
    var data = document.getElementById('data').value;
    var where = document.getElementById('where').value;
    var expires = document.getElementById('expires').value;
    var date = document.getElementById('date').value;
    var age = document.getElementById('age').value;
    var place = document.getElementById('place').value;
    var citizen = document.getElementById('citizen').value;
    var agree = document.getElementById('agree').checked;
  
    console.log('Email:', email);
    console.log('Title:', title);
    console.log('First Name:', fname);
    console.log('Last Name:', lname);
    console.log('Address:', address);
    console.log('Phone:', phone);
    console.log('Fax:', fax);
    console.log('Occupation:', occupation);
    console.log('Marital Status:', maritalStatus);
    console.log('Emergency Contact Name:', emergencyName);
    console.log('Emergency Contact Email:', emergencyEmail);
    console.log('Emergency Contact Phone:', emergencyPhone);
    console.log('Trip Options:', tripOptions);
    console.log('T-shirt Size:', tshirtSize);
    console.log('Smoker:', smoker);
    console.log('Room Sharing Preferences:', room);
    console.log('Exact Name (Passport):', ename);
    console.log('Passport Number:', number);
    console.log('Date Issued:', data);
    console.log('Where Issued:', where);
    console.log('Date Expires:', expires);
    console.log('Date of Birth:', date);
    console.log('Age:', age);
    console.log('Place of Birth:', place);
    console.log('Citizen of:', citizen);
    console.log('Agree to Terms and Conditions:', agree);

    window.alert("Submited");
}


