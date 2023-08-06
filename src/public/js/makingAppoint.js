let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let preloader = document.getElementById('preloader-wrapper');
let bodyElement = document.querySelector('body');


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const sessionID = getCookie('sessionID');
console.log('sid: ', sessionID);

let username = '';
let user_id = '';

// Get username asynchronously
fetch('/getUsn', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionID}`
    }
})
.then(res => res.json())
.then(data => {
    username = data.session.user.username;
    console.log('username: ', username);

    // Get user_id / patID using the retrieved username
    return fetch('/getID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
    });
})
.then(res => res.json())
.then(data => {
    user_id = data.id;
    console.log('user_id: ', user_id);
})
.catch(err => console.log(err));
  

// const codeArr = [
//     `<div class="q-box__question q-option">
//     <input class="form-check-input question__input" id="q_1_yes" name="q_1"
//         type="radio" value="Yes">
//     <label class="form-check-label question__label" for="q_1_yes">
//         <div class="container-info" id="profile-name">
//             <p>
//                 <span><i class="fa fa-solid fa-circle-user"></i></span>
//                 <span>name</span>
//             </p>
//             <span class="card-text" style="font-weight: 900; font-size: 130%;">${data.name}</span>
//         </div>
//         <div class="container-info">
//             <p>
//                 <span><i class="fa fa-solid fa-cake-candles"></i></span>
//                 <span>birthday</span>
//             </p>
//             <span class="card-text">${data.birth}</span>
//         </div>
//         <div class="container-info">
//             <p>
//                 <span><i class="fa fa-solid fa-mobile"></i></span>
//                 <span>phone</span>
//             </p>
//             <span class="card-text">${data.phone}</span>
//         </div>
//         <div class="container-info">
//             <p>
//                 <span><i class="fa fa-solid fa-envelope"></i></span>
//                 <span>gmail</span>
//             </p>
//             <span class="card-text">${data.email}</span>
//         </div>
//     </label>
// </div>`,
// `<div class="q-box__question">
// <input class="form-check-input question__input" id="q_2_yes" name="q_2"
//     type="radio" value="Yes">
// <label class="form-check-label question__label" for="q_2_yes">
//     <div class="container-hospital">
//         <span>
//             <img src="${data.avatar}" alt=""
//             style="max-width: 50px; max-height: 50px; width: auto; height: auto;">
//         </span>
//         <div style="margin-left: 10px;">
//             <p style="margin-bottom: 0;">${data.name}</p>
//             <p style="margin-bottom: 0; color: #716969;">${data.location}</p>
//         </div>    
//     </div>
// </label>
// </div>`
// ]

form.onsubmit = () => {
    return false
}
let current_step = 0;
let stepCount = 5
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}

const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

nextBtn.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
});
 
 
prevBtn.addEventListener('click', () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
        }
    }
 
    if (current_step == 0) {
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
});
 
 
submitBtn.addEventListener('click', () => {
    preloader.classList.add('d-block');
 
    const timer = ms => new Promise(res => setTimeout(res, ms));
 
    timer(3000)
        .then(() => {
            bodyElement.classList.add('loaded');
        }).then(() => {
            step[stepCount].classList.remove('d-block');
            step[stepCount].classList.add('d-none');
            prevBtn.classList.remove('d-inline-block');
            prevBtn.classList.add('d-none');
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            succcessDiv.classList.remove('d-none');
            succcessDiv.classList.add('d-block');
        })
 
});