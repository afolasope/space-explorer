'use strict';
////////////NAVIGATION
const nav = document.querySelector('.nav');
const navBtns = document.querySelectorAll('.nav__btn');
const menuNav = document.querySelector('.nav__menu');
navBtns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn--open')) {
      nav.classList.add('open');
      menuNav.classList.add('open');
    }
    if (e.target.classList.contains('btn--close')) {
      nav.classList.remove('open');
      menuNav.classList.remove('open');
    }
  });
});

const fetchData = async () => {
  const data = await (await fetch('../starter-code/data.json')).json();
  return data;
};

// //////DESTINATION
const destinationTabs = document.querySelectorAll('.list-item');
const destDescription = document.querySelector('.common__text p');
const destDistance = document.querySelector('.distance h3');
const desTravel = document.querySelector('.days h3');
const desName = document.querySelector('.common__name h1');
const desImage = document.querySelector('.common__img img');

destinationTabs.forEach((tab) => {
  tab.addEventListener('click', async function (e) {
    destinationTabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    e.target.classList.add('active');
    const dataId = e.target.dataset.id;
    const data = await fetchData();
    const { destinations } = data;
    const checkMatch = destinations.filter(
      (item) => dataId === item.name.toLowerCase()
    );
    destDescription.textContent = `${checkMatch[0].description}`;
    destDistance.innerHTML = `${checkMatch[0].distance}`;
    desTravel.innerHTML = `${checkMatch[0].travel}`;
    desName.innerHTML = `${checkMatch[0].name.toUpperCase()}`;
    desImage.src = `${checkMatch[0].images.png}`;
  });
});

///////// TECHNOLOGY ////////////
const techTabs = document.querySelectorAll('.tech-nav-circle');
const techDescription = document.querySelector('.tech-desc p');
const techImage = document.querySelector('.tech-img img');
const techName = document.querySelector('.tech-name');

techTabs.forEach((tab) => {
  tab.addEventListener('click', async function (e) {
    console.log('here');
    techTabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    const dataId = e.currentTarget.dataset.id;
    const data = await fetchData();
    const { technology } = data;
    const match = technology.filter((item) => {
      return dataId === item.name;
    });
    console.log(match);
    console.log(match[0].name);
    techDescription.textContent = match[0].description;
    techName.textContent = match[0].name;
    techImage.src = match[0].images.landscape;
  });
});

///////////CREW
const crewTabs = document.querySelectorAll('.crew-list-item');
const crewImage = document.querySelector('.crew-img img');
const crewRole = document.querySelector('.crew-role');
const crewBio = document.querySelector('.common__text p');
const crewName = document.querySelector('.crew-name');

crewTabs.forEach((tab) => {
  tab.addEventListener('click', async function (e) {
    crewTabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    e.target.classList.add('active');
    const dataId = e.target.dataset.id;
    const data = await fetchData();
    const { crew } = data;
    const match = crew.filter((item) => {
      return dataId === item.name.split(' ')[0];
    });

    crewName.innerHTML = match[0].name;
    crewRole.innerHTML = match[0].role;
    crewBio.innerHTML = match[0].bio;
    crewImage.src = match[0].images.webp;
  });
});
