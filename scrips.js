const API_KEY = '54b9cff0f48a3f127fa5cd5906bbe251';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

let currentMovie = null;
let currentLayout = 1;
let logoImage = null;
let whatsappNumber = "(11) 99999-9999";
let whatsappText = "Assine agora";

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const contentContainer = document.getElementById('content-container');
const initialState = document.getElementById('initial-state');
const loadingElement = document.getElementById('loading');
const bannerPreview = document.getElementById('banner-preview');
const bannerContainer = document.getElementById('banner-container');
const generateButton = document.getElementById('generate-button');
const logoUpload = document.getElementById('logo-upload');
const logoPreview = document.getElementById('logo-preview');
const logoImageElement = document.getElementById('logo-image');
const whatsappInput = document.getElementById('whatsapp-input');
const whatsappTextSelect = document.getElementById('whatsapp-text');
const customTextContainer = document.getElementById('custom-text-container');
const customWhatsappText = document.getElementById('custom-whatsapp-text');
const updateWhatsappButton = document.getElementById('update-whatsapp');
const headerWhatsapp = document.getElementById('header-whatsapp');
const movieLogoPreview = document.getElementById('movie-logo-preview');
const movieLogoPreviewImg = document.getElementById('movie-logo-preview-img');

// Event Listeners
searchInput.addEventListener('input', debounce(handleSearchInput, 500));
searchButton.addEventListener('click', () => handleSearch(searchInput.value));
generateButton.addEventListener('click', generateAndDownloadBanner);

function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Other functions like handleSearchInput, generateAndDownloadBanner, etc. go here
