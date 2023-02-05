var count = 0;
const cardclick = document.getElementById('card');
cardclick.addEventListener('click',async()=>{
    if(count < 1){
        const data = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const response = await data.json();
        // console.log(response);
        const name = response.name;
        const email = response.email;
        const phone = response.phone;
        const address = response.address.city;
        const website = response.website;
        const company = response.company.name;
        const info = document.createElement("div");
        info.setAttribute("id","info");
        const namepara= document.createElement("p");
        const emailpara = document.createElement("p");
        const phonepara = document.createElement("p");
        const addresspara = document.createElement("p");
        const websitepara = document.createElement("p");
        const companypara = document.createElement("p");
        namepara.innerHTML = `Name : ${name}`;
        emailpara.innerHTML = `Email : ${email}`;
        phonepara.innerHTML = `Phone : ${phone}`;
        addresspara.innerHTML = `Address : ${address}`;
        websitepara.innerHTML = `Website : ${website}`;
        companypara.innerHTML = `Company : ${company}`;
        info.appendChild(namepara);
        info.appendChild(emailpara);
        info.appendChild(phonepara);
        info.appendChild(addresspara);
        info.appendChild(websitepara);
        info.appendChild(companypara);
        const content = document.getElementById('content');
        content.appendChild(info);
        // const newcard = document.getElementById('newcard');
        // newcard.appendChild(namepara);
        // newcard.appendChild(emailpara);
        // newcard.appendChild(phonepara);
        count++;
    } 
})
const buttonclick = document.getElementById('newbutton');
function changedisp(){
    buttonclick.style.backgroundColor = 'rgb(230,230,250)';
    buttonclick.style.border = 'solid purple 5px';
    buttonclick.style.fontStyle = 'italic';
    buttonclick.style.fontWeight = 'bolder';
}

buttonclick.addEventListener('click',changedisp);