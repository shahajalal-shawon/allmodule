const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    // console.log(phones);
    displayPhones(phones);
} 

const displayPhones = phones =>{
    // console.log(phones);
    // 1:
    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    // show all button if there are more then 12 phones
    const showAllContainer = document.getElementById('show-all-container');    
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden'); 
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    // display only first 12 phones
    phones = phones.slice(0,12);

    phones.forEach(phone =>{
        // console.log(phone);
        //2: creat a div
        const phoneCard = document.createElement('div'); 
        phoneCard.classList =`card p-4 bg-gray-100 shadow-xl`;
        // 3: set inner HIML
        phoneCard.innerHTML =`
        <figure><img src="${phone.image}"/></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>There are many variations of passages of available, but the majority have suffered</p>
          <div class="card-actions justify-center">
            <button onclick="handelShowDeatils('${phone.slug}')"  class="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
      `;
    // 4: appnedChild
      phoneContainer.appendChild(phoneCard);
    });
    // hide loading
    toggleLodaingSpinner(false);
}

// 
const handelShowDeatils = async (id) =>{
    // console.log('show detailas click', id);
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;


    showPhoneDetails(phone);
    
}

const showPhoneDetails = (phone) =>{
    console.log(phone);
    const phoneName = document.getElementById('show-details-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML=`
    <img src="${phone.image}" alt="">
    <p><span>Storage: </span>${phone?.mainFeatures?.storage}</p>
    <p><span>Display: </span>${phone?.mainFeatures?.displaySize}</p>
    <p><span>ChipSet: </span>${phone?.mainFeatures?.chipSet}</p>
    <p><span>Memory: </span>${phone?.mainFeatures?.memory}</p>
    <p><span>Slug: </span>${phone?.slug}</p>
    <p><span>ReleaseDate: </span>${phone?.releaseDate}</p>
    <p><span>Brand: </span>${phone?.brand}</p>
    <p><span>GPS: </span>${phone?.others?.GPS || ' No GPS'}</p>
    `;


   // show the modal
   show_details_modal.showModal();
}



const handelSearch = (isShowAll) =>{
    toggleLodaingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText);
}

// const handelSearch2 = () =>{
//     toggleLodaingSpinner(true);
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     loadPhone(searchText);
// }

const toggleLodaingSpinner = (isLoasing) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoasing) {
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

// handel show all
const handelShowAll = ()=>{
     handelSearch();
}

// loadPhone();

