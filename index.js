document.addEventListener('DOMContentLoaded', () => {
  const palindromeInput = document.getElementById('palindrome-input');
  const palindromeButton = document.getElementById('palindrome-button');
  const palindromeResultContainer = document.getElementById('palindrome-result-container');
  
  // Helper function to normalize characters (remove accents and convert to lowercase)
  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD") // Decompose combined graphemes (e.g., á -> a + ´)
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
      .replace(/\s+/g, ''); // Remove all spaces
  };

  palindromeButton.addEventListener('click', () => {
    const originalWord = palindromeInput.value.trim();
    const word = normalizeString(originalWord);

    palindromeResultContainer.innerHTML = '';

    if (originalWord === '') {
      const alertHTML = `
        <div role="alert" class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Por favor, escribe una palabra.</span>
        </div>`;
      palindromeResultContainer.innerHTML = alertHTML;
      return;
    }
  
    const reversedWord = word.split('').reverse().join('');
  
    if (word === reversedWord) {
      const alertHTML = `
        <div role="alert" class="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>"${originalWord}" es un palíndromo.</span>
        </div>`;
      palindromeResultContainer.innerHTML = alertHTML;
    } else {
      const alertHTML = `
        <div role="alert" class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>"${originalWord}" no es un palíndromo.</span>
        </div>`;
      palindromeResultContainer.innerHTML = alertHTML;
    }
  });
  
  const numberOneInput = document.getElementById('number-one-input');
  const numberTwoInput = document.getElementById('number-two-input');
  const compareButton = document.getElementById('compare-button');
  const compareResultContainer = document.getElementById('compare-result-container');

  compareButton.addEventListener('click', () => {
    const num1String = numberOneInput.value;
    const num2String = numberTwoInput.value;

    compareResultContainer.innerHTML = '';

    if (num1String === '' || num2String === '') {
      const alertHTML = `
        <div role="alert" class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Por favor, ingresa ambos números.</span>
        </div>`;
      compareResultContainer.innerHTML = alertHTML;
      return;
    }

    const num1 = parseFloat(num1String);
    const num2 = parseFloat(num2String);

    if (isNaN(num1) || isNaN(num2)) {
        const alertHTML = `
        <div role="alert" class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Por favor, ingresa números válidos.</span>
        </div>`;
      compareResultContainer.innerHTML = alertHTML;
      return;
    }

    let message;
    if (num1 > num2) {
      message = `El ${num1} es el numero que es mayor`;
    } else if (num2 > num1) {
      message = `El ${num2} es el numero que es mayor`;
    } else {
      message = `${num1} y ${num2} son iguales.`;
    }

    const alertHTML = `
      <div role="alert" class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>${message}</span>
      </div>`;
    compareResultContainer.innerHTML = alertHTML;
  });

  const phraseInput = document.getElementById('phrase-input');
  const vowelButton = document.getElementById('vowel-button');
  const vowelResultContainer = document.getElementById('vowel-result-container');

  const normalizeCharForVowels = (char) => {
    const accentMap = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u'
    };
    return accentMap[char] || char;
  };

  vowelButton.addEventListener('click', () => {
    const phrase = phraseInput.value.toLowerCase();
    vowelResultContainer.innerHTML = '';

    if (phrase.trim() === '') {
      const alertHTML = `
        <div role="alert" class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Por favor, escribe una frase.</span>
        </div>`;
      vowelResultContainer.innerHTML = alertHTML;
      return;
    }

    const vowelCounts = {};
    const baseVowels = 'aeiou';

    for (let char of phrase) {
      const normalized = normalizeCharForVowels(char);
      if (baseVowels.includes(normalized)) {
        vowelCounts[normalized] = (vowelCounts[normalized] || 0) + 1;
      }
    }

    if (Object.keys(vowelCounts).length === 0) {
      const alertHTML = `
        <div role="alert" class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>No se encontraron vocales en la frase.</span>
        </div>`;
      vowelResultContainer.innerHTML = alertHTML;
    } else {
      for (const vowel in vowelCounts) {
        const count = vowelCounts[vowel];
        const vowelDisplayHTML = `
          <div class="text-center p-2">
            <span class="text-5xl font-bold text-primary">${vowel.toUpperCase()}</span>
            <p class="text-md mt-1">${count} ${count === 1 ? 'vez' : 'veces'}</p>
          </div>
        `;
        vowelResultContainer.innerHTML += vowelDisplayHTML;
      }
    }
  });
})