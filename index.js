const sideMeun = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
  sideMeun.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
  sideMeun.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
 document.body.classList.toggle('dark-theme-variables')

 themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
 themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// fill orders in table
Orders.forEach(order => {
 const tr = document.createElement('tr')
 const trContent = '
            <td>${order.productName}</td>
            <td>85631</td>
            <td>Due</td>
            <td class="warning">Pending</td>
            <td class="primary">Details</td>
 '
})