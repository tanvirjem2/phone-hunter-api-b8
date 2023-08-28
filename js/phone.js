const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    // console.log(phones);
    displayPhones(data.data)
}

const displayPhones = phones => {
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container');
    // show all button
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 7) {
        showAllContainer.classList.remove('hidden')
    } else {
        showAllContainer.classList.add('hidden');
    }
    phones = phones.slice(0, 6);
    // learn new thing ----------------
    phoneContainer.textContent = '';
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
        <button class="btn bg-[#0D6EFD] rounded-lg text-white">Show Details</button>
        `
        phoneContainer.appendChild(div);
    })
}


// handle search button
const handleSearch = () => {
    // console.log('clicked')
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText)

    searchField.value = '';
}

loadPhone();