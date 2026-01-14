// ==================== CONFIGURATION ====================
// API key is now loaded from config.js

// ==================== STATE MANAGEMENT ====================
let exchangeRates = {};
let currentBaseCurrency = 'USD';

// ==================== POPULAR CURRENCY PAIRS ====================
const popularPairs = [
    { from: 'USD', to: 'EUR' },
    { from: 'USD', to: 'GBP' },
    { from: 'USD', to: 'JPY' },
    { from: 'EUR', to: 'USD' },
    { from: 'GBP', to: 'USD' },
    { from: 'USD', to: 'INR' }
];

// ==================== CURRENCY DATA ====================
const currencies = {
    'AED': { name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪' },
    'AFN': { name: 'Afghan Afghani', symbol: '؋', flag: '🇦🇫' },
    'ALL': { name: 'Albanian Lek', symbol: 'L', flag: '🇦🇱' },
    'AMD': { name: 'Armenian Dram', symbol: '֏', flag: '🇦🇲' },
    'ANG': { name: 'Netherlands Antillian Guilder', symbol: 'ƒ', flag: '🇨🇼' },
    'AOA': { name: 'Angolan Kwanza', symbol: 'Kz', flag: '🇦🇴' },
    'ARS': { name: 'Argentine Peso', symbol: '$', flag: '��' },
    'AUD': { name: 'Australian Dollar', symbol: 'A$', flag: '�🇺' },
    'AWG': { name: 'Aruban Florin', symbol: 'ƒ', flag: '🇦🇼' },
    'AZN': { name: 'Azerbaijani Manat', symbol: '₼', flag: '🇦🇿' },
    'BAM': { name: 'Bosnia-Herzegovina Convertible Mark', symbol: 'KM', flag: '🇧🇦' },
    'BBD': { name: 'Barbadian Dollar', symbol: '$', flag: '🇧🇧' },
    'BDT': { name: 'Bangladeshi Taka', symbol: '৳', flag: '🇧🇩' },
    'BGN': { name: 'Bulgarian Lev', symbol: 'лв', flag: '🇧🇬' },
    'BHD': { name: 'Bahraini Dinar', symbol: '.د.ب', flag: '🇧🇭' },
    'BIF': { name: 'Burundian Franc', symbol: 'Fr', flag: '🇧🇮' },
    'BMD': { name: 'Bermudan Dollar', symbol: '$', flag: '🇧🇲' },
    'BND': { name: 'Brunei Dollar', symbol: '$', flag: '🇧🇳' },
    'BOB': { name: 'Bolivian Boliviano', symbol: 'Bs.', flag: '🇧🇴' },
    'BRL': { name: 'Brazilian Real', symbol: 'R$', flag: '��' },
    'BSD': { name: 'Bahamian Dollar', symbol: '$', flag: '🇧🇸' },
    'BTN': { name: 'Bhutanese Ngultrum', symbol: 'Nu.', flag: '🇧🇹' },
    'BWP': { name: 'Botswanan Pula', symbol: 'P', flag: '🇧🇼' },
    'BYN': { name: 'Belarusian Ruble', symbol: 'Br', flag: '🇧🇾' },
    'BZD': { name: 'Belize Dollar', symbol: '$', flag: '��' },
    'CAD': { name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
    'CDF': { name: 'Congolese Franc', symbol: 'Fr', flag: '🇨🇩' },
    'CHF': { name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭' },
    'CLP': { name: 'Chilean Peso', symbol: '$', flag: '🇨🇱' },
    'CNY': { name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
    'COP': { name: 'Colombian Peso', symbol: '$', flag: '🇨🇴' },
    'CRC': { name: 'Costa Rican Colón', symbol: '₡', flag: '🇨🇷' },
    'CUP': { name: 'Cuban Peso', symbol: '$', flag: '🇨🇺' },
    'CVE': { name: 'Cape Verdean Escudo', symbol: '$', flag: '🇨🇻' },
    'CZK': { name: 'Czech Koruna', symbol: 'Kč', flag: '🇨🇿' },
    'DJF': { name: 'Djiboutian Franc', symbol: 'Fr', flag: '🇩🇯' },
    'DKK': { name: 'Danish Krone', symbol: 'kr', flag: '🇩🇰' },
    'DOP': { name: 'Dominican Peso', symbol: '$', flag: '🇩🇴' },
    'DZD': { name: 'Algerian Dinar', symbol: 'د.ج', flag: '🇩🇿' },
    'EGP': { name: 'Egyptian Pound', symbol: 'E£', flag: '🇪🇬' },
    'ERN': { name: 'Eritrean Nakfa', symbol: 'Nfk', flag: '🇪🇷' },
    'ETB': { name: 'Ethiopian Birr', symbol: 'Br', flag: '🇪🇹' },
    'EUR': { name: 'Euro', symbol: '€', flag: '🇪🇺' },
    'FJD': { name: 'Fijian Dollar', symbol: '$', flag: '🇫🇯' },
    'FKP': { name: 'Falkland Islands Pound', symbol: '£', flag: '🇫🇰' },
    'FOK': { name: 'Faroese Króna', symbol: 'kr', flag: '🇫🇴' },
    'GBP': { name: 'British Pound', symbol: '£', flag: '🇬🇧' },
    'GEL': { name: 'Georgian Lari', symbol: '₾', flag: '🇬🇪' },
    'GGP': { name: 'Guernsey Pound', symbol: '£', flag: '🇬🇬' },
    'GHS': { name: 'Ghanaian Cedi', symbol: '₵', flag: '🇬🇭' },
    'GIP': { name: 'Gibraltar Pound', symbol: '£', flag: '🇬🇮' },
    'GMD': { name: 'Gambian Dalasi', symbol: 'D', flag: '🇬🇲' },
    'GNF': { name: 'Guinean Franc', symbol: 'Fr', flag: '🇬🇳' },
    'GTQ': { name: 'Guatemalan Quetzal', symbol: 'Q', flag: '🇬🇹' },
    'GYD': { name: 'Guyanaese Dollar', symbol: '$', flag: '🇬🇾' },
    'HKD': { name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰' },
    'HNL': { name: 'Honduran Lempira', symbol: 'L', flag: '🇭🇳' },
    'HRK': { name: 'Croatian Kuna', symbol: 'kn', flag: '🇭🇷' },
    'HTG': { name: 'Haitian Gourde', symbol: 'G', flag: '🇭🇹' },
    'HUF': { name: 'Hungarian Forint', symbol: 'Ft', flag: '🇭🇺' },
    'IDR': { name: 'Indonesian Rupiah', symbol: 'Rp', flag: '🇮🇩' },
    'ILS': { name: 'Israeli New Shekel', symbol: '₪', flag: '🇮�' },
    'IMP': { name: 'Isle of Man Pound', symbol: '£', flag: '🇮🇲' },
    'INR': { name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
    'IQD': { name: 'Iraqi Dinar', symbol: 'ع.د', flag: '��' },
    'IRR': { name: 'Iranian Rial', symbol: '﷼', flag: '🇮🇷' },
    'ISK': { name: 'Icelandic Króna', symbol: 'kr', flag: '🇮🇸' },
    'JEP': { name: 'Jersey Pound', symbol: '£', flag: '🇯🇪' },
    'JMD': { name: 'Jamaican Dollar', symbol: '$', flag: '🇯�' },
    'JOD': { name: 'Jordanian Dinar', symbol: 'د.ا', flag: '�🇴' },
    'JPY': { name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
    'KES': { name: 'Kenyan Shilling', symbol: 'Sh', flag: '🇰🇪' },
    'KGS': { name: 'Kyrgystani Som', symbol: 'с', flag: '🇰🇬' },
    'KHR': { name: 'Cambodian Riel', symbol: '៛', flag: '🇰🇭' },
    'KID': { name: 'Kiribati Dollar', symbol: '$', flag: '🇰🇮' },
    'KMF': { name: 'Comorian Franc', symbol: 'Fr', flag: '��' },
    'KRW': { name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
    'KWD': { name: 'Kuwaiti Dinar', symbol: 'د.ك', flag: '🇰🇼' },
    'KYD': { name: 'Cayman Islands Dollar', symbol: '$', flag: '🇰🇾' },
    'KZT': { name: 'Kazakhstani Tenge', symbol: '₸', flag: '🇰🇿' },
    'LAK': { name: 'Laotian Kip', symbol: '₭', flag: '🇱🇦' },
    'LBP': { name: 'Lebanese Pound', symbol: 'ل.ل', flag: '🇱🇧' },
    'LKR': { name: 'Sri Lankan Rupee', symbol: 'Rs', flag: '🇱🇰' },
    'LRD': { name: 'Liberian Dollar', symbol: '$', flag: '�🇷' },
    'LSL': { name: 'Lesotho Loti', symbol: 'L', flag: '🇱�🇸' },
    'LYD': { name: 'Libyan Dinar', symbol: 'ل.د', flag: '�🇾' },
    'MAD': { name: 'Moroccan Dirham', symbol: 'د.م.', flag: '🇲🇦' },
    'MDL': { name: 'Moldovan Leu', symbol: 'L', flag: '🇲🇩' },
    'MGA': { name: 'Malagasy Ariary', symbol: 'Ar', flag: '🇲🇬' },
    'MKD': { name: 'Macedonian Denar', symbol: 'ден', flag: '🇲🇰' },
    'MMK': { name: 'Myanmar Kyat', symbol: 'K', flag: '🇲🇲' },
    'MNT': { name: 'Mongolian Tugrik', symbol: '₮', flag: '��🇳' },
    'MOP': { name: 'Macanese Pataca', symbol: 'P', flag: '�🇴' },
    'MRU': { name: 'Mauritanian Ouguiya', symbol: 'UM', flag: '🇲🇷' },
    'MUR': { name: 'Mauritian Rupee', symbol: '₨', flag: '🇲🇺' },
    'MVR': { name: 'Maldivian Rufiyaa', symbol: '.ރ', flag: '🇲🇻' },
    'MWK': { name: 'Malawian Kwacha', symbol: 'MK', flag: '🇲🇼' },
    'MXN': { name: 'Mexican Peso', symbol: '$', flag: '🇲🇽' },
    'MYR': { name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾' },
    'MZN': { name: 'Mozambican Metical', symbol: 'MT', flag: '🇲🇿' },
    'NAD': { name: 'Namibian Dollar', symbol: '$', flag: '🇳🇦' },
    'NGN': { name: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬' },
    'NIO': { name: 'Nicaraguan Córdoba', symbol: 'C$', flag: '��' },
    'NOK': { name: 'Norwegian Krone', symbol: 'kr', flag: '🇳🇴' },
    'NPR': { name: 'Nepalese Rupee', symbol: '₨', flag: '🇳🇵' },
    'NZD': { name: 'New Zealand Dollar', symbol: 'NZ$', flag: '🇳🇿' },
    'OMR': { name: 'Omani Rial', symbol: 'ر.ع.', flag: '🇴🇲' },
    'PAB': { name: 'Panamanian Balboa', symbol: 'B/.', flag: '🇵🇦' },
    'PEN': { name: 'Peruvian Sol', symbol: 'S/', flag: '🇵🇪' },
    'PGK': { name: 'Papua New Guinean Kina', symbol: 'K', flag: '🇵🇬' },
    'PHP': { name: 'Philippine Peso', symbol: '₱', flag: '🇵🇭' },
    'PKR': { name: 'Pakistani Rupee', symbol: '₨', flag: '�🇰' },
    'PLN': { name: 'Polish Zloty', symbol: 'zł', flag: '🇵🇱' },
    'PYG': { name: 'Paraguayan Guarani', symbol: '₲', flag: '🇵🇾' },
    'QAR': { name: 'Qatari Rial', symbol: 'ر.ق', flag: '��' },
    'RON': { name: 'Romanian Leu', symbol: 'lei', flag: '🇷🇴' },
    'RSD': { name: 'Serbian Dinar', symbol: 'дин.', flag: '🇷🇸' },
    'RUB': { name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺' },
    'RWF': { name: 'Rwandan Franc', symbol: 'Fr', flag: '🇷🇼' },
    'SAR': { name: 'Saudi Riyal', symbol: '﷼', flag: '��' },
    'SBD': { name: 'Solomon Islands Dollar', symbol: '$', flag: '🇸🇧' },
    'SCR': { name: 'Seychellois Rupee', symbol: '₨', flag: '��' },
    'SDG': { name: 'Sudanese Pound', symbol: '£', flag: '🇸🇩' },
    'SEK': { name: 'Swedish Krona', symbol: 'kr', flag: '🇸🇪' },
    'SGD': { name: 'Singapore Dollar', symbol: 'S$', flag: '��' },
    'SHP': { name: 'Saint Helena Pound', symbol: '£', flag: '🇸🇭' },
    'SLE': { name: 'Sierra Leonean Leone', symbol: 'Le', flag: '🇸🇱' },
    'SOS': { name: 'Somali Shilling', symbol: 'Sh', flag: '��' },
    'SRD': { name: 'Surinamese Dollar', symbol: '$', flag: '🇸🇷' },
    'SSP': { name: 'South Sudanese Pound', symbol: '£', flag: '🇸🇸' },
    'STN': { name: 'São Tomé and Príncipe Dobra', symbol: 'Db', flag: '🇸🇹' },
    'SYP': { name: 'Syrian Pound', symbol: '£', flag: '🇸🇾' },
    'SZL': { name: 'Swazi Lilangeni', symbol: 'L', flag: '🇸�' },
    'THB': { name: 'Thai Baht', symbol: '฿', flag: '🇹🇭' },
    'TJS': { name: 'Tajikistani Somoni', symbol: 'ЅМ', flag: '🇹🇯' },
    'TMT': { name: 'Turkmenistani Manat', symbol: 'm', flag: '🇹🇲' },
    'TND': { name: 'Tunisian Dinar', symbol: 'د.ت', flag: '🇹🇳' },
    'TOP': { name: 'Tongan Paʻanga', symbol: 'T$', flag: '🇹🇴' },
    'TRY': { name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷' },
    'TTD': { name: 'Trinidad and Tobago Dollar', symbol: '$', flag: '🇹🇹' },
    'TVD': { name: 'Tuvaluan Dollar', symbol: '$', flag: '🇹🇻' },
    'TWD': { name: 'New Taiwan Dollar', symbol: 'NT$', flag: '🇹🇼' },
    'TZS': { name: 'Tanzanian Shilling', symbol: 'Sh', flag: '🇹🇿' },
    'UAH': { name: 'Ukrainian Hryvnia', symbol: '₴', flag: '🇺🇦' },
    'UGX': { name: 'Ugandan Shilling', symbol: 'Sh', flag: '🇺🇬' },
    'USD': { name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
    'UYU': { name: 'Uruguayan Peso', symbol: '$', flag: '🇺🇾' },
    'UZS': { name: 'Uzbekistan Som', symbol: 'so\'m', flag: '🇺🇿' },
    'VES': { name: 'Venezuelan Bolívar', symbol: 'Bs.', flag: '��' },
    'VND': { name: 'Vietnamese Dong', symbol: '₫', flag: '🇻🇳' },
    'VUV': { name: 'Vanuatu Vatu', symbol: 'Vt', flag: '🇻🇺' },
    'WST': { name: 'Samoan Tala', symbol: 'T', flag: '🇼🇸' },
    'XAF': { name: 'Central African CFA Franc', symbol: 'Fr', flag: '🇨🇲' },
    'XCD': { name: 'East Caribbean Dollar', symbol: '$', flag: '🇦🇬' },
    'XDR': { name: 'Special Drawing Rights', symbol: 'SDR', flag: '🌐' },
    'XOF': { name: 'West African CFA Franc', symbol: 'Fr', flag: '🇸🇳' },
    'XPF': { name: 'CFP Franc', symbol: 'Fr', flag: '🇵🇫' },
    'YER': { name: 'Yemeni Rial', symbol: '﷼', flag: '🇾🇪' },
    'ZAR': { name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
    'ZMW': { name: 'Zambian Kwacha', symbol: 'ZK', flag: '🇿🇲' },
    'ZWL': { name: 'Zimbabwean Dollar', symbol: '$', flag: '��' }
};

// ==================== DOM ELEMENTS ====================
const amountInput = document.getElementById('amount-input');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const swapButton = document.getElementById('swap-btn');
const convertButton = document.getElementById('convert-btn');
const resultSection = document.getElementById('result-section');
const resultAmount = document.getElementById('result-amount');
const resultCurrency = document.getElementById('result-currency');
const rateText = document.getElementById('rate-text');
const loadingOverlay = document.getElementById('loading-overlay');
const popularGrid = document.getElementById('popular-grid');
const fromFlag = document.getElementById('from-flag');
const toFlag = document.getElementById('to-flag');

// ==================== INITIALIZATION ====================
function init() {
    populateCurrencySelects();
    updateCurrencyFlags();
    fetchExchangeRates(currentBaseCurrency);
    setupEventListeners();
    renderPopularConversions();
}

// ==================== POPULATE CURRENCY SELECTS ====================
function populateCurrencySelects() {
    const currencyOptions = Object.entries(currencies)
        .map(([code, data]) => `<option value="${code}">${code} - ${data.name}</option>`)
        .join('');

    fromCurrencySelect.innerHTML = currencyOptions;
    toCurrencySelect.innerHTML = currencyOptions;

    // Set default values
    fromCurrencySelect.value = 'USD';
    toCurrencySelect.value = 'EUR';
}

// ==================== UPDATE CURRENCY FLAGS ====================
function updateCurrencyFlags() {
    const fromCode = fromCurrencySelect.value;
    const toCode = toCurrencySelect.value;

    fromFlag.textContent = currencies[fromCode]?.flag || '';
    toFlag.textContent = currencies[toCode]?.flag || '';
}

// ==================== FETCH EXCHANGE RATES ====================
async function fetchExchangeRates(baseCurrency) {
    try {
        showLoading(true);

        // Using the free tier endpoint - API key loaded from config.js
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${CONFIG.API_KEY}/latest/${baseCurrency}`);

        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }

        const data = await response.json();

        if (data.result === 'success') {
            exchangeRates = data.conversion_rates;
            currentBaseCurrency = baseCurrency;
            console.log('Exchange rates updated successfully');
        } else {
            throw new Error(data['error-type'] || 'API Error');
        }

        showLoading(false);
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        showLoading(false);

        // Fallback to mock data for demonstration
        if (error.message.includes('Failed to fetch') || !CONFIG.API_KEY || CONFIG.API_KEY === 'YOUR_API_KEY_HERE') {
            console.warn('Using mock data. Please add your API key for real-time rates.');
            useMockData(baseCurrency);
        } else {
            showError('Failed to fetch exchange rates. Please try again.');
        }
    }
}

// ==================== MOCK DATA (FOR DEMO) ====================
function useMockData(baseCurrency) {
    // Mock exchange rates for demonstration
    const mockRates = {
        'USD': 1,
        'EUR': 0.85,
        'GBP': 0.73,
        'JPY': 110.0,
        'AUD': 1.35,
        'CAD': 1.25,
        'CHF': 0.92,
        'CNY': 6.45,
        'INR': 74.5,
        'MXN': 20.0,
        'BRL': 5.25,
        'ZAR': 14.5,
        'KRW': 1180.0,
        'SGD': 1.35,
        'NZD': 1.42,
        'SEK': 8.6,
        'NOK': 8.5,
        'DKK': 6.35,
        'PLN': 3.9,
        'THB': 33.0,
        'MYR': 4.15,
        'IDR': 14250.0,
        'HKD': 7.78,
        'AED': 3.67,
        'SAR': 3.75,
        'TRY': 8.5,
        'RUB': 75.0,
        'PHP': 50.0,
        'VND': 23000.0,
        'EGP': 15.7
    };

    // Adjust rates based on base currency
    if (baseCurrency !== 'USD') {
        const baseRate = mockRates[baseCurrency];
        exchangeRates = {};
        for (const [currency, rate] of Object.entries(mockRates)) {
            exchangeRates[currency] = rate / baseRate;
        }
    } else {
        exchangeRates = mockRates;
    }

    currentBaseCurrency = baseCurrency;
    console.log('Using mock exchange rates');
}

// ==================== CONVERT CURRENCY ====================
function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Validation
    if (!amount || amount <= 0) {
        showError('Please enter a valid amount');
        return;
    }

    if (fromCurrency === toCurrency) {
        showError('Please select different currencies');
        return;
    }

    // Check if we need to fetch new rates
    if (currentBaseCurrency !== fromCurrency) {
        fetchExchangeRates(fromCurrency).then(() => {
            performConversion(amount, fromCurrency, toCurrency);
        });
    } else {
        performConversion(amount, fromCurrency, toCurrency);
    }
}

// ==================== PERFORM CONVERSION ====================
function performConversion(amount, fromCurrency, toCurrency) {
    const rate = exchangeRates[toCurrency];

    if (!rate) {
        showError('Exchange rate not available');
        return;
    }

    const convertedAmount = amount * rate;

    // Display result with animation
    displayResult(convertedAmount, toCurrency, rate, fromCurrency);
}

// ==================== DISPLAY RESULT ====================
function displayResult(amount, currency, rate, fromCurrency) {
    // Format the amount
    const formattedAmount = formatCurrency(amount, currency);

    // Update result display
    resultAmount.textContent = formattedAmount;
    resultCurrency.textContent = currency;

    // Update exchange rate info
    const formattedRate = rate.toFixed(4);
    rateText.textContent = `1 ${fromCurrency} = ${formattedRate} ${currency}`;

    // Show result section with animation
    resultSection.classList.add('show');

    // Trigger count-up animation
    animateValue(resultAmount, 0, amount, 500, currency);
}

// ==================== ANIMATE VALUE ====================
function animateValue(element, start, end, duration, currency) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * easeOut;

        element.textContent = formatCurrency(current, currency);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ==================== FORMAT CURRENCY ====================
function formatCurrency(amount, currencyCode) {
    // Format with appropriate decimal places
    let decimals = 2;

    // Some currencies don't use decimals
    if (['JPY', 'KRW', 'VND', 'IDR'].includes(currencyCode)) {
        decimals = 0;
    }

    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(amount);
}

// ==================== SWAP CURRENCIES ====================
function swapCurrencies() {
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;

    updateCurrencyFlags();

    // If there's a result, recalculate
    if (resultSection.classList.contains('show')) {
        convertCurrency();
    }
}

// ==================== RENDER POPULAR CONVERSIONS ====================
function renderPopularConversions() {
    popularGrid.innerHTML = popularPairs.map(pair => {
        const rate = getConversionRate(pair.from, pair.to);
        const formattedRate = rate ? formatCurrency(rate, pair.to) : '...';

        return `
            <div class="conversion-card" data-from="${pair.from}" data-to="${pair.to}">
                <div class="conversion-pair">
                    <span>${pair.from}</span>
                    <span class="conversion-arrow">→</span>
                    <span>${pair.to}</span>
                </div>
                <div class="conversion-rate">${formattedRate}</div>
            </div>
        `;
    }).join('');

    // Add click handlers
    document.querySelectorAll('.conversion-card').forEach(card => {
        card.addEventListener('click', () => {
            const from = card.dataset.from;
            const to = card.dataset.to;

            fromCurrencySelect.value = from;
            toCurrencySelect.value = to;
            updateCurrencyFlags();
            convertCurrency();

            // Scroll to converter
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ==================== GET CONVERSION RATE ====================
function getConversionRate(fromCurrency, toCurrency) {
    if (currentBaseCurrency === fromCurrency) {
        return exchangeRates[toCurrency];
    } else if (currentBaseCurrency === toCurrency) {
        return 1 / exchangeRates[fromCurrency];
    } else {
        // Convert through base currency
        const toBase = exchangeRates[fromCurrency];
        const toTarget = exchangeRates[toCurrency];
        return toTarget / toBase;
    }
}

// ==================== SHOW/HIDE LOADING ====================
function showLoading(show) {
    if (show) {
        loadingOverlay.classList.add('show');
    } else {
        loadingOverlay.classList.remove('show');
    }
}

// ==================== SHOW ERROR ====================
function showError(message) {
    // Create a simple error notification
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    errorDiv.textContent = message;

    document.body.appendChild(errorDiv);

    // Remove after 3 seconds
    setTimeout(() => {
        errorDiv.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => errorDiv.remove(), 300);
    }, 3000);
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Convert button
    convertButton.addEventListener('click', convertCurrency);

    // Swap button
    swapButton.addEventListener('click', swapCurrencies);

    // Currency select changes
    fromCurrencySelect.addEventListener('change', () => {
        updateCurrencyFlags();
        fetchExchangeRates(fromCurrencySelect.value);
    });

    toCurrencySelect.addEventListener('change', () => {
        updateCurrencyFlags();
    });

    // Enter key on amount input
    amountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            convertCurrency();
        }
    });

    // Auto-convert on amount change (debounced)
    let debounceTimer;
    amountInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (amountInput.value && parseFloat(amountInput.value) > 0) {
                convertCurrency();
            }
        }, 500);
    });
}

// ==================== ADD ANIMATION STYLES ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== START APPLICATION ====================
document.addEventListener('DOMContentLoaded', init);

// ==================== UPDATE POPULAR CONVERSIONS PERIODICALLY ====================
setInterval(() => {
    if (Object.keys(exchangeRates).length > 0) {
        renderPopularConversions();
    }
}, 60000); // Update every minute
