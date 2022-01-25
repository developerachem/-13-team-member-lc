const memberForm = document.querySelector('#memberForm');

memberForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = this.querySelector('input[name="name"]').value;
    let titel = this.querySelector('input[name="titel"]').value;
    let image = this.querySelector('input[name="image"]').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let facebook = this.querySelector('input[name="facebook"]').value;
    let twitter = this.querySelector('input[name="twitter"]').value;
    let instagram = this.querySelector('input[name="instagram"]').value;
    let gmail = this.querySelector('input[name="gmail"]').value;
    let youtube = this.querySelector('input[name="youtube"]').value;


    // This Is Skill Loop
    let skills = [];
    for (let i = 0; i < skill.length; i++) {
        skills.push(skill[i].value);
    }



    // This Is Local data Up 
    let teamDataArray = [];
    if (localDataDown('teamData')) {
        teamDataArray = localDataDown('teamData');
    } else {
        teamDataArray = [];
    }
    teamDataArray.unshift({
        name : name,
        titel : titel,
        image : image,
        gender : gender,
        skill : skills,
        facebook : facebook,
        twitter : twitter,
        instagram : instagram,
        gmail : gmail,
        youtube : youtube
    })
    locaDatalUP("teamData" , teamDataArray)
    dataLoad()

})


dataLoad()
function dataLoad (){
    let localData = localDataDown('teamData');
    let outputLoad = "";

    localData.map((data) => {

        let lcData = "";
        data.skill.map((skl) => {
            lcData += '<li class="list-group-item">' + skl + '</li>'
        })
        outputLoad += `
            <div class="col-lg-4 mb-4">
                <div class="team">
                    <div class="round"></div>
                    <div class="image">
                        <img src="${data.image}" alt="" class="team-img">
                    </div>
                    <h2>${data.name}</h2>
                    <p>${data.titel}</p>
                    <small> <b>Gender :</b> ${data.gender}</small>
                    <hr class="mt-3 hr">
                    <ul class="list-group mt-3">
                        <li class="text-left mb-2"><b>Skill :</b></li>
                        ${lcData}
                    </ul>
                    <ul class="linkIcon">
                        <li>${data.facebook == "" ? "" : '<a href="#"><i class="fab fa-facebook-f"></i></a>' }</li>
                        <li>${data.gmail == ""  ? "" :  '<a href="#"><i class="far fa-envelope"></i></a>'}</li>
                        <li>${data.twitter == ""  ? "" :  '<a href="#"><i class="fab fa-twitter"></i></a>'}</li>
                        <li>${data.instagram  == "" ? "" :  '<a href="#"><i class="fab fa-instagram"></i></a>'}</li>
                        <li>${data.youtube == ""  ? "" :  '<a href="#"><i class="fab fa-youtube"></i></a>'}</li>
                    </ul>
                </div>
            </div>
        `
    })
    document.getElementById('output').innerHTML = outputLoad;
}