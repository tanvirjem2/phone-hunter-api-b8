const loadPhone = async (searchText = 'samsung', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    // console.log(phones);
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) => {
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    // learn new thing ----------------
    phoneContainer.textContent = '';
    // show all button
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length >= 6 && !isShowAll) {
        showAllContainer.classList.remove('hidden')
    } else {
        showAllContainer.classList.add('hidden');
    }
    // console.log(isShowAll)
    if (!isShowAll) {
        phones = phones.slice(0, 6);
    }
    phones.forEach(element => {
        console.log(element);
        // 1. Create a div.
        const div = document.createElement('div');
        div.classList = `rounded-lg text-center border-solid border-[1px] border-[#CFCFCF] p-6`
        div.innerHTML = `
        <div class="bg-[#f3f8ff] p-5 rounded-lg">
            <img class="mx-auto" src="${element.image}" alt="">
        </div>
        <h4 class="text-xl font-bold pt-6">${element.phone_name}</h4>
        <p class="text-sm pt-3 pb-2">
            There are many variations of <br>
            passages of available, but the <br>
            majority have suffered</p>
        <h5 class="font-bold pb-4">$999</h5>
        <button onclick="handleShowDetail('${element.slug}')" class="btn bg-[#0D6EFD] rounded-lg text-white">Show Details</button>
        `
        phoneContainer.appendChild(div);
    })
    toggleLoadingSpinner(false);
}

// show details

const handleShowDetail = async (id) => {
    // console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data
    showPhoneDetails(phone)
}

// show data modal
const showPhoneDetails = (phone) => {
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;
    const phoneImage = document.getElementById('show-detail-phone-img')
    console.log(phone.image)
    phoneImage.innerHTML = `
    <img src="${phone.image}" alt="">
    `
    console.log(phone);
    const phoneDetailContainer = document.getElementById('show-detail-container')
    phoneDetailContainer.innerHTML = `
    <p class="text-sm mt-4">It is a long established fact that a reader will be distracted by the readable content
    of a page when looking at its layout.</p>
    <div class="space-y-4 mt-4">
        <p><strong>Storage :</strong><span class="text-sm"> ${phone.mainFeatures.storage}</span></p>
        <p><strong>Display Size :</strong><span class="text-sm"> ${phone.mainFeatures.displaySize}</span></p>
        <p><strong>Chipset :</strong><span class="text-sm"> ${phone.mainFeatures.chipSet}</span></p>
        <p><strong>Memory :</strong><span class="text-sm"> ${phone.mainFeatures.memory}</span></p>
        <p><strong>Slug :</strong><span class="text-sm"> ${phone.slug}</span></p>
        <p><strong>Release data :</strong><span class="text-sm"> ${phone.releaseDate}</span></p>
        <p><strong>Brand :</strong><span class="text-sm"> ${phone.brand}</span></p>
        <p><strong>GPS :</strong><span class="text-sm"> ${phone.others.GPS}</span></p>
    </div>
    `
    show_details_modal.showModal()
}


// handle search button
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true)
    // console.log('clicked')
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText, isShowAll)

    searchField.value = '';
}

// loading spinner

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}

// show all button
const showAllButton = () => {
    // console.log('clicked')
    handleSearch(true);
}

loadPhone();